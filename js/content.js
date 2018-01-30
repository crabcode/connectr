var createContent = function(game)
{
    this.game = game;
    this.content = 
[
    [//Day1
        [
            this.game.createNewsItem(
            "Neues Nintendo Spiel angekündigt",
            "",
            ["gaming", "nintendo", "newgame"],
            [],
            null,true)
        ],
        [
            this.game.createNewsItem(
            "Kickers im Viertelfinale!",
            "",
            ["soccer", "kickers"],
            [],
            null,true)
        ],
        [
            this.game.createNewsItem(
            "Regierung arbeitet an Gesetztesänderung",
            "",
            ["politics"],
            [],
            null,true)
        ],
        [
            this.game.createNewsItem(
            "Das tragen die Stars!",
            "",
            [""],
            [],
            null,true)
        ],
        [
            this.game.createNewsItem(
            "Kuschlige Kitzelkatzen!",
            "",
            ["cats"],
            [],
            null,true)
        ]
    ],
    [//Day2
        [
            this.game.createNewsItem(
            "Nintendos Reveal-Trailer",
            "",
            ["gaming", "nintendo", "newgame"],
            [],
            null,true),
            
            this.game.createNewsItem(
            "Unsere E3-Vorhersagen",
            "",
            ["gaming", "e3", "journalism"],
            [],
            null,true)

        ],
        [
            this.game.createNewsItem(
            "Maunze-Mietzen",
            "",
            ["cats"],
            [],
            null,true)
        ],
        [//Politics
            this.game.createNewsItem(
            "Was die Gesetzesänderung bedeutet",
            "Wir haben uns die Gesetzesänderung angeschaut. Hier unser Fazit!",
            ["politics"],
            [],
            null,true)
        ],
        [//Technik
            this.game.createNewsItem(
            "Techniktrends 2018",
            "",
            ["tech"],
            [],
            null,true)
        ],
    ],
    [//Day3
        [
            this.game.createNewsItem(
            "7/10 für Nintendos neues Spiel",
            "",
            ["gaming", "nintendo", "newgame"],
            [],
            null,true),
            
            this.game.createNewsItem(
            "Nintendos neues Meisterwerk",
            "",
            ["gaming", "nintendo", "newgame"],
            [],
            null,true)
        ],
        [
            this.game.createNewsItem(
            "Was deine Katze wirklich denkt",
            "",
            ["cats"],
            [],
            null,true),
            
            this.game.createNewsItem(
            "Can I haz cheeseburgers",
            "",
            ["cats"],
            [],
            null,true)
        ],
        [
            this.game.createNewsItem(
            "Finaztipps 2018",
            "So investieren die Profis!",
            ["finance"],
            [],
            null,true)
        ],
    ],
    [//Day3
        [
            this.game.createNewsItem(
            "Game of the Year von Nintendo",
            "",
            ["gaming", "nintendo", "newgame"],
            [],
            null,true),
            
            this.game.createNewsItem(
            "Hotfix für neues Nintendo-Spiel",
            "",
            ["gaming", "nintendo", "newgame"],
            [],
            null,true),
            
            this.game.createNewsItem(
            "Spielepresse korrupt?",
            "",
            ["gaming", "newgame", "journalism"],
            [],
            null,true)
        ],
        [
            this.game.createNewsItem(
            "Gamer Cats",
            "",
            ["cats", "gaming"],
            [],
            null,true),
            
            this.game.createNewsItem(
            "Katzen, Katzen, Katzen",
            "",
            ["cats"],
            [],
            null,true)
        ]
    ],
    [//Day4
        [
            this.game.createNewsItem(
            "Sex für Reviews?",
            "Spielejournalistin erwischt!",
            ["gaming", "journalism", "newgame"],
            [],
            null,true),
            
            this.game.createNewsItem(
            "Gamers are Dead!",
            "",
            ["gaming", "journalism"],
            [],
            null,true),
            
            this.game.createNewsItem(
            "DLC für Nintendos neuestes Spiel",
            "",
            ["gaming", "newgame", "nintendo"],
            [],
            null,true)
        ],
        [
            this.game.createNewsItem(
            "Ceiling Cat is watching you",
            "",
            ["cats", "meme"],
            [],
            null,true),
            
            this.game.createNewsItem(
            "Top 10 Cat Memes",
            "",
            ["cats", "meme"],
            [],
            null,true)
        ]
    ],
    [//Day5
        [
            this.game.createNewsItem(
            "Petition gegen unfaire Bewertung",
            "",
            ["gaming", "newgame", "journalism"],
            [],
            null,true),
            
            this.game.createNewsItem(
            "Ethic in der Spielepresse",
            "",
            ["gaming", "journalism"],
            [],
            null,true),
            
            this.game.createNewsItem(
            "Feministen gegen Gamer",
            "Wie Frauen uns unsere Spiele wegnehmen wollen",
            ["gaming", "journalism"],
            [],
            null,true)
        ],
        [
            this.game.createNewsItem(
            "Gamer Cats Rache",
            "",
            ["cats", "meme", "gaming"],
            [],
            null,true),
            
            this.game.createNewsItem(
            "Ban Gamer Cat?",
            "",
            ["cats", "meme", "gaming", "journalism"],
            [],
            null,true)
        ]
    ],
    [//Day6
        [
            this.game.createNewsItem(
            "Zensur in der Spielepresse",
            "",
            ["gaming", "journalism", "mensrights"],
            [],
            null,true),
            
            this.game.createNewsItem(
            "PC-Culture in Spielen",
            "Wie PC-Culture unsere Spiele ruiniert.",
            ["gaming", "journalism"],
            [],
            null,true),
            
            this.game.createNewsItem(
            "Gamer Cat für den Widerstand",
            "",
            ["gaming", "journalism", "cats", "meme"],
            [],
            null,true),
            
            this.game.createNewsItem(
            "Misandry",
            "",
            ["gaming", "journalism", "mensrights"],
            [],
            null,true)
        ],
        [
            this.game.createNewsItem(
            "Moar Gamer Cats!",
            "",
            ["cats", "meme", "gaming"],
            [],
            null,true)
        ]
    ],
    [//Day6
        [
            this.game.createNewsItem(
            "Games die deine Freundin hassen wird",
            "",
            ["gaming", "mensrights"],
            [],
            null,true),
            
            this.game.createNewsItem(
            "Studie zeigt Männer leiden am Meisten",
            "",
            ["gaming", "journalism", "mensrights"],
            [],
            null,true),
            
            this.game.createNewsItem(
            "Age of the Snowflake",
            "",
            ["journalism", "mensrights", "politics"],
            [],
            null,true),
            
            this.game.createNewsItem(
            "Präsidentschaftskandidat sagt was wir alle denken",
            "",
            ["mensrights", "politics"],
            [],
            null,true)
        ],
        [
            this.game.createNewsItem(
            "Can I haz games?",
            "",
            ["cats", "meme", "gaming"],
            [],
            null,true)
        ]
    ]
];
} 