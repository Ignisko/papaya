import json
import math
import random

# Load Wikidata Saints
with open('wikidata_saints.json', 'r', encoding='utf-8') as f:
    raw_nodes = json.load(f)

def get_state_of_life(n):
    titles = " ".join(n.get('titles', [])).lower()
    occupations = " ".join(n.get('occupations', [])).lower()
    status = " ".join(n.get('status', [])).lower()
    orders = " ".join(n.get('orders', [])).lower()
    
    if 'pope' in titles or 'pope' in occupations:
        return 'Pope'
    elif 'bishop' in titles or 'bishop' in occupations or 'archbishop' in titles:
        return 'Bishop'
    elif 'priest' in occupations or 'presbyter' in titles or 'cleric' in occupations:
        return 'Priest'
    elif 'monk' in occupations or 'nun' in occupations or 'religious' in status or orders:
        return 'Religious'
    elif 'king' in occupations or 'queen' in occupations or 'emperor' in occupations or 'royalty' in status:
        return 'Royalty'
    else:
        return 'Layperson'

def get_tags(n):
    tags = set()
    titles = " ".join(n.get('titles', [])).lower()
    status = " ".join(n.get('status', [])).lower()
    
    if 'martyr' in status or 'martyr' in titles:
        tags.add('Martyr')
    if 'doctor' in titles or 'doctor' in status:
        tags.add('Doctor of the Church')
    if 'apostle' in titles or 'apostle' in status:
        tags.add('Apostle')
    if 'evangelist' in titles:
        tags.add('Evangelist')
    if 'virgin' in status or 'virgin' in titles:
        tags.add('Virgin')
        
    for order in n.get('orders', []):
        tags.add(order)
        
    return list(tags)

nodes = []
edges = []

# Inject Central Nodes
nodes.append({
    'id': 'JESUS',
    'name': 'Jesus Christ',
    'category': 'Source',
    'century': '1st',
    'country': 'Israel',
    'gender': 'male',
    'description': 'The Source and Summit of all Holiness',
    'status': [],
    'titles': [],
    'occupations': [],
    'patronages': [],
    'orders': [],
    'value': 200,
    'fixed': True,
    'fx': 0, 'fy': 0, 'fz': 0
})

nodes.append({
    'id': 'MARY',
    'name': 'Blessed Virgin Mary',
    'category': 'Mother of God',
    'century': '1st',
    'country': 'Israel',
    'gender': 'female',
    'description': 'To Jesus through Mary. The greatest of all saints and safe pathway.',
    'status': [],
    'titles': [],
    'occupations': [],
    'patronages': [],
    'orders': [],
    'value': 100,
    'fixed': True,
    'fx': 0, 'fy': -20, 'fz': 0
})

edges.append({'source': 'MARY', 'target': 'JESUS', 'edgeType': 'spiritual'})

# Filter valid node IDs to prevent bad edges
valid_saints = set([n['id'] for n in raw_nodes])
valid_saints.add('JESUS')
valid_saints.add('MARY')

