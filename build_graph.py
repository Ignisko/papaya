import json
import math
import random

# Load Wikidata Saints
with open('wikidata_saints.json', 'r', encoding='utf-8') as f:
    raw_nodes = json.load(f)

# Define our 6 Theological Pathways
def assign_category(orders):
    orders_str = " ".join(orders).lower()
    if 'carmel' in orders_str:
        return 'The Way of Contemplation'
    elif 'franciscan' in orders_str or 'friars minor' in orders_str or 'poor clares' in orders_str or 'capuchin' in orders_str:
        return 'The Way of Poverty & Joy'
    elif 'dominican' in orders_str or 'order of preachers' in orders_str:
        return 'The Way of Truth'
    elif 'jesuit' in orders_str or 'society of jesus' in orders_str or 'ignatian' in orders_str:
        return 'The Way of Action & Discernment'
    elif 'benedict' in orders_str or 'cistercian' in orders_str or 'trappist' in orders_str:
        return 'The Way of Stability'
    elif 'salesian' in orders_str or 'opus dei' in orders_str or 'charity' in orders_str or 'little way' in orders_str:
        return 'The Way of Ordinary Life'
    else:
        return 'Holy Men and Women'

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
        
    category = assign_category(n['orders'])
    
    # Give founders a higher value (node size)
    value = 5
    if len(n['studentOf']) > 5 or len(n['influencedBy']) > 5:
        value = 20
        
    nodes.append({
        'id': n['id'],
        'name': n['name'],
        'category': category,
        'century': century,
        'country': n['country'] if n['country'] else 'Unknown',
        'gender': 'male' if n.get('gender') and n['gender'].lower() == 'male' else 'female',
        'status': n.get('status', []),
        'titles': n.get('titles', []),
        'occupations': n.get('occupations', []),
        'patronages': n.get('patronages', []),
        'orders': n.get('orders', []),
        'description': ', '.join(n.get('orders', [])) if n.get('orders', []) else '',
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
    for mentor_id in n['studentOf']:
        if mentor_id in valid_saints:
            edges.append({
                'source': mentor_id,  # Flows from mentor to student
                'target': n['id'],
                'edgeType': 'lineage'
            })
            
    # 3. Influenced By edges
    for influencer_id in n['influencedBy']:
        if influencer_id in valid_saints:
            edges.append({
                'source': influencer_id,
                'target': n['id'],
                'edgeType': 'lineage' # We'll group influence and mentorship as lineage
            })

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
        'category': assign_category(n['orders']),
        'century': century,
        'country': n['country'] if n['country'] else 'Unknown',
        'gender': 'male' if n.get('gender') and n['gender'].lower() == 'male' else 'female',
        'status': n.get('status', []),
        'titles': n.get('titles', []),
        'occupations': n.get('occupations', []),
        'patronages': n.get('patronages', []),
        'orders': n.get('orders', []),
        'description': ', '.join(n.get('orders', [])) if n.get('orders', []) else ''
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
