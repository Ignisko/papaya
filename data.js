
const saintsNodes = [
  {
    "id": "JESUS",
    "name": "Jesus Christ",
    "category": "Source",
    "century": "1st",
    "country": "Israel",
    "gender": "male",
    "description": "The Source and Summit of all Holiness",
    "status": [],
    "titles": [],
    "occupations": [],
    "patronages": [],
    "orders": [],
    "value": 200,
    "fixed": true,
    "fx": 0,
    "fy": 0,
    "fz": 0
  },
  {
    "id": "MARY",
    "name": "Blessed Virgin Mary",
    "category": "Mother of God",
    "century": "1st",
    "country": "Israel",
    "gender": "female",
    "description": "To Jesus through Mary. The greatest of all saints and safe pathway.",
    "status": [],
    "titles": [],
    "occupations": [],
    "patronages": [],
    "orders": [],
    "value": 100,
    "fixed": true,
    "fx": 0,
    "fy": -20,
    "fz": 0
  },
  {
    "id": "Q316600",
    "name": "Winibald",
    "category": "The Way of Stability",
    "century": "8th",
    "country": "Germany",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "abbot"
    ],
    "occupations": [
      "missionary",
      "priest",
      "monk"
    ],
    "patronages": [],
    "orders": [
      "Benedictines"
    ],
    "description": "Benedictines",
    "value": 5
  },
  {
    "id": "Q316643",
    "name": "Eberigisil",
    "category": "Holy Men and Women",
    "century": "6th",
    "country": "Unknown",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "archbishop",
      "Roman Catholic Bishop of Cologne"
    ],
    "occupations": [
      "bishop",
      "Catholic priest"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q316874",
    "name": "Dagobert II",
    "category": "Holy Men and Women",
    "century": "7th",
    "country": "Francia",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "king of Franks"
    ],
    "occupations": [
      "monarch"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q316892",
    "name": "Sigebert III",
    "category": "Holy Men and Women",
    "century": "7th",
    "country": "Unknown",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "king of Franks"
    ],
    "occupations": [
      "monarch"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q317029",
    "name": "Theodoret",
    "category": "Holy Men and Women",
    "century": "5th",
    "country": "Unknown",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [
      "Catholic priest",
      "historian",
      "bishop",
      "writer",
      "church historian"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q317131",
    "name": "Vincent Ferrer",
    "category": "The Way of Truth",
    "century": "15th",
    "country": "Kingdom of Valencia",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [
      "missionary",
      "friar",
      "preacher",
      "Catholic priest",
      "writer"
    ],
    "patronages": [],
    "orders": [
      "Dominican Order"
    ],
    "description": "Dominican Order",
    "value": 5
  },
  {
    "id": "Q317236",
    "name": "Coloman of Galicia-Lodomeria",
    "category": "Holy Men and Women",
    "century": "13th",
    "country": "Hungary",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "Duke of Halych"
    ],
    "occupations": [
      "politician"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q317887",
    "name": "George Herbert",
    "category": "Holy Men and Women",
    "century": "17th",
    "country": "Wales",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "Member of Parliament in the Parliament of England",
      "Member of the 1625 Parliament",
      "Member of the 1624-25 Parliament"
    ],
    "occupations": [
      "politician",
      "cleric",
      "librettist",
      "poet",
      "priest",
      "writer"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q318473",
    "name": "Avvakum",
    "category": "Holy Men and Women",
    "century": "17th",
    "country": "Tsardom of Russia",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [
      "explorer",
      "priest",
      "writer"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q318504",
    "name": "Abel of Reims",
    "category": "The Way of Stability",
    "century": "8th",
    "country": "France",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "abbot",
      "bishop of Reims"
    ],
    "occupations": [
      "Catholic priest",
      "Catholic bishop"
    ],
    "patronages": [],
    "orders": [
      "Benedictines"
    ],
    "description": "Benedictines",
    "value": 5
  },
  {
    "id": "Q318974",
    "name": "Vincent of Saragossa",
    "category": "Holy Men and Women",
    "century": "4th",
    "country": "Ancient Rome",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [
      "deacon",
      "latin catholic deacon"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q233012",
    "name": "Kinga of Poland",
    "category": "Holy Men and Women",
    "century": "13th",
    "country": "Hungary",
    "gender": "female",
    "status": [
      "saint"
    ],
    "titles": [
      "queen consort"
    ],
    "occupations": [
      "religious sister",
      "aristocrat"
    ],
    "patronages": [],
    "orders": [
      "Sisters Clarists of the Rule of Urban IV"
    ],
    "description": "Sisters Clarists of the Rule of Urban IV",
    "value": 5
  },
  {
    "id": "Q234246",
    "name": "Matilda of Ringelheim",
    "category": "The Way of Stability",
    "century": "10th",
    "country": "Kingdom of Germany",
    "gender": "female",
    "status": [
      "saint"
    ],
    "titles": [
      "abbess"
    ],
    "occupations": [
      "politician"
    ],
    "patronages": [],
    "orders": [
      "Benedictines"
    ],
    "description": "Benedictines",
    "value": 5
  },
  {
    "id": "Q234521",
    "name": "Jane Frances de Chantal",
    "category": "Holy Men and Women",
    "century": "17th",
    "country": "France",
    "gender": "female",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [
      "mystic",
      "nun",
      "founder of Catholic religious community"
    ],
    "patronages": [],
    "orders": [
      "Order of the Visitation of Holy Mary"
    ],
    "description": "Order of the Visitation of Holy Mary",
    "value": 5
  },
  {
    "id": "Q234689",
    "name": "Monica of Hippo",
    "category": "Holy Men and Women",
    "century": "4th",
    "country": "Unknown",
    "gender": "female",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q272106",
    "name": "Saint Laura",
    "category": "Holy Men and Women",
    "century": "9th",
    "country": "Emirate of C\u00f3rdoba",
    "gender": "female",
    "status": [
      "saint"
    ],
    "titles": [
      "abbess"
    ],
    "occupations": [
      "nun"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q272180",
    "name": "\u00c6thelberht II",
    "category": "Holy Men and Women",
    "century": "8th",
    "country": "Kingdom of East Anglia",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "King of East Anglia"
    ],
    "occupations": [
      "sovereign"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q272212",
    "name": "\u00c6thelred of Mercia",
    "category": "Holy Men and Women",
    "century": "8th",
    "country": "Kingdom of Mercia",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "King of Mercia"
    ],
    "occupations": [
      "monarch"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q272498",
    "name": "Brian Boru",
    "category": "Holy Men and Women",
    "century": "11th",
    "country": "Kingdom of Munster",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "King of Munster",
      "High King of Ireland"
    ],
    "occupations": [],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q272987",
    "name": "Saint Susanna",
    "category": "Holy Men and Women",
    "century": "3th",
    "country": "http://www.wikidata.org/.well-known/genid/02c53973d1ae879241578a3593077afd",
    "gender": "female",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q273053",
    "name": "Papias of Hierapolis",
    "category": "Holy Men and Women",
    "century": "2th",
    "country": "Asia",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "bishop"
    ],
    "occupations": [
      "presbyter",
      "priest",
      "writer"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q273334",
    "name": "Alphonsus Maria de Liguori",
    "category": "Holy Men and Women",
    "century": "18th",
    "country": "Kingdom of Naples",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "Roman Catholic Bishop of Sant\u2019Agata de\u2019 Goti"
    ],
    "occupations": [
      "composer",
      "Catholic priest",
      "poet",
      "lawyer",
      "writer",
      "Catholic bishop"
    ],
    "patronages": [],
    "orders": [
      "Congregation of the Most Holy Redeemer"
    ],
    "description": "Congregation of the Most Holy Redeemer",
    "value": 5
  },
  {
    "id": "Q273335",
    "name": "Alpa\u00efs of Cudot",
    "category": "Holy Men and Women",
    "century": "13th",
    "country": "Unknown",
    "gender": "female",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q273705",
    "name": "Jutta of Kulmsee",
    "category": "Holy Men and Women",
    "century": "13th",
    "country": "Holy Roman Empire",
    "gender": "female",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [
      "nun"
    ],
    "patronages": [],
    "orders": [
      "Third Order of Saint Francis"
    ],
    "description": "Third Order of Saint Francis",
    "value": 5
  },
  {
    "id": "Q273987",
    "name": "Saint Lea",
    "category": "Holy Men and Women",
    "century": "4th",
    "country": "Ancient Rome",
    "gender": "female",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q274091",
    "name": "Dionysius Exiguus",
    "category": "Holy Men and Women",
    "century": "6th",
    "country": "Unknown",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [
      "mathematician",
      "canon law jurist",
      "translator",
      "monk",
      "writer"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q275470",
    "name": "William of York",
    "category": "Holy Men and Women",
    "century": "12th",
    "country": "Unknown",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "Catholic archbishop",
      "Roman Catholic archbishop of York"
    ],
    "occupations": [
      "Latin Catholic priest",
      "Latin Catholic bishop"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q275624",
    "name": "John Cantius",
    "category": "Holy Men and Women",
    "century": "15th",
    "country": "Kingdom of Poland",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [
      "physicist",
      "theologian",
      "priest",
      "university teacher"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q275976",
    "name": "Mary MacKillop",
    "category": "Holy Men and Women",
    "century": "20th",
    "country": "Australia",
    "gender": "female",
    "status": [
      "saint"
    ],
    "titles": [
      "abbess"
    ],
    "occupations": [
      "religious sister",
      "founder of Catholic religious community"
    ],
    "patronages": [],
    "orders": [
      "Sisters of St. Joseph of the Sacred Heart"
    ],
    "description": "Sisters of St. Joseph of the Sacred Heart",
    "value": 5
  },
  {
    "id": "Q276019",
    "name": "Eustochia Smeralda Calafato",
    "category": "The Way of Poverty & Joy",
    "century": "15th",
    "country": "Unknown",
    "gender": "female",
    "status": [
      "saint"
    ],
    "titles": [
      "abbess"
    ],
    "occupations": [
      "nun"
    ],
    "patronages": [],
    "orders": [
      "Poor Clares"
    ],
    "description": "Poor Clares",
    "value": 5
  },
  {
    "id": "Q276148",
    "name": "Charalambos",
    "category": "Holy Men and Women",
    "century": "3th",
    "country": "Ancient Rome",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [
      "bishop",
      "Catholic priest"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q276608",
    "name": "Mary Euphrasia Pelletier",
    "category": "Holy Men and Women",
    "century": "19th",
    "country": "France",
    "gender": "female",
    "status": [
      "saint"
    ],
    "titles": [
      "superior general"
    ],
    "occupations": [
      "religious sister",
      "nun",
      "founder of Catholic religious community",
      "religious"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q279427",
    "name": "Gaudentius of Brescia",
    "category": "Holy Men and Women",
    "century": "5th",
    "country": "Ancient Rome",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "bishop"
    ],
    "occupations": [
      "Catholic bishop",
      "Catholic priest",
      "writer"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q279693",
    "name": "Stefan Uro\u0161 V of Serbia",
    "category": "Holy Men and Women",
    "century": "14th",
    "country": "Serbian Empire",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "Emperor of the Serbs"
    ],
    "occupations": [
      "ruler"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q280869",
    "name": "Titus Flavius Clemens",
    "category": "Holy Men and Women",
    "century": "1th",
    "country": "Ancient Rome",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "Roman consul"
    ],
    "occupations": [
      "politician"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q283387",
    "name": "Alfanus I",
    "category": "The Way of Stability",
    "century": "11th",
    "country": "Unknown",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "abbot",
      "bishop",
      "archbishop of Salerno"
    ],
    "occupations": [
      "translator",
      "Catholic theologian",
      "architect",
      "Catholic priest",
      "physician",
      "poet",
      "writer",
      "archbishop"
    ],
    "patronages": [],
    "orders": [
      "Benedictines"
    ],
    "description": "Benedictines",
    "value": 5
  },
  {
    "id": "Q283447",
    "name": "Lambert of Maastricht",
    "category": "The Way of Stability",
    "century": "8th",
    "country": "Unknown",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "Roman Catholic Bishop of Maastricht"
    ],
    "occupations": [
      "Catholic priest",
      "Catholic bishop"
    ],
    "patronages": [],
    "orders": [
      "Benedictines"
    ],
    "description": "Benedictines",
    "value": 5
  },
  {
    "id": "Q284323",
    "name": "Eulalia of M\u00e9rida",
    "category": "Holy Men and Women",
    "century": "4th",
    "country": "Ancient Rome",
    "gender": "female",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q285570",
    "name": "Feodosia Morozova",
    "category": "Holy Men and Women",
    "century": "17th",
    "country": "Tsardom of Russia",
    "gender": "female",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [
      "nun"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q285693",
    "name": "Hosius of Corduba",
    "category": "Holy Men and Women",
    "century": "4th",
    "country": "Ancient Rome",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "episcope",
      "bishop",
      "Roman Catholic Bishop of Cordoba"
    ],
    "occupations": [
      "Catholic priest",
      "writer"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q286238",
    "name": "Tha\u00efs",
    "category": "Holy Men and Women",
    "century": "5th",
    "country": "Unknown",
    "gender": "female",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [
      "courtesan",
      "hermit"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q286818",
    "name": "Emilie de Rodat",
    "category": "Holy Men and Women",
    "century": "19th",
    "country": "France",
    "gender": "female",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [
      "mystic",
      "nun",
      "founder of Catholic religious community"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q287308",
    "name": "Wolbodo",
    "category": "Holy Men and Women",
    "century": "11th",
    "country": "Unknown",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "Roman Catholic Bishop of Liege",
      "bishop"
    ],
    "occupations": [
      "bishop",
      "teacher",
      "Catholic priest"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q287916",
    "name": "Finbarr of Cork",
    "category": "Holy Men and Women",
    "century": "7th",
    "country": "Kingdom of Munster",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "bishop"
    ],
    "occupations": [
      "Catholic priest"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q288295",
    "name": "Justina of Padua",
    "category": "Holy Men and Women",
    "century": "4th",
    "country": "Unknown",
    "gender": "female",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q288825",
    "name": "Jeanne de Lestonnac",
    "category": "Holy Men and Women",
    "century": "17th",
    "country": "France",
    "gender": "female",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [
      "religious sister",
      "founder of Catholic religious community"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q288906",
    "name": "Paula Frassinetti",
    "category": "The Way of Truth",
    "century": "19th",
    "country": "Kingdom of Italy",
    "gender": "female",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [
      "nun",
      "founder of Catholic religious community",
      "religious"
    ],
    "patronages": [],
    "orders": [
      "Dominican Order"
    ],
    "description": "Dominican Order",
    "value": 5
  },
  {
    "id": "Q289346",
    "name": "Saint Paulina",
    "category": "Holy Men and Women",
    "century": "20th",
    "country": "Brazil",
    "gender": "female",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [
      "Catholic priest",
      "Christian nun"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q289730",
    "name": "Eucharius",
    "category": "Holy Men and Women",
    "century": "4th",
    "country": "http://www.wikidata.org/.well-known/genid/e5831e727caec65a606a6f2f2b1ce0ca",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "ancient Bishop of Trier"
    ],
    "occupations": [
      "Catholic priest",
      "Catholic bishop"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q289872",
    "name": "Candida Maria of Jesus",
    "category": "Holy Men and Women",
    "century": "20th",
    "country": "Spain",
    "gender": "female",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [
      "nun"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q290771",
    "name": "Arethas of Caesarea",
    "category": "Holy Men and Women",
    "century": "10th",
    "country": "Byzantine Empire",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "archbishop"
    ],
    "occupations": [
      "Eastern Orthodox priest",
      "philosopher",
      "bibliographer",
      "writer",
      "theologian"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q290786",
    "name": "Stefan Dragutin",
    "category": "Holy Men and Women",
    "century": "14th",
    "country": "Serbia",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "king"
    ],
    "occupations": [
      "monarch"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q290866",
    "name": "Maria De Mattias",
    "category": "Holy Men and Women",
    "century": "19th",
    "country": "Kingdom of Italy",
    "gender": "female",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [
      "founder",
      "nun",
      "founder of Catholic religious community",
      "religious"
    ],
    "patronages": [],
    "orders": [
      "Adorers of the Blood of Christ"
    ],
    "description": "Adorers of the Blood of Christ",
    "value": 5
  },
  {
    "id": "Q291529",
    "name": "Eanfl\u00e6d",
    "category": "The Way of Stability",
    "century": "8th",
    "country": "Kingdom of Northumbria",
    "gender": "female",
    "status": [
      "saint"
    ],
    "titles": [
      "abbess"
    ],
    "occupations": [
      "nun"
    ],
    "patronages": [],
    "orders": [
      "Benedictines"
    ],
    "description": "Benedictines",
    "value": 5
  },
  {
    "id": "Q291671",
    "name": "Sunniva",
    "category": "Holy Men and Women",
    "century": "10th",
    "country": "Unknown",
    "gender": "female",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q291708",
    "name": "Lutgardis",
    "category": "The Way of Stability",
    "century": "13th",
    "country": "Unknown",
    "gender": "female",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [
      "nun"
    ],
    "patronages": [],
    "orders": [
      "Cistercians"
    ],
    "description": "Cistercians",
    "value": 5
  },
  {
    "id": "Q291756",
    "name": "Ariadne",
    "category": "Holy Men and Women",
    "century": "6th",
    "country": "Byzantine Empire",
    "gender": "female",
    "status": [
      "saint"
    ],
    "titles": [
      "Byzantine emperor"
    ],
    "occupations": [
      "sovereign"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q291907",
    "name": "Valeria of Milan",
    "category": "Holy Men and Women",
    "century": "3th",
    "country": "Ancient Rome",
    "gender": "female",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q292196",
    "name": "Juliana Falconieri",
    "category": "Holy Men and Women",
    "century": "14th",
    "country": "Unknown",
    "gender": "female",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [
      "nun",
      "religious"
    ],
    "patronages": [],
    "orders": [
      "Servite Order"
    ],
    "description": "Servite Order",
    "value": 5
  },
  {
    "id": "Q292219",
    "name": "Flavia Domitilla",
    "category": "Holy Men and Women",
    "century": "1th",
    "country": "Ancient Rome",
    "gender": "female",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q292282",
    "name": "Lydia of Thyatira",
    "category": "Holy Men and Women",
    "century": "2th",
    "country": "Unknown",
    "gender": "female",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [
      "merchant",
      "textile merchant"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q295086",
    "name": "Guntram",
    "category": "Holy Men and Women",
    "century": "6th",
    "country": "Unknown",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "king of Franks"
    ],
    "occupations": [
      "monarch"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q297584",
    "name": "Theophanes the Confessor",
    "category": "Holy Men and Women",
    "century": "9th",
    "country": "Byzantine Empire",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "abbot"
    ],
    "occupations": [
      "chronicler",
      "writer",
      "historian"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q298845",
    "name": "Saint Florian",
    "category": "Holy Men and Women",
    "century": "4th",
    "country": "Unknown",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [
      "military officer",
      "military personnel"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q299832",
    "name": "Felicula",
    "category": "Holy Men and Women",
    "century": "5th",
    "country": "Unknown",
    "gender": "female",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q299955",
    "name": "Saint Marcellina",
    "category": "Holy Men and Women",
    "century": "4th",
    "country": "Unknown",
    "gender": "female",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q303354",
    "name": "Theognostus",
    "category": "Holy Men and Women",
    "century": "14th",
    "country": "Byzantine Empire",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "Metropolitan of Kiev and all Rus'",
      "archbishop",
      "metropolitan"
    ],
    "occupations": [
      "Eastern Orthodox priest"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q303640",
    "name": "Marcian of Tortona",
    "category": "Holy Men and Women",
    "century": "2th",
    "country": "Ancient Rome",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [
      "bishop",
      "Catholic priest"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q304832",
    "name": "Caesarius of Arles",
    "category": "Holy Men and Women",
    "century": "6th",
    "country": "Unknown",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "archbishop",
      "bishop"
    ],
    "occupations": [
      "Catholic bishop",
      "Catholic priest",
      "writer"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q306658",
    "name": "Abbo of Fleury",
    "category": "The Way of Stability",
    "century": "11th",
    "country": "Kingdom of France",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "Abbot of Saint-Beno\u00eet-sur-Loire"
    ],
    "occupations": [
      "mathematician",
      "philosopher",
      "writer",
      "monk"
    ],
    "patronages": [],
    "orders": [
      "Benedictines"
    ],
    "description": "Benedictines",
    "value": 5
  },
  {
    "id": "Q307724",
    "name": "Abdas of Susa",
    "category": "Holy Men and Women",
    "century": "5th",
    "country": "Sasanian Empire",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "bishop"
    ],
    "occupations": [
      "Catholic priest"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q309772",
    "name": "Athenagoras of Athens",
    "category": "Holy Men and Women",
    "century": "1th",
    "country": "Classical Athens",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [
      "theologian",
      "philosopher",
      "writer"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q309953",
    "name": "Gregory the Illuminator",
    "category": "Holy Men and Women",
    "century": "4th",
    "country": "Unknown",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "Catholicos of All Armenians"
    ],
    "occupations": [
      "illuminator",
      "religious leader",
      "presbyter"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q310152",
    "name": "Eric IX of Sweden",
    "category": "Holy Men and Women",
    "century": "12th",
    "country": "Sweden",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "Monarch of Sweden"
    ],
    "occupations": [
      "monarch"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q310440",
    "name": "Carloman",
    "category": "The Way of Stability",
    "century": "8th",
    "country": "Francia",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "Mayor of the Palace"
    ],
    "occupations": [
      "politician"
    ],
    "patronages": [],
    "orders": [
      "Benedictines"
    ],
    "description": "Benedictines",
    "value": 5
  },
  {
    "id": "Q310584",
    "name": "Gamaliel",
    "category": "Holy Men and Women",
    "century": "1th",
    "country": "Unknown",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "Nasi"
    ],
    "occupations": [
      "jurist",
      "rabbi",
      "Pharisees"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q257960",
    "name": "Felicitas of Rome",
    "category": "Holy Men and Women",
    "century": "2th",
    "country": "Unknown",
    "gender": "female",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q258369",
    "name": "Peter Damian",
    "category": "The Way of Stability",
    "century": "11th",
    "country": "Unknown",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "abbot",
      "cardinal",
      "apostolic administrator",
      "cardinal-bishop of Ostia"
    ],
    "occupations": [
      "Catholic theologian",
      "diplomat",
      "philosopher",
      "Catholic priest",
      "Catholic bishop"
    ],
    "patronages": [],
    "orders": [
      "Benedictines"
    ],
    "description": "Benedictines",
    "value": 5
  },
  {
    "id": "Q259551",
    "name": "Itta of Metz",
    "category": "The Way of Stability",
    "century": "7th",
    "country": "Austrasia",
    "gender": "female",
    "status": [
      "saint"
    ],
    "titles": [
      "abbess"
    ],
    "occupations": [
      "nun"
    ],
    "patronages": [],
    "orders": [
      "Benedictines"
    ],
    "description": "Benedictines",
    "value": 5
  },
  {
    "id": "Q231300",
    "name": "Scholastica",
    "category": "The Way of Stability",
    "century": "6th",
    "country": "Unknown",
    "gender": "female",
    "status": [
      "saint"
    ],
    "titles": [
      "abbess"
    ],
    "occupations": [
      "nun"
    ],
    "patronages": [],
    "orders": [
      "Nuns of the order of Saint Benedict"
    ],
    "description": "Nuns of the order of Saint Benedict",
    "value": 5
  },
  {
    "id": "Q231919",
    "name": "Pulcheria",
    "category": "Holy Men and Women",
    "century": "5th",
    "country": "Byzantine Empire",
    "gender": "female",
    "status": [
      "saint"
    ],
    "titles": [
      "Byzantine emperor"
    ],
    "occupations": [
      "sovereign"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q232031",
    "name": "Margaret of Hungary",
    "category": "The Way of Truth",
    "century": "13th",
    "country": "Hungary",
    "gender": "female",
    "status": [
      "saint"
    ],
    "titles": [
      "abbess"
    ],
    "occupations": [
      "religious sister"
    ],
    "patronages": [],
    "orders": [
      "Nuns of the Order of Preachers"
    ],
    "description": "Nuns of the Order of Preachers",
    "value": 5
  },
  {
    "id": "Q232365",
    "name": "Clotilde",
    "category": "Holy Men and Women",
    "century": "6th",
    "country": "Kingdom of Burgundy",
    "gender": "female",
    "status": [
      "saint"
    ],
    "titles": [
      "king of Franks"
    ],
    "occupations": [
      "consort"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q232427",
    "name": "Saint Apollonia",
    "category": "Holy Men and Women",
    "century": "3th",
    "country": "Unknown",
    "gender": "female",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q232525",
    "name": "Theodelinda",
    "category": "Holy Men and Women",
    "century": "7th",
    "country": "Unknown",
    "gender": "female",
    "status": [
      "saint"
    ],
    "titles": [
      "queen consort"
    ],
    "occupations": [
      "monarch",
      "patron of the arts"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q316440",
    "name": "Saint Savvas the Sanctified",
    "category": "Holy Men and Women",
    "century": "6th",
    "country": "Byzantine Empire",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "abbot"
    ],
    "occupations": [
      "Eastern Christian monk"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q316599",
    "name": "Saint Maurice",
    "category": "Holy Men and Women",
    "century": "3th",
    "country": "Ancient Rome",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [
      "soldier"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q315191",
    "name": "Andrey Bogolyubsky",
    "category": "Holy Men and Women",
    "century": "12th",
    "country": "Principality of Vyshgorod",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [
      "sovereign"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q315312",
    "name": "Januarius",
    "category": "Holy Men and Women",
    "century": "4th",
    "country": "Ancient Rome",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "diocesan bishop"
    ],
    "occupations": [
      "Catholic bishop",
      "bishop",
      "Catholic priest"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q315640",
    "name": "Francisco",
    "category": "Holy Men and Women",
    "century": "16th",
    "country": "Unknown",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [
      "anchorite",
      "founder of Catholic religious community",
      "hermit"
    ],
    "patronages": [],
    "orders": [
      "Order of the Minims"
    ],
    "description": "Order of the Minims",
    "value": 5
  },
  {
    "id": "Q315693",
    "name": "Gebhard of Constance",
    "category": "Holy Men and Women",
    "century": "10th",
    "country": "Germany",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "bishop",
      "diocesan bishop"
    ],
    "occupations": [
      "Catholic bishop",
      "bishop",
      "Catholic priest"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q230507",
    "name": "Saint Margaret of Scotland",
    "category": "Holy Men and Women",
    "century": "11th",
    "country": "Kingdom of England",
    "gender": "female",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [
      "queen regnant"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q312899",
    "name": "Sergius of Radonezh",
    "category": "Holy Men and Women",
    "century": "14th",
    "country": "Unknown",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "abbot"
    ],
    "occupations": [
      "anchorite",
      "hegumen",
      "Eastern Orthodox monk",
      "Eastern Orthodox priest"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q313153",
    "name": "Haakon V of Norway",
    "category": "Holy Men and Women",
    "century": "14th",
    "country": "Norway",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "Monarch of Norway"
    ],
    "occupations": [],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q313373",
    "name": "Pepin of Landen",
    "category": "Holy Men and Women",
    "century": "7th",
    "country": "Unknown",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "Mayor of the Palace"
    ],
    "occupations": [
      "politician"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q313795",
    "name": "John Cassian",
    "category": "Holy Men and Women",
    "century": "5th",
    "country": "Unknown",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "abbot"
    ],
    "occupations": [
      "theologian",
      "writer",
      "Christian monk"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q313803",
    "name": "Lawrence of Brindisi",
    "category": "The Way of Poverty & Joy",
    "century": "17th",
    "country": "Unknown",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "ambassador",
      "superior general",
      "General Vicar of the Capuchins"
    ],
    "occupations": [
      "Doctor of the Church",
      "Catholic priest",
      "diplomat",
      "Catholic theologian"
    ],
    "patronages": [],
    "orders": [
      "Order of Friars Minor Capuchin"
    ],
    "description": "Order of Friars Minor Capuchin",
    "value": 5
  },
  {
    "id": "Q314027",
    "name": "Simpert",
    "category": "The Way of Stability",
    "century": "9th",
    "country": "Germany",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "abbot",
      "diocesan bishop"
    ],
    "occupations": [
      "bishop",
      "Catholic priest"
    ],
    "patronages": [],
    "orders": [
      "Benedictines"
    ],
    "description": "Benedictines",
    "value": 5
  },
  {
    "id": "Q314339",
    "name": "Fyodor Ushakov",
    "category": "Holy Men and Women",
    "century": "19th",
    "country": "Russian Empire",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [
      "military officer"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q314346",
    "name": "Stefan Uro\u0161 III",
    "category": "Holy Men and Women",
    "century": "14th",
    "country": "Serbia",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "king"
    ],
    "occupations": [
      "sovereign"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q310633",
    "name": "Demetrius of Thessaloniki",
    "category": "Holy Men and Women",
    "century": "4th",
    "country": "Unknown",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [
      "religious role",
      "soldier",
      "military personnel"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q311057",
    "name": "Boris I of Bulgaria",
    "category": "Holy Men and Women",
    "century": "10th",
    "country": "Bulgaria",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "tsar"
    ],
    "occupations": [
      "monarch",
      "monk"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q311291",
    "name": "Yaropolk I of Kiev",
    "category": "Holy Men and Women",
    "century": "10th",
    "country": "Kievan Rus'",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "Grand Prince of Kiev"
    ],
    "occupations": [
      "monarch"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q312057",
    "name": "Saint Casimir",
    "category": "Holy Men and Women",
    "century": "15th",
    "country": "Grand Duchy of Lithuania",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [
      "politician"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q312348",
    "name": "Thurgood Marshall",
    "category": "Holy Men and Women",
    "century": "20th",
    "country": "United States",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "Associate Justice of the Supreme Court of the United States",
      "Solicitor General of the United States",
      "Judge of the United States Court of Appeals for the Second Circuit"
    ],
    "occupations": [
      "politician",
      "civil rights advocate",
      "judge",
      "lawyer",
      "jurist"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q312551",
    "name": "Kabir",
    "category": "Holy Men and Women",
    "century": "16th",
    "country": "Unknown",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [
      "poet",
      "weaver",
      "philosopher",
      "writer"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q154938",
    "name": "Bede",
    "category": "The Way of Stability",
    "century": "8th",
    "country": "Kingdom of Northumbria",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [
      "hagiographer",
      "translator",
      "hymnwriter",
      "chronicler",
      "church historian",
      "monk",
      "poet",
      "writer",
      "theologian",
      "Bible translator",
      "historian"
    ],
    "patronages": [],
    "orders": [
      "Benedictines"
    ],
    "description": "Benedictines",
    "value": 5
  },
  {
    "id": "Q158504",
    "name": "Clement of Ohrid",
    "category": "Holy Men and Women",
    "century": "10th",
    "country": "First Bulgarian Empire",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "bishop"
    ],
    "occupations": [
      "missionary",
      "archbishop",
      "writer"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q54798",
    "name": "Cornelius",
    "category": "Holy Men and Women",
    "century": "3th",
    "country": "Ancient Rome",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "Pope"
    ],
    "occupations": [
      "Catholic priest",
      "author"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q55780",
    "name": "Samarth Ramdas Swami",
    "category": "Holy Men and Women",
    "century": "17th",
    "country": "Unknown",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [
      "poet",
      "writer"
    ],
    "patronages": [],
    "orders": [],
    "description": "",
    "value": 5
  },
  {
    "id": "Q57520",
    "name": "Hedwig of Silesia",
    "category": "The Way of Stability",
    "century": "13th",
    "country": "Holy Roman Empire",
    "gender": "female",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [
      "consort"
    ],
    "patronages": [],
    "orders": [
      "Cistercians"
    ],
    "description": "Cistercians",
    "value": 5
  },
  {
    "id": "Q58432",
    "name": "Hugh of Ch\u00e2teauneuf",
    "category": "The Way of Stability",
    "century": "12th",
    "country": "Unknown",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "Roman Catholic Bishop of Grenoble"
    ],
    "occupations": [
      "writer"
    ],
    "patronages": [],
    "orders": [
      "Benedictines"
    ],
    "description": "Benedictines",
    "value": 5
  },
  {
    "id": "Q58568",
    "name": "Stephen IX",
    "category": "The Way of Stability",
    "century": "11th",
    "country": "Unknown",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "cardinal-deacon",
      "abbot of Monte Cassino",
      "Pope"
    ],
    "occupations": [
      "Catholic priest"
    ],
    "patronages": [],
    "orders": [
      "Benedictines"
    ],
    "description": "Benedictines",
    "value": 5
  },
  {
    "id": "Q59071",
    "name": "Peter de Regalado",
    "category": "The Way of Poverty & Joy",
    "century": "15th",
    "country": "Crown of Castile",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [],
    "occupations": [
      "Latin Catholic priest"
    ],
    "patronages": [],
    "orders": [
      "Franciscans"
    ],
    "description": "Franciscans",
    "value": 5
  },
  {
    "id": "Q60059",
    "name": "Albertus Magnus",
    "category": "The Way of Truth",
    "century": "13th",
    "country": "Holy Roman Empire",
    "gender": "male",
    "status": [
      "saint"
    ],
    "titles": [
      "Roman Catholic Bishop of Regensburg"
    ],
    "occupations": [
      "naturalist"
    ],
    "patronages": [],
    "orders": [
      "Dominican Order"
    ],
    "description": "Dominican Order",
    "value": 5
  }
];
const saintsEdges = [
  {
    "source": "MARY",
    "target": "JESUS",
    "edgeType": "spiritual"
  },
  {
    "source": "Q316600",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q316643",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q316874",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q316892",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q317029",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q317131",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q317236",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q317887",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q318473",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q318504",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q318974",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q233012",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q234246",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q234521",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q234689",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q272106",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q272180",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q272212",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q272498",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q272987",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q273053",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q273334",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q273335",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q273705",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q273987",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q274091",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q275470",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q275624",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q275976",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q276019",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q276148",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q276608",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q279427",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q279693",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q280869",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q283387",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q283447",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q284323",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q285570",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q285693",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q286238",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q286818",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q287308",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q287916",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q288295",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q288825",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q288906",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q289346",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q289730",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q289872",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q290771",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q290786",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q290866",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q291529",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q291671",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q291708",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q291756",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q291907",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q292196",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q292219",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q292282",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q295086",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q297584",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q298845",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q299832",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q299955",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q303354",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q303640",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q304832",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q306658",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q307724",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q309772",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q309953",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q310152",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q310440",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q310584",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q257960",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q258369",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q259551",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q231300",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q231919",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q232031",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q232365",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q232427",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q232525",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q316440",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q316599",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q315191",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q315312",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q315640",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q315693",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q230507",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q312899",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q313153",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q313373",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q313795",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q313803",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q314027",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q314339",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q314346",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q310633",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q311057",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q311291",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q312057",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q312348",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q312551",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q154938",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q158504",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q54798",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q55780",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q57520",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q58432",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q58568",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q59071",
    "target": "MARY",
    "edgeType": "spiritual"
  },
  {
    "source": "Q60059",
    "target": "MARY",
    "edgeType": "spiritual"
  }
];
