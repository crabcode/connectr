var createContent = function(game)
{
    this.game = game;
    this.content = 
[
    [//Day1
        this.game.createNewsItem(
        "Neues Nintendo Spiel angekündigt",
        "",
        ["gaming", "nintendo", "newgame"],
        0,
        null,true),

        this.game.createNewsItem(
        "Kickers im Viertelfinale!",
        "",
        ["soccer", "kickers"],
        0,
        null,true),

        this.game.createNewsItem(
        "Regierung arbeitet an Gesetztesänderung",
        "",
        ["politics"],
        0,
        null,true),

        this.game.createNewsItem(
        "Das tragen die Stars!",
        "",
        ["celebrities"],
        1,
        null,true),

        this.game.createNewsItem(
        "Kuschlige Kitzelkatzen!",
        "",
        ["cats"],
        0,
        null,true)
    ],
    [//Day2
        this.game.createNewsItem(
        "Nintendos Reveal-Trailer",
        "",
        ["gaming", "nintendo", "newgame"],
        0,
        null,true),

        this.game.createNewsItem(
        "Unsere E3-Vorhersagen",
        "",
        ["gaming", "e3", "journalism"],
        0,
        null,true),

        this.game.createNewsItem(
        "Maunze-Mietzen",
        "",
        ["cats"],
        0,
        null,true),

        this.game.createNewsItem(
        "Was die Gesetzesänderung bedeutet",
        "Wir haben uns die Gesetzesänderung angeschaut. Hier unser Fazit!",
        ["politics"],
        -1,
        null,true),

        this.game.createNewsItem(
        "Techniktrends 2018",
        "",
        ["tech"],
        0,
        null,true)
    ],
    [//Day3
        this.game.createNewsItem(
        "7/10 für Nintendos neues Spiel",
        "",
        ["gaming", "nintendo", "newgame"],
        -2,
        null,true),

        this.game.createNewsItem(
        "Nintendos neues Meisterwerk",
        "",
        ["gaming", "nintendo", "newgame"],
        2,
        null,true),

        this.game.createNewsItem(
        "Was deine Katze wirklich denkt",
        "",
        ["cats"],
        0,
        null,true),

        this.game.createNewsItem(
        "Can I haz cheeseburgers",
        "",
        ["cats"],
        0,
        null,true),

        this.game.createNewsItem(
        "Finanztipps 2018",
        "So investieren die Profis!",
        ["finance"],
        1,
        null,true)
    ],
    [//Day3
        this.game.createNewsItem(
        "Game of the Year von Nintendo",
        "",
        ["gaming", "nintendo", "newgame"],
        2,
        null,true),

        this.game.createNewsItem(
        "Hotfix für neues Nintendo-Spiel",
        "",
        ["gaming", "nintendo", "newgame"],
        0,
        null,true),

        this.game.createNewsItem(
        "Spielepresse korrupt?",
        "",
        ["gaming", "newgame", "journalism"],
        2,
        null,true),

        this.game.createNewsItem(
        "Gamer Cats",
        "",
        ["cats", "gaming"],
        1,
        null,true),

        this.game.createNewsItem(
        "Katzen, Katzen, Katzen",
        "",
        ["cats"],
        0,
        null,true)
    ],
    [//Day4
        this.game.createNewsItem(
        "Sex für Reviews?",
        "Spielejournalistin erwischt!",
        ["gaming", "journalism", "newgame"],
        5,
        null,true),

        this.game.createNewsItem(
        "Gamers are Dead!",
        "",
        ["gaming", "journalism"],
        -2,
        null,true),

        this.game.createNewsItem(
        "DLC für Nintendos neuestes Spiel",
        "",
        ["gaming", "newgame", "nintendo"],
        0,
        null,true),

        this.game.createNewsItem(
        "Ceiling Cat is watching you",
        "",
        ["cats", "meme"],
        1,
        null,true),

        this.game.createNewsItem(
        "Top 10 Cat Memes",
        "",
        ["cats", "meme"],
        0,
        null,true)
    ],
    [//Day5
        this.game.createNewsItem(
        "Petition gegen unfaire Bewertung",
        "",
        ["gaming", "newgame", "journalism"],
        3,
        null,true),

        this.game.createNewsItem(
        "Ethic in der Spielepresse",
        "",
        ["gaming", "journalism"],
        4,
        null,true),

        this.game.createNewsItem(
        "Feministen gegen Gamer",
        "Wie Frauen uns unsere Spiele wegnehmen wollen",
        ["gaming", "journalism"],
        5,
        null,true),

        this.game.createNewsItem(
        "Gamer Cats Rache",
        "",
        ["cats", "meme", "gaming"],
        3,
        null,true),

        this.game.createNewsItem(
        "Ban Gamer Cat?",
        "",
        ["cats", "meme", "gaming", "journalism"],
        -1,
        null,true)
    ],
    [//Day6
        this.game.createNewsItem(
        "Zensur in der Spielepresse",
        "",
        ["gaming", "journalism", "mensrights"],
        3,
        null,true),

        this.game.createNewsItem(
        "PC-Culture in Spielen",
        "Wie PC-Culture unsere Spiele ruiniert.",
        ["gaming", "journalism"],
        4,
        null,true),

        this.game.createNewsItem(
        "Gamer Cat für den Widerstand",
        "",
        ["gaming", "journalism", "cats", "meme"],
        5,
        null,true),

        this.game.createNewsItem(
        "Misandry",
        "",
        ["gaming", "journalism", "mensrights"],
        5,
        null,true),

        this.game.createNewsItem(
        "Moar Gamer Cats!",
        "",
        ["cats", "meme", "gaming"],
        4,
        null,true)
    ],
    [//Day6
        this.game.createNewsItem(
        "Games die deine Freundin hassen wird",
        "",
        ["gaming", "mensrights"],
        5,
        null,true),

        this.game.createNewsItem(
        "Studie zeigt Männer leiden am Meisten",
        "",
        ["gaming", "journalism", "mensrights"],
        5,
        null,true),

        this.game.createNewsItem(
        "Age of the Snowflake",
        "",
        ["journalism", "mensrights", "politics"],
        4,
        null,true),

        this.game.createNewsItem(
        "Präsidentschaftskandidat sagt was wir alle denken",
        "",
        ["mensrights", "politics"],
        5,
        null,true),

        this.game.createNewsItem(
        "Can I haz games?",
        "",
        ["cats", "meme", "gaming"],
        0,
        null,true)
    ]
];
} 