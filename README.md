# API
Voor dit vak is het de opdracht om een web applicatie te maken met de content uit een api, en het idee de gebruikers ervaring te verbeteren doormiddel van het gebruik van verschillende web api's. Hierbij moet het eindproduct bestaan uit een applicatie gebouwd met Astro, die live staat en wordt 'server-side' wordt gerendered.

## Checkout 01/04
Vandaag begonnen aan het project, een Astro project opgezet, en vooral conceptualisatie en naar content api's gezocht. Gekeken naar de volgende onderwerpen: crypto, sports evenementen, kaarten spotify. Maar uiteindelijk een sport tracking content api gevonden, hierbij kwam ik op het concept om een workout tracker te maken, waarbij je workout kan aanmaken en daar verschillende oefeningen aan kan toevoegen. 

In de ochtend een kickoff over het project, vervolgd met een cursus om een project in Astro op te zetten. De rest van de middag gezocht naar content api's en vanuit daar een concept bedenken. 

Het verschill tussen content en web api's. En ook geleerd dat er veel verschil zit tussen het server site renderen van een web pagina, of het local runnen van een website. Dat je met server site rendering juist super snelle / performance website neer kan zetten, omdat de content die nodig is voor de pagina niet meer afhankelijk is voor het locale device. 

Morgen verder het concept uit werken, kijken welke web api's goed aansluiten. 

