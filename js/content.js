var createContent = function(game)
{
    this.game = game;
    this.content = 
[
    [//Day1
        [//Animals
            this.game.createNewsItem(
            "Top 10 Tiere 2018",
            "Hier sind die Top 10 der Tiere dieses Jahres. Nr. 7 wird dich schockieren!",
            ["animals"],
            [],
            null,true)
        ],
        [//Sports
            this.game.createNewsItem(
            "Ballers schlagen Kickers",
            "Ein hartes Spiel, ein verdienter Sieg! Knapper hätte es kaum sein können, doch die Baller haben den kühleren Kopf bewahrt und konnten im Endspiel die Kickers schlagen.",
            ["sports"],
            [],
            null,true)
        ],
        [//Politics
            this.game.createNewsItem(
            "Regierungspartei plant Gesetzensänderung",
            "Die Regierungspartei bereitet eine neue Neuauflage des umstrittenen Gesetzes.",
            ["politics"],
            [],
            null,true)
        ]
    ],
    [//Day2
        [//Animals
            this.game.createNewsItem(
            "Warum Katzen mietzen!",
            "Warum mietzen Katzen? Eine gute Frage, wir haben die Antwort!",
            ["animals"],
            ["cats"],
            null,true),
            
            this.game.createNewsItem(
            "Hundewelpen!",
            "Hunde sind süß, Hundewelpen sind süßer. Hier sind unsere liebsten Hundwelpen. Haltet euch fest, jetzt wirds süß!",
            ["animals"],
            ["dogs"],
            null,true)

        ],
        [//Sports
            this.game.createNewsItem(
            "Pöbelnde Kickers-Fans",
            "Eine Meute verärgerter Kickers-Fans hat letzte Nacht das Ballers-Statium mit verächtlichen Parolen verschmiert. Eine Schande!",
            ["sports"],
            ["ballers"],
            null,true),

            this.game.createNewsItem(
            "Betrüger-Schiri Cousin von Ballers Torward",
            "Wer hätte das gedacht? Schiri der dem Kickers-Stürmer die rote Karte gegeben hat, ist der Cousin vom Ballers Torward!",
            ["sports"],
            ["kickers"],
            null,true)

        ],
        [//Politics
            this.game.createNewsItem(
            "Was die Gesetzesänderung bedeutet",
            "Wir haben uns die Gesetzesänderung angeschaut. Hier unser Fazit!",
            ["politics"],
            [],
            null,true),
            
            this.game.createNewsItem(
            "Was die Gesetzensänderung falsch macht!",
            "Die Regierungspartei macht viel falsch. Das hat sie diesmal versemmelt!",
            ["politics"],
            ["contra"],
            null,true)
        ],
    ],
    [//Day3
        [//Animals
            this.game.createNewsItem(
            "Hund oder Katze?",
            "Die Frage aller Fragen und wir haben die Antwort!",
            ["animals"],
            [],
            null,true),
            
            this.game.createNewsItem(
            "Schützt die Katzen!",
            "Hundehalter aufgepasst! Eure Kläffer haben zum letzten mal unsere Liebsten, verschreckt! Verstreut dunkle Schokolade in eurer Nachbarschaft.",
            ["animals"],
            ["cats"],
            null,true),
            
            this.game.createNewsItem(
            "Hunde über alles!",
            "Wer einen Hund hat, weiß von was ich rede. Weg mit den Leinen! Lasst den Hund frei. Und wenn er mal eine Katze fängt? Selber Schuld, sage ich!",
            ["animals"],
            ["dogs"],
            null,true)
        ],
        [//Sports
            this.game.createNewsItem(
            "Baller, wehrt euch!",
            "Zeigt den Kickers, dass wir sowas nicht mit uns machen lassen! Sie haben lange genug gespottet, es wird Zeit sich zu wehren!",
            ["sports"],
            ["ballers"],
            null, true),
            
            this.game.createNewsItem(
            "Kickt den Ballern die Schädel ein!",
            "Nur ein blutender Baller-Fan ist ein guter Baller-Fan! Lasst den Worten Taten folgen. Nieder mit den Schweinen!",
            ["sports"],
            ["kickers"],
            null,true)

        ],
        [//Politics
            this.game.createNewsItem(
            "Regierungspartei plant Gesetzensänderung!",
            "!!!!!!!",
            ["politics"],
            [],
            null,true),
        ],
    ]
];
} 