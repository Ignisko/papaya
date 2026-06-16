import requests
import json

url = 'https://query.wikidata.org/sparql'
query = """
SELECT ?prop ?propLabel ?val ?valLabel
WHERE {
  wd:Q9438 ?p ?statement .
  ?statement ?ps ?val .
  
  ?prop wikibase:claim ?p.
  ?prop wikibase:statementProperty ?ps.
  
  SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
}
"""
headers = {
    'User-Agent': 'PapayaSaintsGraph/1.0 (ignac@example.com) python-requests/2.31.0',
    'Accept': 'application/sparql-results+json'
}

r = requests.get(url, params={'format': 'json', 'query': query}, headers=headers)
if r.status_code == 200:
    data = r.json()
    for row in data['results']['bindings']:
        prop = row.get('propLabel', {}).get('value', '')
        val = row.get('val', {}).get('value', '')
        valLabel = row.get('valLabel', {}).get('value', '')
        if prop == 'canonization status':
            print(f"{prop}: {valLabel} ({val})")
        if 'religious order' in prop:
            print(f"{prop}: {valLabel} ({val})")
else:
    print("Error:", r.status_code, r.text)
