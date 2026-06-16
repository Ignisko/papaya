import requests
import csv
import io
import json

url = 'https://query.wikidata.org/sparql'
query = """
SELECT ?saint ?saintLabel ?birthYear ?deathYear ?orderLabel ?studentOf ?studentOfLabel ?influencedBy ?influencedByLabel ?genderLabel ?countryLabel ?statusLabel ?titleLabel ?occupationLabel ?patronageLabel
WHERE {
  ?saint wdt:P31 wd:Q5 .
  ?saint wdt:P411 ?status .
  
  OPTIONAL { ?saint wdt:P569 ?birthDate . BIND(YEAR(?birthDate) AS ?birthYear) }
  OPTIONAL { ?saint wdt:P570 ?deathDate . BIND(YEAR(?deathDate) AS ?deathYear) }
  OPTIONAL { ?saint wdt:P611 ?order . }
  OPTIONAL { ?saint wdt:P1066 ?studentOf . }
  OPTIONAL { ?saint wdt:P737 ?influencedBy . }
  OPTIONAL { ?saint wdt:P21 ?gender . }
  OPTIONAL { ?saint wdt:P27 ?country . }
  OPTIONAL { ?saint wdt:P39 ?title . }
  OPTIONAL { ?saint wdt:P106 ?occupation . }
  OPTIONAL { ?saint wdt:P417 ?patronage . }
  
  SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
}
LIMIT 500
"""
headers = {
    'User-Agent': 'PapayaSaintsGraph/1.0 (ignac@example.com) python-requests/2.31.0',
    'Accept': 'text/csv'
}

print("Fetching data from Wikidata (this may take a few seconds)...")
r = requests.get(url, params={'query': query}, headers=headers)

if r.status_code == 200:
    reader = csv.DictReader(io.StringIO(r.text))
    rows = list(reader)
    print(f"Retrieved {len(rows)} rows from Wikidata.")
    
    nodes = {}
    edges = []
    
    for row in rows:
        s_url = row.get('saint', '')
        if not s_url: continue
        s_id = s_url.split('/')[-1]
        
        if s_id not in nodes:
            nodes[s_id] = {
                'id': s_id,
                'name': row.get('saintLabel', 'Unknown'),
                'birthYear': row.get('birthYear', ''),
                'deathYear': row.get('deathYear', ''),
                'gender': row.get('genderLabel', 'Unknown'),
                'country': row.get('countryLabel', 'Unknown'),
                'status': set(),
                'titles': set(),
                'occupations': set(),
                'patronages': set(),
                'orders': set(),
                'studentOf': set(),
                'influencedBy': set()
            }
            
        status = row.get('statusLabel', '')
        if status and not status.startswith('http'):
            nodes[s_id]['status'].add(status)

        title = row.get('titleLabel', '')
        if title and not title.startswith('http'):
            nodes[s_id]['titles'].add(title)

        occupation = row.get('occupationLabel', '')
        if occupation and not occupation.startswith('http'):
            nodes[s_id]['occupations'].add(occupation)

        patronage = row.get('patronageLabel', '')
        if patronage and not patronage.startswith('http'):
            nodes[s_id]['patronages'].add(patronage)

        order = row.get('orderLabel', '')
        if order and not order.startswith('http'):
            nodes[s_id]['orders'].add(order)
            
        student_of_url = row.get('studentOf', '')
        if student_of_url:
            student_of_id = student_of_url.split('/')[-1]
            nodes[s_id]['studentOf'].add(student_of_id)
            
        influenced_by_url = row.get('influencedBy', '')
        if influenced_by_url:
            influenced_by_id = influenced_by_url.split('/')[-1]
            nodes[s_id]['influencedBy'].add(influenced_by_id)
            
    print(f"Extracted {len(nodes)} unique saints.")
    
    # Save to JSON
    # Convert sets to lists for JSON serialization
    for n in nodes.values():
        n['status'] = list(n['status'])
        n['titles'] = list(n['titles'])
        n['occupations'] = list(n['occupations'])
        n['patronages'] = list(n['patronages'])
        n['orders'] = list(n['orders'])
        n['studentOf'] = list(n['studentOf'])
        n['influencedBy'] = list(n['influencedBy'])
        
    with open('wikidata_saints.json', 'w', encoding='utf-8') as f:
        json.dump(list(nodes.values()), f, ensure_ascii=False, indent=2)
    print("Saved to wikidata_saints.json")
else:
    print(f"Error {r.status_code}: {r.text}")
