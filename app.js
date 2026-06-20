document.addEventListener('DOMContentLoaded', () => {
    const chartDom = document.getElementById('graph-container');

    const categoryColors = {
        'Pope': '#C5A028',
        'Bishop': '#8B7355',
        'Priest': '#228B22',
        'Religious': '#5A544F',
        'Royalty': '#A6192E',
        'Layperson': '#F28C28',
        'Mother of God': '#4F86F7',
        'Source': '#FFFFFF'
    };

    // DOM Elements
    const countryFilter = document.getElementById('country-filter');
    const genderMaleCb = document.getElementById('gender-male');
    const genderFemaleCb = document.getElementById('gender-female');
    
    const connectionFilter = document.getElementById('connection-filter');
    const enableTooltipsCb = document.getElementById('enable-tooltips');
    const resetAllBtn = document.getElementById('nav-reset-btn');
    
    // Side panel elements
    const sidebarNav = document.getElementById('sidebar-nav');
    const sidebarToggleBtn = document.getElementById('sidebar-toggle-btn');
    const navCatalogBtn = document.getElementById('nav-catalog-btn');
    const saintsCountSpans = document.querySelectorAll('.saints-count-val');
    
    const saintsSearch = document.getElementById('saints-search');
    const saintsListUl = document.getElementById('saints-list-ul');


    // ── Filter Popout Logic ──
    const filterBtns = document.querySelectorAll('.filter-bar-btn');
    const filterPopouts = document.querySelectorAll('.filter-popout');

    // Toggle popout on button click
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent document click from immediately closing it
            
            const targetId = btn.getAttribute('data-popout');
            const targetPopout = document.getElementById(targetId);
            
            // If already open, just close it
            if (!targetPopout.classList.contains('hidden')) {
                targetPopout.classList.add('hidden');
                btn.classList.remove('active');
                return;
            }

            // Otherwise, close all others and open this one
            filterPopouts.forEach(p => p.classList.add('hidden'));
            filterBtns.forEach(b => b.classList.remove('active'));

            targetPopout.classList.remove('hidden');
            btn.classList.add('active');
            
            // Position the popout exactly below the button
            const rect = btn.getBoundingClientRect();
            targetPopout.style.left = rect.left + 'px';
            targetPopout.style.top = (rect.bottom + 8) + 'px';
        });
    });

    // Close popouts when clicking outside
    document.addEventListener('click', (e) => {
        let isClickInsidePopout = false;
        filterPopouts.forEach(p => {
            if (p.contains(e.target)) isClickInsidePopout = true;
        });
        
        if (!isClickInsidePopout) {
            filterPopouts.forEach(p => p.classList.add('hidden'));
            filterBtns.forEach(b => b.classList.remove('active'));
        }
    });

    // Update filter counts
    function updateFilterCounts() {
        // Status count
        const activeCatCount = document.querySelectorAll('.cat-chip input:checked').length;
        const totalCatCount = document.querySelectorAll('.cat-chip input').length;
        const activeGenderCount = document.querySelectorAll('#gender-male:checked, #gender-female:checked').length;
        const totalGenderCount = 2;
        
        const statusCountEl = document.getElementById('count-status');
        let statusActive = (totalCatCount - activeCatCount) + (totalGenderCount - activeGenderCount);
        if (statusActive > 0) {
            statusCountEl.textContent = statusActive;
            statusCountEl.classList.remove('hidden');
        } else {
            statusCountEl.classList.add('hidden');
        }

        // Time Period count
        const activeCenturyCount = document.querySelectorAll('.century-chip.active').length;
        const totalCenturyCount = document.querySelectorAll('.century-chip').length;
        const timeCountEl = document.getElementById('count-time');
        if (activeCenturyCount < totalCenturyCount) {
            timeCountEl.textContent = totalCenturyCount - activeCenturyCount;
            timeCountEl.classList.remove('hidden');
        } else {
            timeCountEl.classList.add('hidden');
        }

        // Country count
        const countryCountEl = document.getElementById('count-country');
        if (countryFilter.value !== 'All') {
            countryCountEl.textContent = '1';
            countryCountEl.classList.remove('hidden');
        } else {
            countryCountEl.classList.add('hidden');
        }

        // Connection count
        const connectionCountEl = document.getElementById('count-connection');
        if (connectionFilter.value !== 'All') {
            connectionCountEl.textContent = '1';
            connectionCountEl.classList.remove('hidden');
        } else {
            connectionCountEl.classList.add('hidden');
        }
    }

    // ── Century chip logic ──
    const centuryChips = Array.from(document.querySelectorAll('.century-chip'));
    centuryChips.forEach(chip => {
        chip.addEventListener('click', () => {
            chip.classList.toggle('active');
            renderGraph();
        });
    });
    document.getElementById('clear-all-centuries')?.addEventListener('click', () => {
        centuryChips.forEach(c => c.classList.remove('active'));
        renderGraph();
    });
    document.getElementById('select-all-centuries')?.addEventListener('click', () => {
        centuryChips.forEach(c => c.classList.add('active'));
        renderGraph();
    });

    // Hide nav buttons initially because infobox is open
    

    // Category check boxes
    const catCheckboxes = Array.from(document.querySelectorAll('.cat-chip input[type="checkbox"]'));

    let currentFilteredNodes = [];
    // Populate Dynamic Filters
    const countrySearchInput = document.getElementById('country-search-input');
    const countrySuggestionsUl = document.getElementById('country-suggestions-ul');

    const uniqueCountries = [...new Set(saintsNodes.map(n => n.country))]
        .filter(c => c && c !== 'Unknown' && !c.startsWith('http'))
        .sort();

    // Show suggestion list on focus/click
    countrySearchInput.addEventListener('focus', () => {
        renderCountrySuggestions(uniqueCountries);
        countrySuggestionsUl.style.display = 'block';
    });

    // Handle input / typing to filter list
    countrySearchInput.addEventListener('input', () => {
        const query = countrySearchInput.value.toLowerCase();
        const filtered = uniqueCountries.filter(c => c.toLowerCase().includes(query));
        renderCountrySuggestions(filtered);
    });

    // Close suggestions when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.country-search-container') && !e.target.closest('#country-suggestions-ul')) {
            if (countrySuggestionsUl) countrySuggestionsUl.style.display = 'none';
        }
    });

    function renderCountrySuggestions(list) {
        if (!countrySuggestionsUl) return;
        countrySuggestionsUl.innerHTML = '';
        
        // Add "All Countries" option at the top
        const allLi = document.createElement('li');
        allLi.textContent = 'All Countries';
        allLi.style.padding = '8px 12px';
        allLi.style.cursor = 'pointer';
        allLi.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
        allLi.addEventListener('click', () => {
            selectCountry('All');
        });
        countrySuggestionsUl.appendChild(allLi);

        list.forEach(country => {
            const li = document.createElement('li');
            li.textContent = country;
            li.style.padding = '8px 12px';
            li.style.cursor = 'pointer';
            li.addEventListener('click', () => {
                selectCountry(country);
            });
            countrySuggestionsUl.appendChild(li);
        });
    }

    function selectCountry(country) {
        countrySearchInput.value = country === 'All' ? '' : country;
        countryFilter.value = country;
        if (countrySuggestionsUl) countrySuggestionsUl.style.display = 'none';
        
        // Dispatch change event on countryFilter so the renderGraph logic triggers
        countryFilter.dispatchEvent(new Event('change'));
    }

    // Initialize 3D Graph
    const Graph = ForceGraph3D()(chartDom)
        .backgroundColor('#0F172A')
        .nodeColor(node => categoryColors[node.category] || '#D4AF37')
        .nodeVal(node => node.value / 5)
        .nodeLabel(node => {
            if (!enableTooltipsCb.checked) return '';
            
            let extraInfo = '';
            if (node.status && node.status.length) extraInfo += `<div><strong>Status:</strong> ${node.status.join(', ')}</div>`;
            if (node.titles && node.titles.length) extraInfo += `<div><strong>Title:</strong> ${node.titles.join(', ')}</div>`;
            if (node.occupations && node.occupations.length) extraInfo += `<div><strong>Vocation:</strong> ${node.occupations.join(', ')}</div>`;
            if (node.orders && node.orders.length) extraInfo += `<div><strong>Order:</strong> ${node.orders.join(', ')}</div>`;
            if (node.patronages && node.patronages.length) extraInfo += `<div><strong>Patron of:</strong> ${node.patronages.slice(0, 3).join(', ')}${node.patronages.length > 3 ? '...' : ''}</div>`;

            return `
                <div class="saint-tooltip">
                    <div class="tooltip-title">${node.name}</div>
                    <div class="category">${node.category}</div>
                    <div class="description" style="margin-top: 8px; font-size: 0.85em;">${extraInfo}</div>
                </div>
            `;
        })
        .onNodeHover(node => chartDom.style.cursor = node ? 'pointer' : null)
        .linkWidth(link => link.edgeType === 'spiritual' ? 1.5 : 0.5)
        .linkColor(link => {
            if (link.edgeType === 'spiritual') return 'rgba(29, 78, 216, 0.4)';
            if (link.edgeType === 'lineage') return 'rgba(148, 163, 184, 0.3)';
            if (link.edgeType === 'family') return 'rgba(220, 38, 38, 0.8)'; // Solid Red for family
            if (link.edgeType === 'founder') return 'rgba(250, 204, 21, 0.6)'; // Gold for founders
            return 'rgba(100, 116, 139, 0.2)';
        })
        .linkDirectionalParticles(link => link.edgeType === 'spiritual' ? 2 : 0)
        .linkDirectionalParticleWidth(link => link.edgeType === 'spiritual' ? 2 : 0)
        .linkDirectionalParticleSpeed(0.005);
        
    Graph.d3Force('charge').strength(-150);
    Graph.d3Force('link').distance(100);

    function renderGraph() {
        const selectedCountry = countryFilter.value;
        const showMale = genderMaleCb.checked;
        const showFemale = genderFemaleCb.checked;
        const connVal = connectionFilter.value;
        
        // Get active categories
        const activeCategories = new Set(
            catCheckboxes
                .filter(cb => cb.checked)
                .map(cb => cb.parentElement.getAttribute('data-cat'))
        );

        // Get active centuries from chips
        const activeChips = centuryChips.filter(c => c.classList.contains('active'));
        const allCenturiesActive = activeChips.length === centuryChips.length;

        // Filter nodes
        let filteredNodes = saintsNodes.filter(n => {
            if (n.fixed) return true; // Always keep Mary so spiritual edges work
            if (selectedCountry !== 'All' && n.country !== selectedCountry) return false;
            
            // Gender filter
            if (n.gender === 'male' && !showMale) return false;
            if (n.gender === 'female' && !showFemale) return false;
            
            // Category filter
            if (!activeCategories.has(n.category)) return false;

            // Century chip filter (skip if all active = show all)
            if (!allCenturiesActive && n.deathYear) {
                const matchesCentury = activeChips.some(chip => {
                    const min = parseInt(chip.dataset.centuryMin);
                    const max = parseInt(chip.dataset.centuryMax);
                    return n.deathYear >= min && n.deathYear <= max;
                });
                if (!matchesCentury) return false;
            }

            return true;
        });
        
        const validNodeIds = new Set(filteredNodes.map(n => n.id));

        // Filter edges
        let filteredEdges = saintsEdges.filter(e => validNodeIds.has(e.source) && validNodeIds.has(e.target));
        filteredEdges = filteredEdges.filter(e => {
            if (connVal === 'None') return false;
            if (connVal === 'All') return true;
            if (connVal === 'Spiritual' && e.edgeType !== 'spiritual') return false;
            if (connVal === 'Lineage' && e.edgeType !== 'lineage') return false;
            if (connVal === 'Family' && e.edgeType !== 'family') return false;
            if (connVal === 'Founder' && e.edgeType !== 'founder') return false;
            return true;
        });

        currentFilteredNodes = filteredNodes;
        saintsCountSpans.forEach(span => span.textContent = fullCatalogNodes.length);
        
        Graph.graphData({
            nodes: [...filteredNodes],
            links: [...filteredEdges]
        });
        
        updateFilterCounts();

    }

    // Attach Event Listeners to all filters
    const allFilters = [
        countryFilter, genderMaleCb, genderFemaleCb,
        connectionFilter, enableTooltipsCb,
        ...catCheckboxes
    ];
    
    allFilters.forEach(el => {
        if (el) el.addEventListener('change', renderGraph);
    });

    // Reset buttons
    function resetFilters() {
        countryFilter.value = 'All';
        if (countrySearchInput) countrySearchInput.value = '';
        genderMaleCb.checked = true;
        genderFemaleCb.checked = true;
        connectionFilter.value = 'All';
        enableTooltipsCb.checked = true;
        catCheckboxes.forEach(cb => cb.checked = true);
        centuryChips.forEach(c => c.classList.add('active'));
        
        Graph.cameraPosition({ x: 0, y: 0, z: 800 }, { x: 0, y: 0, z: 0 }, 3000);
        renderGraph();
    }
    resetAllBtn.addEventListener('click', resetFilters);


    function openSidebar() {
        sidebarNav.classList.remove('collapsed');
    }

    function closeSidebar() {
        sidebarNav.classList.add('collapsed');
    }

    if (sidebarToggleBtn) {
        sidebarToggleBtn.addEventListener('click', openSidebar);
    }

    const sidebarCloseBtn = document.getElementById('sidebar-close-btn');
    if (sidebarCloseBtn) {
        sidebarCloseBtn.addEventListener('click', closeSidebar);
    }

    const searchModal = document.getElementById('search-modal');
    const closeSearchModalBtn = document.getElementById('close-search-modal');
    
    function openSearchModal() {
        searchModal.classList.remove('hidden');
        setTimeout(() => {
            if (saintsSearch) saintsSearch.focus();
        }, 100);
    }



    if (navCatalogBtn) {
        navCatalogBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openSearchModal();
        });
    }

    if (closeSearchModalBtn) {
        closeSearchModalBtn.addEventListener('click', () => {
            searchModal.classList.add('hidden');
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !searchModal.classList.contains('hidden')) {
            searchModal.classList.add('hidden');
        }
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            openSearchModal();
        }
    });
    saintsSearch.addEventListener('input', renderSaintsList);

    function renderSaintsList() {
        const query = saintsSearch.value.toLowerCase();
        saintsListUl.innerHTML = '';
        
        fullCatalogNodes.filter(n => n.name.toLowerCase().includes(query)).forEach(catalogNode => {
            const li = document.createElement('li');
            li.className = 'saint-list-item';
            li.innerHTML = `
                <div class="saint-list-item-name">${catalogNode.name}</div>
                <div class="saint-list-item-cat" style="color: ${categoryColors[catalogNode.category] || '#9A9DA3'}">${catalogNode.category}</div>
            `;
            
            li.addEventListener('click', () => {
                document.getElementById('search-modal').classList.add('hidden');
                const graphNode = currentFilteredNodes.find(gn => gn.id === catalogNode.id);
                if (graphNode) {
                    // It's in the graph, fly to it
                    const distRatio = 1 + 60 / Math.hypot(graphNode.x, graphNode.y, graphNode.z);
                    const newPos = graphNode.x || graphNode.y || graphNode.z
                        ? { x: graphNode.x * distRatio, y: graphNode.y * distRatio, z: graphNode.z * distRatio }
                        : { x: 0, y: 0, z: 150 };
                    
                    Graph.cameraPosition(newPos, graphNode, 2000);
                } else {
                    // It's only in the catalog, show modal
                    showSaintDetailsModal(catalogNode);
                }
            });
            saintsListUl.appendChild(li);
        });
    }

    function showSaintDetailsModal(node) {
        let extraInfo = '';
        if (node.status && node.status.length) extraInfo += `<div><strong>Status:</strong> ${node.status.join(', ')}</div>`;
        if (node.titles && node.titles.length) extraInfo += `<div><strong>Title:</strong> ${node.titles.join(', ')}</div>`;
        if (node.occupations && node.occupations.length) extraInfo += `<div><strong>Vocation:</strong> ${node.occupations.join(', ')}</div>`;
        if (node.orders && node.orders.length) extraInfo += `<div><strong>Order:</strong> ${node.orders.join(', ')}</div>`;
        if (node.patronages && node.patronages.length) extraInfo += `<div><strong>Patron of:</strong> ${node.patronages.slice(0, 3).join(', ')}${node.patronages.length > 3 ? '...' : ''}</div>`;

        const detailDiv = document.createElement('div');
        detailDiv.className = 'saint-details-modal';
        detailDiv.style.position = 'fixed';
        detailDiv.style.top = '50%';
        detailDiv.style.left = '50%';
        detailDiv.style.transform = 'translate(-50%, -50%)';
        detailDiv.style.background = '#1E293B';
        detailDiv.style.border = '1px solid rgba(255, 255, 255, 0.1)';
        detailDiv.style.padding = '24px';
        detailDiv.style.borderRadius = '12px';
        detailDiv.style.boxShadow = '0 12px 36px rgba(0, 0, 0, 0.5)';
        detailDiv.style.zIndex = '1000';
        detailDiv.style.color = '#F8FAFC';
        detailDiv.style.minWidth = '320px';
        detailDiv.style.fontFamily = "'Inter', sans-serif";
        
        detailDiv.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <h2 style="margin-top: 0; margin-bottom: 4px; font-weight: 600;">${node.name}</h2>
                <button class="close-modal-btn" style="background: none; border: none; color: #64748B; cursor: pointer;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"></polyline></svg>
                </button>
            </div>
            <div style="color: ${categoryColors[node.category] || '#94A3B8'}; margin-bottom: 16px; font-weight: 600; font-size: 0.9em;">${node.category}</div>
            <div style="font-size: 0.9em; line-height: 1.6; color: #94A3B8;">${extraInfo || '<em>No additional details available.</em>'}</div>
        `;
        
        detailDiv.querySelector('.close-modal-btn').addEventListener('click', () => detailDiv.remove());
        document.body.appendChild(detailDiv);
    }

    window.addEventListener('resize', () => {
        Graph.width(chartDom.clientWidth);
        Graph.height(chartDom.clientHeight);
    });

    renderGraph();
});
