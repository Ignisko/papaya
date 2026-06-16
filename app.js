document.addEventListener('DOMContentLoaded', () => {
    const chartDom = document.getElementById('graph-container');

    const categoryColors = {
        'The Way of Ordinary Life': '#F28C28',
        'The Way of Contemplation': '#8B7355',
        'The Way of Poverty & Joy': '#228B22',
        'The Way of Truth': '#E0E2E4',
        'The Way of Action & Discernment': '#A6192E',
        'The Way of Stability': '#5A544F',
        'Holy Men and Women': '#C5A028',
        'Mother of God': '#4F86F7',
        'Source': '#FFFFFF'
    };

    // DOM Elements
    const eraFilter = document.getElementById('era-filter');
    const countryFilter = document.getElementById('country-filter');
    const genderMaleCb = document.getElementById('gender-male');
    const genderFemaleCb = document.getElementById('gender-female');
    
    const connectionFilter = document.getElementById('connection-filter');
    const enableTooltipsCb = document.getElementById('enable-tooltips');
    const resetBtnStatus = document.getElementById('reset-view-status');
    const resetBtnTime = document.getElementById('reset-view-time');
    
    // Side panel elements
    const toggleBtn = document.getElementById('toggle-panel');
    const catalogBtn = document.getElementById('catalog-btn');
    const infobox = document.getElementById('infobox');
    const closeInfoboxBtn = document.getElementById('close-infobox');
    const saintsCountSpan = document.getElementById('saints-count');
    const saintsSidePanel = document.getElementById('saints-side-panel');
    const closeSidePanelBtn = document.getElementById('close-side-panel');
    const saintsSearch = document.getElementById('saints-search');
    const saintsListUl = document.getElementById('saints-list-ul');

    // Tab buttons logic
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.style.display = 'none');
            
            // Add active to clicked
            btn.classList.add('active');
            const targetId = btn.getAttribute('data-tab');
            document.getElementById(targetId).style.display = 'block';
        });
    });

    // Hide catalog button initially because infobox is open
    catalogBtn.style.display = 'none';

    // Category check boxes
    const catCheckboxes = Array.from(document.querySelectorAll('.cat-chip input[type="checkbox"]'));

    let currentFilteredNodes = [];

    // Populate Dynamic Filters
    const uniqueEras = [...new Set(saintsNodes.map(n => n.century))].filter(e => e !== 'Unknown').sort();
    uniqueEras.forEach(era => {
        const option = document.createElement('option');
        option.value = era;
        option.textContent = era;
        eraFilter.appendChild(option);
    });

    const uniqueCountries = [...new Set(saintsNodes.map(n => n.country))].filter(c => c !== 'Unknown').sort();
    uniqueCountries.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        countryFilter.appendChild(option);
    });

    // Initialize 3D Graph
    const Graph = ForceGraph3D()(chartDom)
        .backgroundColor('rgba(0,0,0,0)')
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
            if (link.edgeType === 'spiritual') return 'rgba(79, 134, 247, 0.4)';
            if (link.edgeType === 'lineage') return 'rgba(160, 165, 170, 0.15)';
            if (link.edgeType === 'martyrdom') return 'rgba(166, 25, 46, 0.5)'; // red for martyrs
            if (link.edgeType === 'canonization') return 'rgba(197, 160, 40, 0.4)'; // gold for popes
            return 'rgba(160, 165, 170, 0.2)';
        })
        .linkDirectionalParticles(link => link.edgeType === 'spiritual' ? 2 : 0)
        .linkDirectionalParticleWidth(link => link.edgeType === 'spiritual' ? 2 : 0)
        .linkDirectionalParticleSpeed(0.005);
        
    Graph.d3Force('charge').strength(-150);
    Graph.d3Force('link').distance(100);

    function renderGraph() {
        const selectedEra = eraFilter.value;
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

        // Filter nodes
        let filteredNodes = saintsNodes.filter(n => {
            if (n.fixed) return true; // Always keep Mary so spiritual edges work
            if (selectedEra !== 'All' && n.century !== selectedEra) return false;
            if (selectedCountry !== 'All' && n.country !== selectedCountry) return false;
            
            // Gender filter
            if (n.gender === 'male' && !showMale) return false;
            if (n.gender === 'female' && !showFemale) return false;
            
            // Category filter
            if (!activeCategories.has(n.category)) return false;

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
            if (connVal === 'Martyrdom' && e.edgeType !== 'martyrdom') return false;
            if (connVal === 'Canonization' && e.edgeType !== 'canonization') return false;
            return true;
        });

        currentFilteredNodes = filteredNodes;
        saintsCountSpan.textContent = fullCatalogNodes.length;
        
        Graph.graphData({
            nodes: [...filteredNodes],
            links: [...filteredEdges]
        });
        
        if (!saintsSidePanel.classList.contains('hidden')) {
            renderSaintsList();
        }
    }

    // Attach Event Listeners to all filters
    const allFilters = [
        eraFilter, countryFilter, genderMaleCb, genderFemaleCb,
        connectionFilter, enableTooltipsCb,
        ...catCheckboxes
    ];
    
    allFilters.forEach(el => {
        if (el) el.addEventListener('change', renderGraph);
    });

    // Reset buttons
    function resetFilters() {
        eraFilter.value = 'All';
        countryFilter.value = 'All';
        genderMaleCb.checked = true;
        genderFemaleCb.checked = true;
        connectionFilter.value = 'All';
        enableTooltipsCb.checked = true;
        catCheckboxes.forEach(cb => cb.checked = true);
        
        Graph.cameraPosition({ x: 0, y: 0, z: 800 }, { x: 0, y: 0, z: 0 }, 3000);
        renderGraph();
    }
    resetBtnStatus.addEventListener('click', resetFilters);
    resetBtnTime.addEventListener('click', resetFilters);

    function openInfobox() {
        infobox.classList.remove('hidden');
        catalogBtn.style.display = 'none';
    }
    
    function closeInfobox() {
        infobox.classList.add('hidden');
        catalogBtn.style.display = 'block';
    }

    toggleBtn.addEventListener('click', () => {
        if (infobox.classList.contains('hidden')) {
            openInfobox();
        } else {
            closeInfobox();
        }
    });
    
    closeInfoboxBtn.addEventListener('click', closeInfobox);
    
    catalogBtn.addEventListener('click', () => {
        saintsSidePanel.classList.remove('hidden');
        renderSaintsList();
    });
    closeSidePanelBtn.addEventListener('click', () => saintsSidePanel.classList.add('hidden'));
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
        detailDiv.style.background = '#1C1C1F';
        detailDiv.style.border = '1px solid #323232';
        detailDiv.style.padding = '24px';
        detailDiv.style.borderRadius = '12px';
        detailDiv.style.boxShadow = '0 10px 40px rgba(0,0,0,0.8)';
        detailDiv.style.zIndex = '1000';
        detailDiv.style.color = '#EDEDED';
        detailDiv.style.minWidth = '320px';
        detailDiv.style.fontFamily = "'Outfit', sans-serif";
        
        detailDiv.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <h2 style="margin-top: 0; margin-bottom: 4px; font-weight: 500;">${node.name}</h2>
                <button class="close-modal-btn" style="background: none; border: none; color: #9A9DA3; cursor: pointer;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"></polyline></svg>
                </button>
            </div>
            <div style="color: ${categoryColors[node.category] || '#9A9DA3'}; margin-bottom: 16px; font-weight: 600; font-size: 0.9em;">${node.category}</div>
            <div style="font-size: 0.9em; line-height: 1.6; color: #D1D1D1;">${extraInfo || '<em>No additional details available.</em>'}</div>
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
