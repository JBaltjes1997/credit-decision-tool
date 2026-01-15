# Sevi Limit Advice App

voor het gebruik van deze applicatie moet u deze docker image gebruiken: 
sha256:43a671bbe9e7e60fdf56f6cd28dbdfcc38989adf0eafb8feddfd8969e16d62d0

als dat niet 3 containers creeërt moet u deze 3 container ID's gebruiken:
backend: 0d2ba1d2c004ae79786eecd2550056b30d560b23c883de1b4313dc49515a31ec
database: fb3fb0d1dd9d043a56190fd2dcde68087db8a6d3fe39ebdff8825395bb8c8e3c
elastic: 80aa363f43de3b987163ea3126df7622f6ddcd10a1caadfb56a65b031609b6a9


Nadat de container draait moet u in de terminal van "limit-advice-app" het commando: "docker compose up" gebruiken

Open een tweede terminal en navigeer naar "frontend"
In deze terminal start de frontend code met command: "npm run dev"

De applicatie opent op localhost:3000

