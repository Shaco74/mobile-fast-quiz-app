export interface AnimalAnswer {
  text: string;
  isRight: boolean;
}

export interface AnimalQuestion {
  question: string;
  answers?: AnimalAnswer[];
  open?: boolean;
  points: number;
}

export interface Animal {
  name: string;
  description: string;
  questions: AnimalQuestion[];
}
export const animals: Animal[] = [
  {
    name: "Asiatischer Elefant",
    description: "Das größte Landsäugetier Asiens",
    questions: [
      {
        question: "Wie viel kann ein ausgewachsener Asiatischer Elefant wiegen?",
        answers: [
          { text: "Bis zu 3.000 kg", isRight: false },
          { text: "Bis zu 5.000 kg", isRight: true },
          { text: "Bis zu 7.000 kg", isRight: false },
          { text: "Bis zu 9.000 kg", isRight: false }
        ],
        points: 10
      },
      {
        question: "Welche gemeinsame Erinnerung mit mir ist für dich unvergesslich?",
        open: true,
        points: 5
      }
    ]
  }, {
    name: "Erdmännchen",
    description: "Gesellige Wächter der afrikanischen Savanne",
    questions: [
      {
        question: "Welche Aufgabe übernimmt ein Erdmännchen, während die anderen auf Nahrungssuche sind?",
          answers: [
          {
            text: "Wache halten (Späher)", isRight: true },
            {
              text: "Nester bauen", isRight: false },
            {
                text: "Graben von Wasserlöchern", isRight: false },
            { text: "Pflege der Jungtiere aller Gruppenmitglieder", isRight: false }
          ],
        points: 10
      },
      {
        question: "Welche meiner Eigenschaften gibt dir das Gefühl, immer gut beschützt und geborgen zu sein?",
          open: true,
        points: 5
      },
      {
        question: "Wovon ernähren sich Erdmännchen hauptsächlich?",
          answers: [
          {
            text: "Gräser und Blätter", isRight: false },
            {
              text: "Insekten und kleine Wirbeltiere", isRight: true },
            {
                text: "Früchte und Samen", isRight: false },
            { text: "Wurzeln und Knollen", isRight: false }
          ],
        points: 10
      },
      {
        question: "An welchen Moment denkst du gerne zurück, weil wir uns dabei besonders gut unterstützt haben?",
          open: true,
        points: 5
      },
      {
        question: "Wie groß ist eine typische Erdmännchen-Gruppe?",
          answers: [
          {
            text: "2-5 Tiere", isRight: false },
            {
              text: "5-10 Tiere", isRight: false },
            {
                text: "10-30 Tiere", isRight: true },
            { text: "30-50 Tiere", isRight: false }
          ],
        points: 10
      },
      {
        question: "Was war der Moment, in dem du wusstest, dass wir das perfekte Team sind?",
          open: true,
        points: 5
      },
      {
        question: "Welches Verhalten zeigen Erdmännchen häufig, um sich gegenseitig Nähe und Zuneigung zu zeigen?",
          answers: [
          {
            text: "Sich gegenseitig putzen und kuscheln", isRight: true },
            {
              text: "Lautes Bellen", isRight: false },
            {
                text: "Gemeinsames Tanzen", isRight: false },
            { text: "Revierkämpfe", isRight: false }
          ],
        points: 10
      },
      {
        question: "Wenn wir eine Erdmännchen-Familie wären, welche Rolle hätte jeder von uns und warum?",
          open: true,
        points: 5
      }
    ]
    
  },
  {
    name: "Humboldt-Pinguin",
    description: "Ein in Südamerika beheimateter Pinguin",
    questions: [
      {
        question: "Woher hat der Humboldt-Pinguin seinen Namen?",
        answers: [
          { text: "Nach dem Entdecker Alexander von Humboldt", isRight: true },
          { text: "Nach dem Humboldt-Strom, in dem er lebt", isRight: false },
          { text: "Nach der Region Humboldt in Chile", isRight: false },
          { text: "Nach dem Forscher Friedrich Humboldt", isRight: false }
        ],
        points: 10
      },
      {
        question: "Welche unserer gemeinsamen Reisen hat dir am meisten bedeutet?",
        open: true,
        points: 5
      }
    ]
  },
  {
    name: "Kalifornischer Seelöwe",
    description: "Ein verspielter Meeressäuger von der Westküste Nordamerikas",
    questions: [
      {
        question: "Wodurch unterscheiden sich Kalifornische Seelöwen von anderen Robbenarten?",
        answers: [
          { text: "Sie haben äußere Ohrmuscheln", isRight: true },
          { text: "Sie können nicht an Land gehen", isRight: false },
          { text: "Sie sind reine Fleischfresser", isRight: false },
          { text: "Sie leben ausschließlich in Süßwasser", isRight: false }
        ],
        points: 10
      },
      {
        question: "Was war der lustigste Moment, den wir zusammen erlebt haben?",
        open: true,
        points: 5
      }
    ]
  },
  {
    name: "Kleiner Panda",
    description: "Auch Roter Panda genannt, lebt in den Bergwäldern des Himalayas",
    questions: [
      {
        question: "Was ist die Hauptnahrungsquelle des Kleinen Pandas?",
        answers: [
          { text: "Bambus", isRight: true },
          { text: "Insekten", isRight: false },
          { text: "Früchte", isRight: false },
          { text: "Kleine Säugetiere", isRight: false }
        ],
        points: 10
      },
      {
        question: "Welche Eigenschaft an mir findest du besonders liebenswert?",
        open: true,
        points: 5
      }
    ]
  },
  {
    name: "Flusspferd",
    description: "Ein großes, amphibisch lebendes Säugetier aus Afrika",
    questions: [
      {
        question: "Wie verbringen Flusspferde den Großteil des Tages?",
        answers: [
          { text: "Im Wasser", isRight: true },
          { text: "Auf Bäumen", isRight: false },
          { text: "In Höhlen", isRight: false },
          { text: "Auf offenen Grasflächen", isRight: false }
        ],
        points: 10
      },
      {
        question: "Welcher Ort gibt dir ein Gefühl von Ruhe und Geborgenheit?",
        open: true,
        points: 5
      }
    ]
  },
  {
    name: "Gepard",
    description: "Das schnellste Landsäugetier der Welt",
    questions: [
      {
        question: "Welche Höchstgeschwindigkeit kann ein Gepard erreichen?",
        answers: [
          { text: "Bis zu 60 km/h", isRight: false },
          { text: "Bis zu 80 km/h", isRight: false },
          { text: "Bis zu 100 km/h", isRight: true },
          { text: "Bis zu 120 km/h", isRight: false }
        ],
        points: 10
      },
      {
        question: "In welchem Moment hast du dich zuletzt richtig frei gefühlt?",
        open: true,
        points: 5
      }
    ]
  },
  {
    name: "Orang-Utan",
    description: "Menschenaffen aus den Regenwäldern Borneos und Sumatras",
    questions: [
      {
        question: "Was bedeutet der Name 'Orang-Utan'?",
        answers: [
          { text: "Waldmensch", isRight: true },
          { text: "Roter Affe", isRight: false },
          { text: "Baumkletterer", isRight: false },
          { text: "Fruchtesser", isRight: false }
        ],
        points: 10
      },
      {
        question: "Welche Weisheit oder Lektion aus unserer Beziehung schätzt du am meisten?",
        open: true,
        points: 5
      }
    ]
  },
  {
    name: "Nashorn",
    description: "Großes, pflanzenfressendes Säugetier mit charakteristischem Horn",
    questions: [
      {
        question: "Welche Funktion hat das Horn des Nashorns hauptsächlich?",
        answers: [
          { text: "Verteidigung und Revierkämpfe", isRight: true },
          { text: "Nahrungssuche", isRight: false },
          { text: "Kommunikation", isRight: false },
          { text: "Thermoregulation", isRight: false }
        ],
        points: 10
      },
      {
        question: "Wann hast du zuletzt für etwas gekämpft, das dir wichtig war?",
        open: true,
        points: 5
      }
    ]
  },
  {
    name: "Zweifingerfaultier",
    description: "Langsamer Baumkletterer aus den Regenwäldern Südamerikas",
    questions: [
      {
        question: "Wie verbringen Faultiere den Großteil ihres Lebens?",
        answers: [
          { text: "Hängend in Bäumen", isRight: true },
          { text: "Grabend unter der Erde", isRight: false },
          { text: "Schwimmend im Wasser", isRight: false },
          { text: "Auf offenen Grasflächen", isRight: false }
        ],
        points: 10
      },
      {
        question: "Welcher Ort gibt dir ein Gefühl von Ruhe und Geborgenheit?",
        open: true,
        points: 5
      }
    ]
  },
  {
    name: "Grevyzebra",
    description: "Das größte und seltenste Zebra",
    questions: [
      {
        question: "Wodurch unterscheidet sich das Grevyzebra von anderen Zebras?",
        answers: [
          { text: "Durch seine größeren Ohren", isRight: true },
          { text: "Durch seine kürzeren Beine", isRight: false },
          { text: "Durch seine einfarbige Fellfarbe", isRight: false },
          { text: "Durch seine längere Mähne", isRight: false }
        ],
        points: 10
      },
      {
        question: "Welche unserer gemeinsamen Erlebnisse war für dich besonders einzigartig?",
        open: true,
        points: 5
      }
    ]
  },
  {
    name: "Erdferkel",
    description: "Ein nachtaktives Säugetier aus Afrika",
    questions: [
      {
        question: "Was ist die Hauptnahrung des Erdferkels?",
        answers: [
          { text: "Ameisen und Termiten", isRight: true },
          { text: "Wurzeln und Knollen", isRight: false },
          { text: "Kleine Nagetiere", isRight: false },
          { text: "Früchte und Beeren", isRight: false }
        ],
        points: 10
      },
      {
        question: "Gibt es eine Herausforderung, die wir gemeinsam gemeistert haben und die dich stolz macht?",
        open: true,
        points: 5
      }
    ]
  },
  {
    name: "Bonobo",
    description: "Ein enger Verwandter des Menschen",
    questions: [
      {
        question: "In welchem Land sind Bonobos ausschließlich in freier Wildbahn zu finden?",
        answers: [
          { text: "Demokratische Republik Kongo", isRight: true },
          { text: "Brasilien", isRight: false },
          { text: "Indonesien", isRight: false },
          { text: "Madagaskar", isRight: false }
        ],
        points: 10
      },
      {
        question: "Was schätzt du besonders an unserer Kommunikation miteinander?",
        open: true,
        points: 5
      }
    ]
  },
  {
    name: "Mantelpavian",
    description: "Eine Affenart mit markantem Fell",
    questions: [
      {
        question: "Welche soziale Struktur ist typisch für Mantelpaviane?",
        answers: [
          { text: "Haremsgruppen", isRight: true },
          { text: "Monogame Paare", isRight: false },
          { text: "Einzelgänger", isRight: false },
          { text: "Matrilineare Clans", isRight: false }
        ],
        points: 10
      },
      {
        question: "In welchen Momenten fühlst du dich in unserer Beziehung besonders verbunden?",
        open: true,
        points: 5
      }
    ]
  },
  {
    name: "Weißhandgibbon",
    description: "Ein geschickter Kletterer aus Südostasien",
    questions: [
      {
        question: "Wie bewegen sich Weißhandgibbons hauptsächlich fort?",
        answers: [
          { text: "Schwinghangeln (Brachiation)", isRight: true },
          { text: "Laufen auf allen Vieren", isRight: false },
          { text: "Springen von Ast zu Ast", isRight: false },
          { text: "Klettern mit dem Schwanz", isRight: false }
        ],
        points: 10
      },
      {
        question: "Welches gemeinsame Ziel möchtest du mit mir in der Zukunft erreichen?",
        open: true,
        points: 5
      }
    ]
  },
  {
    name: "Rotschenkel-Kleideraffe",
    description: "Ein seltener Affe aus Südostasien",
    questions: [
      {
        question: "Warum sind Rotschenkel-Kleideraffen vom Aussterben bedroht?",
        answers: [
          { text: "Lebensraumverlust und Jagd", isRight: true },
          { text: "Klimawandel", isRight: false },
          { text: "Konkurrenz mit anderen Affenarten", isRight: false },
          { text: "Niedrige Fortpflanzungsrate", isRight: false }
        ],
        points: 10
      },
      {
        question: "Wie können wir gemeinsam dazu beitragen, unsere Umwelt zu schützen?",
        open: true,
        points: 5
      }
    ]
  },
  {
    name: "Bartaffe",
    description: "Ein Affe mit markantem Bart aus Indien",
    questions: [
      {
        question: "In welchem Lebensraum sind Bartaffen hauptsächlich zu finden?",
        answers: [
          { text: "Tropische Regenwälder", isRight: true },
          { text: "Savannen", isRight: false },
          { text: "Gebirgsregionen", isRight: false },
          { text: "Wüsten", isRight: false }
        ],
        points: 10
      },
      {
        question: "Welche kulturellen Erfahrungen haben dich in unserem gemeinsamen Leben geprägt?",
        open: true,
        points: 5
      }
    ]
  },
  {
    name: "Zwergseidenäffchen",
    description: "Das kleinste bekannte Affenart",
    questions: [
      {
        question: "Wie groß wird ein ausgewachsenes Zwergseidenäffchen?",
        answers: [
          { text: "14 bis 16 cm", isRight: true },
          { text: "20 bis 25 cm", isRight: false },
          { text: "30 bis 35 cm", isRight: false },
          { text: "40 bis 45 cm", isRight: false }
        ],
        points: 10
      },
      {
        question: "Welche kleinen Dinge im Alltag machen dich besonders glücklich?",
        open: true,
        points: 5
      }
    ]
  },
  {
    name: "Riesenschildkröte",
    description: "Eine der größten Schildkrötenarten der Welt",
    questions: [
      {
        question: "Wie alt können Riesenschildkröten werden?",
        answers: [
          { text: "Über 100 Jahre", isRight: true },
          { text: "Bis zu 50 Jahre", isRight: false },
          { text: "Bis zu 75 Jahre", isRight: false },
          { text: "Bis zu 90 Jahre", isRight: false }
        ],
        points: 10
      },
      {
        question: "Welche langfristigen Ziele haben wir gemeinsam erreicht?", open: true, points: 5
      }
    ]
  }
  , {
    name: "Moschusochse",
    description: "Ein robustes Tier der arktischen Tundra",
    questions: [
      {
        question: "Was schützt Moschusochsen vor extremer Kälte?",
        answers: [
          { text: "Dichtes Fell und dicke Fettschicht", isRight: true },
          { text: "Sehr dünnes Fell", isRight: false },
          { text: "Schnelle Bewegungen", isRight: false },
          { text: "Leben in Höhlen", isRight: false }
        ],
        points: 10
      },
      {
        question: "Was gibt dir Kraft in schwierigen Situationen?",
        open: true,
        points: 5
      }
    ]
  },
  {
    name: "Tiger",
    description: "Die größte Raubkatze Asiens",
    questions: [
      {
        question: "Wie leben Tiger in freier Wildbahn?",
        answers: [
          { text: "Meist einzelgängerisch", isRight: true },
          { text: "In großen Rudeln", isRight: false },
          { text: "Paarweise", isRight: false },
          { text: "In kleinen Familiengruppen", isRight: false }
        ],
        points: 10
      },
      {
        question: "Wann hast du zuletzt Mut bewiesen?",
        open: true,
        points: 5
      }
    ]
  },
  {
    name: "Afrikanischer Löwe",
    description: "Der König der Savanne",
    questions: [
      {
        question: "Wer übernimmt hauptsächlich die Jagd bei afrikanischen Löwen?",
        answers: [
          { text: "Die weiblichen Löwen", isRight: true },
          { text: "Die männlichen Löwen", isRight: false },
          { text: "Beide gleichmäßig", isRight: false },
          { text: "Die jungen Löwen", isRight: false }
        ],
        points: 10
      },
      {
        question: "Welche Eigenschaft bewunderst du besonders an mir?",
        open: true,
        points: 5
      }
    ]
  },
  {
    name: "Okapi",
    description: "Ein seltenes Waldtier, verwandt mit der Giraffe",
    questions: [
      {
        question: "Wo leben Okapis in freier Wildbahn?",
        answers: [
          { text: "Im Regenwald Zentralafrikas", isRight: true },
          { text: "In der Sahara", isRight: false },
          { text: "In den Steppen Ostafrikas", isRight: false },
          { text: "In den Bergen Südafrikas", isRight: false }
        ],
        points: 10
      },
      {
        question: "Was hast du erst spät an mir entdeckt?",
        open: true,
        points: 5
      }
    ]
  },
  {
    name: "Alpaka",
    description: "Ein domestiziertes Tier aus Südamerika",
    questions: [
      {
        question: "Wofür sind Alpakas besonders bekannt?",
        answers: [
          { text: "Weiche und warme Wolle", isRight: true },
          { text: "Hohe Sprungkraft", isRight: false },
          { text: "Ausgeprägter Jagdinstinkt", isRight: false },
          { text: "Giftige Verteidigungsmechanismen", isRight: false }
        ],
        points: 10
      },
      {
        question: "Welcher gemeinsame Moment wärmt dir immer noch das Herz?",
        open: true,
        points: 5
      }
    ]
  },
  {
    name: "Strauß",
    description: "Der größte lebende Vogel der Erde",
    questions: [
      {
        question: "Wie schnell kann ein Strauß laufen?",
        answers: [
          { text: "Bis zu 70 km/h", isRight: true },
          { text: "Bis zu 40 km/h", isRight: false },
          { text: "Bis zu 90 km/h", isRight: false },
          { text: "Bis zu 20 km/h", isRight: false }
        ],
        points: 10
      },
      {
        question: "Welche Erfahrung in unserem gemeinsamen Leben hat dich am meisten überrascht?",
        open: true,
        points: 5
      }
    ]
  },
  {
    name: "Krokodil",
    description: "Beeindruckendes Reptil mit starker Panzerhaut",
    questions: [
      {
        question: "Wie regulieren Krokodile ihre Körpertemperatur?",
        answers: [
          { text: "Durch Sonnenbaden", isRight: true },
          { text: "Durch ständiges Schwimmen", isRight: false },
          { text: "Durch Essen warmer Beute", isRight: false },
          { text: "Durch Winterschlaf", isRight: false }
        ],
        points: 10
      },
      {
        question: "Wann hast du dich zuletzt besonders stark gefühlt?",
        open: true,
        points: 5
      }
    ]
  },
  {
    name: "Rotluchs",
    description: "Eine kleine Wildkatze Nordamerikas",
    questions: [
      {
        question: "Was ist typisch für den Lebensstil eines Rotluchses?",
        answers: [
          { text: "Einzelgänger und territoriales Verhalten", isRight: true },
          { text: "Große Rudel", isRight: false },
          { text: "Vogelähnliches Nestverhalten", isRight: false },
          { text: "Aquatische Lebensweise", isRight: false }
        ],
        points: 10
      },
      {
        question: "Welchen Freiraum schätzt du in unserer Beziehung am meisten?",
        open: true,
        points: 5
      }
    ]
  },
  {
    name: "Tapir",
    description: "Ein pflanzenfressendes Säugetier aus den Tropen",
    questions: [
      {
        question: "Wie verbringt der Tapir typischerweise seinen Tag?",
        answers: [
          { text: "Nachtaktiv und dämmerungsaktiv", isRight: true },
          { text: "Aktiv bei voller Mittagssonne", isRight: false },
          { text: "Unterirdisch grabend", isRight: false },
          { text: "Nur im Wasser lebend", isRight: false }
        ],
        points: 10
      },
      {
        question: "Welche Gewohnheit von mir findest du besonders liebenswert?",
        open: true,
        points: 5
      }
    ]
  },
  {
    name: "Katta",
    description: "Eine Lemurenart aus Madagaskar mit auffälligem Schwanz",
    questions: [
      {
        question: "Was ist ein charakteristisches Verhalten von Kattas?",
        answers: [
          { text: "Sonnenbaden in Gruppen", isRight: true },
          { text: "Schwimmen im Meer", isRight: false },
          { text: "Vogelähnlicher Gesang", isRight: false },
          { text: "Unterirdische Höhlenbewohner", isRight: false }
        ],
        points: 10
      },
      {
        question: "Was würdest du gerne öfter gemeinsam mit mir tun?",
        open: true,
        points: 5
      }
    ]
  }

];
