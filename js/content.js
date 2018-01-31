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
        "assets/nintendo.jpg",true),

        this.game.createNewsItem(
        "Kickers im Viertelfinale!",
        "",
        ["soccer", "kickers"],
        0,
        "assets/kickers.jpeg",true),

        this.game.createNewsItem(
        "Regierung arbeitet an Gesetztesänderung",
        "",
        ["politics"],
        0,
        "assets/bundestag.jpg",true),

        this.game.createNewsItem(
        "Das tragen die Stars!",
        "",
        ["celebrities"],
        1,
        "assets/roterteppich.jpg",true),

        this.game.createNewsItem(
        "",
        "",
        ["cats"],
        0,
        "assets/cat-poop.jpg",true)
    ],
    [//Day2
        this.game.createNewsItem(
        "Nintendos Reveal-Trailer",
        "",
        ["gaming", "nintendo", "newgame"],
        0,
        "assets/nintendo.jpg",true),

        this.game.createNewsItem(
        "Unsere E3-Vorhersagen",
        "",
        ["gaming", "e3", "journalism"],
        0,
        "assets/e3.jpg",true),

        this.game.createNewsItem(
        "",
        "",
        ["cats"],
        0,
        "assets/cat-nowifi.jpg",true),

        this.game.createNewsItem(
        "Was die Gesetzesänderung bedeutet",
        "Wir haben uns die Gesetzesänderung angeschaut. Hier unser Fazit!",
        ["politics"],
        -1,
        "assets/politik.jpg",true),

        this.game.createNewsItem(
        "Techniktrends 2018",
        "",
        ["tech"],
        0,
        "assets/tech.jpg",true)
    ],
    [//Day3
        this.game.createNewsItem(
        "7/10 für Nintendos neues Spiel",
        "",
        ["gaming", "nintendo", "newgame"],
        -2,
        "assets/7-10.jpg",true),

        this.game.createNewsItem(
        "Nintendos neues Meisterwerk",
        "",
        ["gaming", "nintendo", "newgame"],
        2,
        "assets/10-10.jpg",true),

        this.game.createNewsItem(
        "",
        "",
        ["cats"],
        0,
        "assets/cat-gamergirl.jpg",true),

        this.game.createNewsItem(
        "",
        "",
        ["cats"],
        0,
        "assets/cat-hardmode.jpg",true),

        this.game.createNewsItem(
        "Finanztipps 2018",
        "So investieren die Profis!",
        ["finance"],
        1,
        "assets/finance.jpg",true)
    ],
    [//Day3
        this.game.createNewsItem(
        "Game of the Year von Nintendo",
        "",
        ["gaming", "nintendo", "newgame"],
        2,
        "assets/goty.jpg",true),

        this.game.createNewsItem(
        "Hotfix für neues Nintendo-Spiel",
        "",
        ["gaming", "nintendo", "newgame"],
        0,
        "assets/nintendo.jpg",true),

        this.game.createNewsItem(
        "Spielepresse korrupt?",
        "",
        ["gaming", "newgame", "journalism"],
        2,
        "assets/bias.jpg",true),

        this.game.createNewsItem(
        "",
        "",
        ["cats", "gaming"],
        1,
        "assets/cat-headshot.jpg",true),

        this.game.createNewsItem(
        "",
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
        "assets/busted.png",true),

        this.game.createNewsItem(
        "Gamers are Dead!",
        "",
        ["gaming", "journalism"],
        -2,
        "assets/gamers-dead.jpg",true),

        this.game.createNewsItem(
        "DLC für Nintendos neuestes Spiel",
        "",
        ["gaming", "newgame", "nintendo"],
        0,
        "assets/Season-Pass.png",true),

        this.game.createNewsItem(
        "",
        "",
        ["cats", "meme"],
        1,
        null,true),

        this.game.createNewsItem(
        "",
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
        "assets/stop.jpg",true),

        this.game.createNewsItem(
        "Ethik des Spielejournalismus",
        "",
        ["gaming", "journalism"],
        4,
        "assets/gg.jpg",true),

        this.game.createNewsItem(
        "Feministen gegen Gamer",
        "Wie Frauen uns unsere Spiele wegnehmen wollen",
        ["gaming", "journalism"],
        5,
        "assets/feminazi.jpg",true),

        this.game.createNewsItem(
        "",
        "",
        ["cats", "meme", "gaming"],
        3,
        null,true),

        this.game.createNewsItem(
        "Ban Gamer Cat?",
        "",
        ["cats", "meme", "gaming", "journalism"],
        -1,
        "assets/banned.jpg",true)
    ],
    [//Day6
        this.game.createNewsItem(
        "Zensur in der Spielepresse",
        "",
        ["gaming", "journalism", "mensrights"],
        3,
        "assets/censorship-2.jpg",true),

        this.game.createNewsItem(
        "PC-Culture in Spielen",
        "Wie PC-Culture unsere Spiele ruiniert.",
        ["gaming", "journalism"],
        4,
        "assets/censorship.jpg",true),

        this.game.createNewsItem(
        "",
        "",
        ["gaming", "journalism", "cats", "meme"],
        5,
        null,true),

        this.game.createNewsItem(
        "Misandry",
        "",
        ["gaming", "journalism", "mensrights"],
        5,
        "assets/mra.jpg",true),

        this.game.createNewsItem(
        "",
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
        "assets/feminists.jpg",true),

        this.game.createNewsItem(
        "Studie zeigt: Männer am meisten unterdrückte Gruppierung",
        "",
        ["gaming", "journalism", "mensrights"],
        5,
        "assets/oppression.jpg",true),

        this.game.createNewsItem(
        "Age of the Snowflake",
        "",
        ["journalism", "mensrights", "politics"],
        4,
        "assets/snowflake.jpg",true),

        this.game.createNewsItem(
        "Präsidentschaftskandidat sagt was wir alle denken",
        "",
        ["mensrights", "politics"],
        5,
        "assets/trump.jpg",true),

        this.game.createNewsItem(
        "",
        "",
        ["cats", "meme", "gaming"],
        0,
        null,true)
    ]
];
} 