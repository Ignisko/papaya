import pandas as pd
import json

# ─────────────────────────────────────────────────────────────────────────────
# LOAD & CLEAN DATA
# ─────────────────────────────────────────────────────────────────────────────
df = pd.read_csv('saints_data233.csv', keep_default_na=False)

# Strip whitespace from all string columns
for col in df.columns:
    df[col] = df[col].apply(lambda x: x.strip() if isinstance(x, str) else x)

print(f"Total saints in CSV: {len(df)}")

# ─────────────────────────────────────────────────────────────────────────────
# HELPER: MAP VOCATION → OFFICIAL CATEGORY
# ─────────────────────────────────────────────────────────────────────────────
def map_category(name, vocation):
    n = name.lower()
    v = vocation.lower()
    if any(x in n for x in ['prophet', 'patriarch', 'king david', 'noah', 'abraham', 'moses', 'elijah', 'isaiah', 'david', 'elisha']):
        return 'Patriarchs and Prophets'
    if 'doctor' in v:
        return 'Doctors of the Church'
    if 'martyr' in v:
        return 'Martyrs'
    if any(x in v for x in ['pope', 'bishop', 'priest', 'pastor', 'abbot']):
        return 'Pastors'
    if any(x in v for x in ['virgin', 'nun', 'sister', 'abbess']):
        return 'Virgins'
    return 'Holy Men and Women'

# ─────────────────────────────────────────────────────────────────────────────
# HELPER: EXTRACT CENTURY
# ─────────────────────────────────────────────────────────────────────────────
def extract_century(name, death_year_raw):
    n = name.lower()
    if any(x in n for x in ['prophet', 'patriarch', 'noah', 'abraham', 'moses', 'elijah', 'isaiah', 'david', 'elisha', 'king david']):
        return 'Old Testament'
    if 'baptist' in n:
        return '1st Century'
    try:
        y = int(str(death_year_raw).strip().split()[0])
        if y <= 0:
            return 'Old Testament'
        century_num = (y - 1) // 100 + 1
        suffixes = {1:'st', 2:'nd', 3:'rd'}
        suffix = suffixes.get(century_num if century_num <= 3 else (century_num % 10 if century_num % 10 in [1,2,3] and century_num not in [11,12,13] else 0), 'th')
        return f"{century_num}{suffix} Century"
    except:
        return 'Unknown'

# ─────────────────────────────────────────────────────────────────────────────
# BUILD ALL NODES
# ─────────────────────────────────────────────────────────────────────────────
nodes = []
node_lookup = {}  # name -> id for deduplication

# Central node: Blessed Virgin Mary
nodes.append({
    'id': 'mary',
    'name': 'Blessed Virgin Mary',
    'category': 'Mother of God',
    'gender': 'female',
    'country': 'Israel',
    'value': 100,
    'symbolSize': 80,
    'fixed': True,
    'century': '1st Century',
    'description': 'Mother of Jesus Christ. All saints journey toward the Glory of God.',
    'canonized_by': '',
    'memorial': '1 January'
})
node_lookup['Blessed Virgin Mary'] = 'mary'

valid_rows = []

for idx, row in df.iterrows():
    name = row['Name_of_Saint'].strip()
    if not name or name in node_lookup:
        continue  # skip empty and duplicates

    node_id = f"node_{idx}"
    category = map_category(name, row['vocation'])
    century = extract_century(name, row['death_year'])
    gender = row['gender'] if row['gender'] in ('male', 'female') else 'unknown'
    country = row['country'] if row['country'] else 'Unknown'

    # Node size: Doctors bigger, Patriarchs bigger, Martyrs medium, rest small
    if category == 'Patriarchs and Prophets':
        size = 40
    elif category == 'Doctors of the Church':
        size = 30
    elif category == 'Martyrs':
        size = 18
    else:
        size = 14

    node_data = {
        'id': node_id,
        'name': name,
        'category': category,
        'gender': gender,
        'country': country,
        'century': century,
        'memorial': row['memorial'] if 'memorial' in row else row.get('Memorial', ''),
        'canonized_by': row.get('canonized_by', ''),
        'death_year': str(row['death_year']),
        'vocation': row['vocation'],
        'value': size,
        'symbolSize': size,
        'description': (
            f"Vocation: {row['vocation']}<br>"
            f"Country: {country}<br>"
            f"Era: {century}"
            + (f"<br>Canonized by: {row.get('canonized_by', '')}" if row.get('canonized_by', '') else "")
        )
    }

    nodes.append(node_data)
    node_lookup[name] = node_id
    valid_rows.append((node_id, row, node_data))