## Voortgang 02/04
Mijn concept is een workout tracker, waarbij de gebruiker een workout aan kan maken, en daarbij oefeningen kan toevoegen aan de workout. En bij de oefeningen kan de gebruiker ook allerlij informatie zien, zoals afbeelding en spiergroep, etc. Hierbij wou is de content API van [Wger](https://wger.de/nl/software/api) gebruiken, en de web API intersection observer om de vele oefeningen te lazy loaden, en de local storage om de workouts op te slaan.

Uit het gesprek kwam dat het concept wel veel potentie heeft, alleen nu nog iets te oppervalkkig is. Dus kijk naar een nog iets unieker concept. Hierbij kwamen de volgende ideeën naar boven:

- Misschien een soort punten systeem toevoegen
- Combineren met de spotify API, die dan op basis van de workout een playlist voor de gebruiker aanmaakt
- De drag & drop API gebruiken, die is net even iets uitdagender. Hiermee kan je dan maken dat je bijvoorbeeld oefeningen naar de workout kan slepen

En ook is het handig om mijn concept wat verder de schetsen / verbeelden, en de dingen die ik wil hebben gedaan voor elke week even op een rij te zetten zodat ik goed weet waar ik sta in het proces.

## Checkout 08/04 
Begonnen met het uitwerken van mijn concept naar een prototype. Eerst begonnen met de api te fetchen en de namen van de oefeningen te 'mappen' op de pagina. Nadat dat eenmaal was gelukt nog wat andere content uit andere branches van de api proberen te gebruiken. 

In de ochtend begonnen met het uitzoeken hoe ik de Wger api kan ophalen, daarmee de oefeningen weergeven op de pagina. Daarna ander content uit te api weergeven. 

Hoe het precies werkt om data uit een api op te halen, die via de server site rendering te verwerken en dat dan weergeven op de pagina

Morgen ga ik verder met het verwerken van de drag an drop web api, zodat de gebruiker de oefeningen uit de api naar zijn workout kan slepen. 

## Checkout 09/04
bezig geweest met de drag and drop api, eerst een hele simpele demo gemaakt met echt alleen de drag and drop api. En eigenlijk vanuit daar was het redelijk simpel om dit in het project te implementeren. 

Ochtend bezig geweest met de demo van de drag and drop api, dat vervolgens over de middag verwerkt in het prototype. 

Ten eerste geleerd over de drag and drop api natuurlijk, maar ook dat er best veel handige web api's bestaan wat misschien wel goed is om wat bewuster van te worden. 

Morgen ga ik het prototype laten zien in het voorgangs gesprek, en vanuit daar verder. 

## Voortgang 10/04 
Voor dit voorgang gesprek was dit mijn huidige voortgang met het prototype:

[Prototype week 2](./scrn/week2.png)

Verder waren de volgende punten de feedback: 
- Kijk naar css order om de exercises te sorteren (en dan wel alleen links). 
- Maak het visueler iets sterken, maak eerst een ontwerp in figma met inspirtatie (dribbble of awwwards). 
- Gebruik local storage voor de detail page? 
- Mist nu nog een beejte een delete knop, zodat de gebruiker de toegevoegde oefeningen ook weer kan verwijderen. 
- Voeg categorien toe, dus zet de oefeningen onder welke spier je ermee traint bijvoorbeeld. 
- Volgende stap is nog niet heel duidelijk, kan nu nog alleen geselecteerde oefeningen bekeijken. 

## Checkout 15/04 
Ik heb gekeken naar het design en wat inspiratie opgezocht. Vervolgens heb ik in Figma een ontwerp gemaakt voor alle pagina’s (home, exercises, create workout en detail page).

Met de feedback van vorige week in gedachten was het doel niet per se om iets heel grafisch uit te werken, maar vooral om de UX rustiger en duidelijker te maken. Daarom heb ik vooral inspiratie gebruikt van verschillende mobiele apps en die UX vertaald naar een website-ontwerp.

## Checkout 16/04
Het ontwerp heb ik vervolgens verwerkt in een prototype. Daarbij heb ik ook de structuur van het ontwerp uitgewerkt: ik heb de homepagina en exercise-pagina toegevoegd.

Daarnaast heb ik ervoor gezorgd dat je vanaf de exercises-pagina naar een detailpagina van elke oefening kunt navigeren. Hierdoor kreeg ik ook beter inzicht in hoe groot en uitgebreid een website kan worden wanneer je werkt met een API en dynamische detailpagina’s toevoegt.

## Voortgang 07/04
Ik mist nog best wat, dus legd de focus op gewoon de rubic af te vinken. Veder is het goed om te kijken naar het live zetten van mijn website, dit kan via onrender. Volg hiervoor de documentatie op onrender, je wilt een server rendered site maken. Let hierbij ook nog op dat ik de file path nog moet aanpassen, omdat de structuur op de server niet hetzelfde is (maak build om dit te testen). 

En kan nog kijken naar Astro layout > slots, eigenlijk een soort compenenten / templates die juist iets zoals Astro super nuttig maakt. 

## Aanpassingen 
Na het voortgang gesprek was het dus eigenlijk de rubic afvinken, hiervoor ben ik begonnen met het afmaken van de 'create workout' pagina. Hiervoor het ik toegevoegd dat de gebruiker ook nog sets en gewicht aan de oefeningen kan toevoegen om de pagina iets logischer te maken. En vervolgend heb ik daar mijn 2de web api aan toegevoegd. Dit was de [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) api. Hiermee heb ik het zo gemaakt dat de workout die de gebruiker maakt kan worden opgeslagen, en uiteindelijk ook worden weergeven op de home page. 

Ook kan je nu door alle oefeningen zoeken op deze pagina. En zijn de oefeningen ook goed gesoorteerd waardoor als je een oefening terug sleept die niet meer onder aan de lijst komt, maar weer op de juiste plaats. 

Verder heb ik de oefening pagina nog zo aangepast dat de afbeeldingen van per oefening nu te zien zijn als die er zijn, en ook op de detail pagina. 

[Screenshot eind product](./scrn/product.png)
[Screenshot eind product](./scrn/product2.png)


## Reflectie 
Uiteindelijk heb ik workout tracker kunnen maken, waarbij de [Wger](https://wger.de/nl/software/api) als content api is toegepast, en de localStorage and Drag & drop api als web. In de applicatie kan de gebuiker alle oefeningen inzien, en op een detail pagina meer informatie zoals beschrijving of equipment zien. En daarnaast kan de gebruiker ook een workout creëren, daar oefeningen in opslaan, en deze workout later weer inzien. 

Voor het uiteindelijk resultaat heb ik denk nog best veel laten liggen. Tijdens dit project was de planning gewoon niet perfect, en had ik mezelf zeker wel iets meer kunnen uitdagen. Ik denk dat ik pas veel te laat in het project echt doorhad hoe nuttig api's echt zijn voor het web, en dat er veel meer mee mogelijk was. Ik denk dat ik uiteindelijk de basis nog wel goed heb mee kunnen pakken, en was het goed om een keer te werken met api's binnen de context van een website.  

## Bronnen
https://fitech101.aalto.fi/fi/courses/designing-and-building-scalable-web-applications/part-4/6-astro-routes-and-rendering
https://www.gideonmaina.me/blog/dynamic-routes-with-server-rendering-in-astro
https://render.com/docs/deploy-astro
https://docs.astro.build/en/guides/data-fetching/
https://wslisam.medium.com/mastering-localstorage-the-unsung-hero-of-client-side-storage-1b318851ea96
