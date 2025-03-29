# Tier-Quiz App

Eine mobile-freundliche Quiz-Anwendung zum spielerischen Entdecken von Tierinformationen und zur Vertiefung persönlicher Beziehungen durch offene Fragen.

![Tier-Quiz App Screenshot](https://via.placeholder.com/800x400?text=Tier-Quiz+App)

## Funktionen

- **Tier-Quiz:** Entdecke verschiedene Tierarten und teste dein Wissen
- **Fortschrittsverfolgung:** Sehe deinen Fortschritt und Punktestand für jedes Tier
- **Responsive Design:** Optimiert für mobile Geräte und Desktop-Nutzung
- **Persönliche Fragen:** Mischung aus Wissensfragen und persönlichen Reflexionsfragen
- **Visuelle Tierkarten:** Jedes Tier wird mit passendem Emoji dargestellt

## Technischer Überblick

Diese Anwendung wurde mit modernen Web-Technologien entwickelt:

- **Next.js 15.2.4:** React-Framework für serverseitig gerenderte Anwendungen
- **TypeScript:** Typ-sicheres JavaScript für verbesserte Entwicklererfahrung
- **Tailwind CSS:** Utility-first CSS-Framework für Styling
- **Session Storage:** Zur Speicherung des Spielstands und der Benutzerpunkte

## Installation und Start

1. Klone das Repository

```bash
git clone <repository-url>
cd mobile-fast-quiz-app
```

2. Installiere Abhängigkeiten

```bash
npm install
# oder
yarn install
```

3. Starte den Entwicklungsserver

```bash
npm run dev
# oder
yarn dev
```

4. Öffne [http://localhost:3000](http://localhost:3000) in deinem Browser

## Projektstruktur

```
/src
  /app                # Next.js App-Router
    /tier-quiz        # Tier-Quiz Seiten
      /[animalName]   # Dynamische Tier-Quiz-Detailseiten
    /page.tsx         # Homepage
  /components         # React-Komponenten
    GenericQuizApp.tsx # Haupt-Quiz-Komponente
  /data               # Daten-Dateien
    animal-quiz.ts    # Tierdaten und Quiz-Fragen
  /styles             # Globale Styles
```

## Nutzung des Quiz

1. Wähle ein Tier aus der Übersicht aus
2. Beantworte die Fragen über das ausgewählte Tier
3. Für korrekte Antworten erhältst du Punkte (frühere Antworten geben mehr Punkte)
4. Offene Fragen bieten Raum für persönliche Reflexion
5. Nach Abschluss eines Quiz siehst du deine Gesamtpunktzahl und deinen Fortschritt

## Erweiterung

Um weitere Tiere oder Fragen hinzuzufügen:

1. Bearbeite die Datei `src/data/animal-quiz.ts` und füge neue Tier-Objekte hinzu
2. Füge für neue Tiere auch passende Emoji-Einträge in der `getAnimalEmoji`-Funktion in `tier-quiz/page.tsx` hinzu

---

Dieses Projekt wurde mit [Next.js](https://nextjs.org) erstellt und ist für Bildungs- und Unterhaltungszwecke konzipiert.