print(f"Built {len(nodes)} nodes (including Mary).")

# ─────────────────────────────────────────────────────────────────────────────
# BUILD EDGES — 3 ALGORITHMS
# ─────────────────────────────────────────────────────────────────────────────
edges = []
edge_set = set()  # prevent duplicate edges

def add_edge(src, tgt, label, edge_type):
    key = (min(src, tgt), max(src, tgt))
    if key not in edge_set:
        edge_set.add(key)
        edges.append({'source': src, 'target': tgt, 'label': label, 'edgeType': edge_type})

# ── SPIRITUAL EDGE: All saints → Mary (symbolic flow of grace)
for node_id, row, node_data in valid_rows:
    add_edge(node_id, 'mary', 'spiritual lineage', 'spiritual')

# ── EDGE 1: Chronological Lineage by Country
#    Sort saints in each country by death_year. Connect each saint to the
#    saint who died immediately before them in that country.
print("Building Edge 1: Chronological Lineage...")
country_groups = {}
for node_id, row, node_data in valid_rows:
    country = node_data['country']
    if country == 'Unknown':
        continue
    try:
        dy = int(str(row['death_year']).strip().split()[0])
    except:
        continue
    if country not in country_groups:
        country_groups[country] = []
    country_groups[country].append((dy, node_id))

for country, members in country_groups.items():
    members.sort(key=lambda x: x[0])
    for i in range(1, len(members)):
        prev_id = members[i-1][1]
        curr_id = members[i][1]
        add_edge(prev_id, curr_id, f"Lived in {country}", 'lineage')

print(f"  -> {len(edges)} edges after lineage.")

# ── EDGE 2: Martyrdom Clusters
#    If saints share the same Feast Day (memorial) AND the same death_year,
#    they likely died together — connect them all to each other.
print("Building Edge 2: Martyrdom Clusters...")
memorial_groups = {}
for node_id, row, node_data in valid_rows:
    memorial = node_data.get('memorial', '')
    dy = str(row['death_year']).strip()
    if not memorial or not dy:
        continue
    key = (memorial.strip(), dy)
    if key not in memorial_groups:
        memorial_groups[key] = []
    memorial_groups[key].append(node_id)

cluster_edges = 0
for key, members in memorial_groups.items():
    if len(members) < 2:
        continue
    # Connect all members to each other (it's a small cluster)
    for i in range(len(members)):
        for j in range(i+1, len(members)):
            add_edge(members[i], members[j], f"Martyred together on {key[0]}", 'martyrdom')
            cluster_edges += 1

print(f"  -> {cluster_edges} martyrdom cluster edges added.")

# ── EDGE 3: Canonization Hubs
#    Connect saints canonized by the same Pope (if data exists).
#    Use a "hub" pattern: connect each saint to the first saint canonized
#    by that same pope (to avoid N^2 fan-out on large popes like JPII).
print("Building Edge 3: Canonization Hubs...")
canon_groups = {}
for node_id, row, node_data in valid_rows:
    pope = node_data.get('canonized_by', '').strip()
    if not pope:
        continue
    if pope not in canon_groups:
        canon_groups[pope] = []
    canon_groups[pope].append(node_id)

hub_edges = 0
for pope, members in canon_groups.items():
    if len(members) < 2:
        continue
    # Use first member as hub node for this Pope's canonizations
    hub = members[0]
    for member in members[1:]:
        add_edge(hub, member, f"Canonized by {pope}", 'canonization')
        hub_edges += 1

print(f"  -> {hub_edges} canonization hub edges added.")
print(f"TOTAL: {len(nodes)} nodes, {len(edges)} edges.")

# ─────────────────────────────────────────────────────────────────────────────
# WRITE data.js
# ─────────────────────────────────────────────────────────────────────────────
with open('data.js', 'w', encoding='utf-8') as f:
    f.write("const saintsNodes = ")
    json.dump(nodes, f, indent=2)
    f.write(";\n\n")
    f.write("const saintsEdges = ")
    json.dump(edges, f, indent=2)
    f.write(";\n")

print("data.js written successfully.")