for n in raw_nodes:
    # Determine century
    try:
        birth = int(n['birthYear']) if n['birthYear'] else 0
        death = int(n['deathYear']) if n['deathYear'] else birth
        century_num = (death // 100) + 1
        century = f"{century_num}th" if century_num > 0 else "BCE"
    except:
        century = "Unknown"
        
    category = get_state_of_life(n)
    tags = get_tags(n)
    
    # Give founders a higher value (node size)
    value = 5
    if len(n.get('studentOf', [])) > 5 or len(n.get('influencedBy', [])) > 5:
        value = 20
        
    nodes.append({
        'id': n['id'],
        'name': n['name'],
        'category': category,
        'tags': tags,
        'century': century,
        'country': n.get('country', 'Unknown'),
        'gender': 'male' if n.get('gender') and n['gender'].lower() == 'male' else 'female',
        'status': n.get('status', []),
        'titles': n.get('titles', []),
        'occupations': n.get('occupations', []),
        'patronages': n.get('patronages', []),
        'orders': n.get('orders', []),
        'description': ', '.join(tags),
        'value': value
    })
    
    # 1. Edge to Mary (The Universal Pathway)
    # Every saint has a weak spiritual tether to Mary
    edges.append({
        'source': n['id'],
        'target': 'MARY',
        'edgeType': 'spiritual'
    })
    
    # 2. Student / Mentorship edges
    for mentor_id in n.get('studentOf', []):
        if mentor_id in valid_saints:
            edges.append({
                'source': mentor_id,  # Flows from mentor to student
                'target': n['id'],
                'edgeType': 'lineage'
            })
            
    # 3. Influenced By edges
    for influencer_id in n.get('influencedBy', []):
        if influencer_id in valid_saints:
            edges.append({
                'source': influencer_id,
                'target': n['id'],
                'edgeType': 'lineage' # We'll group influence and mentorship as lineage
            })
            
    # 4. Family edges
    family_fields = ['sibling', 'spouse', 'parent', 'child']
    for field in family_fields:
        for relative_id in n.get(field, []):
            if relative_id in valid_saints:
                edges.append({
                    'source': n['id'],
                    'target': relative_id,
                    'edgeType': 'family'
                })
                
    # 5. Spiritual Father (Founders)
    # Q43851 is St. Dominic, Q44015 is St. Francis, Q44011 is St. Benedict
    # We will just map by name if they exist in valid_saints (we'd ideally use IDs, but we'll try to find them)
    orders_str = " ".join(n.get('orders', [])).lower()
    if 'dominican' in orders_str or 'order of preachers' in orders_str:
        # Assuming Q43851 is in the graph or will just point to it (graph library might ignore missing targets)
        edges.append({'source': 'Q43851', 'target': n['id'], 'edgeType': 'founder'})
    elif 'franciscan' in orders_str or 'friars minor' in orders_str or 'poor clares' in orders_str:
        edges.append({'source': 'Q676555', 'target': n['id'], 'edgeType': 'founder'}) # Q676555 is Francis of Assisi
    elif 'benedict' in orders_str:
        edges.append({'source': 'Q44011', 'target': n['id'], 'edgeType': 'founder'}) # Q44011 is Benedict of Nursia

# Load Full Catalog Saints
with open('wikidata_saints_full.json', 'r', encoding='utf-8') as f:
    raw_full_nodes = json.load(f)

fullCatalogNodes = []
for n in raw_full_nodes:
    try:
        birth = int(n['birthYear']) if n['birthYear'] else 0
        death = int(n['deathYear']) if n['deathYear'] else birth
        century_num = (death // 100) + 1
        century = f"{century_num}th" if century_num > 0 else "BCE"
    except:
        century = "Unknown"
        
    fullCatalogNodes.append({
        'id': n['id'],
        'name': n['name'],
        'category': get_state_of_life(n),
        'tags': get_tags(n),
        'century': century,
        'country': n.get('country', 'Unknown'),
        'gender': 'male' if n.get('gender') and n['gender'].lower() == 'male' else 'female',
        'status': n.get('status', []),
        'titles': n.get('titles', []),
        'occupations': n.get('occupations', []),
        'patronages': n.get('patronages', []),
        'orders': n.get('orders', []),
        'description': ', '.join(get_tags(n))
    })

# Save to data.js
js_content = f"""
const saintsNodes = {json.dumps(nodes, indent=2)};
const saintsEdges = {json.dumps(edges, indent=2)};
const fullCatalogNodes = {json.dumps(fullCatalogNodes, indent=2)};
"""

with open('data.js', 'w', encoding='utf-8') as f:
    f.write(js_content)
    
print(f"Generated data.js with {len(nodes)} graph nodes, {len(edges)} edges, and {len(fullCatalogNodes)} catalog nodes.")
