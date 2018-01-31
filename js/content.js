var createContent = function(game)
{
    this.game = game;
    this.content = 
[
    [//Day1
        this.game.createNewsItem(
        "Neues Nintendo Spiel angekündigt",
        "Nintendo hat in einer Videopräsentation im Rahmen der Technikmesse eine Reihe neuer Titel angekündigt, unter anderem dem heiß ersehnten...",
        ["gaming", "nintendo", "newgame"],
        0,
        "assets/nintendo.jpg",true),

        this.game.createNewsItem(
        "Kickers im Viertelfinale!",
        "Dass man sowas noch erleben darf! Haben es die Jungs mal wieder geschafft! Der Ball wurde mehrfach getreten und ist manchmal sogar ins Netz gegangen. Unglaublich!",
        ["soccer", "kickers"],
        0,
        "assets/kickers.jpeg",true),

        this.game.createNewsItem(
        "Regierung arbeitet an Gesetzesänderung",
        "Bundestag, 2018. Die Stimmung ist gespannt. Herr Seehofer schwitzt schon wieder. Die Diskussion ist in vollem Gange. Worauf...",
        ["politics"],
        0,
        "assets/bundestag.jpg",true),

        this.game.createNewsItem(
        "Das tragen die Stars!",
        "Was haben Kim Kardashian, Emma Watson und Jessica Chastain gemeinsam? Finden Sie es heraus, in unserer großen Reportage des...",
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
        "Kaut ihr auch schon seit Tagen nervös auf euren Fingernägeln und wartet sehnsüchtig auf den neuen Nintendo-Trailer? Euer Warten hat nun ein Ende!",
        ["gaming", "nintendo", "newgame"],
        0,
        "assets/nintendo.jpg",true),

        this.game.createNewsItem(
        "E3-Geheimnisse geleaked!",
        "Was wird es dieses Jahr auf der E3 zu sehen geben? Wir haben mit anonymen Quellen gesprochen und den exklusiven Blick in die Geheimnisse der Spieleindustrie!",
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
        "Was ist in? Was ist out? Erfahre alles, was du für dieses Jahr wissen musst in unserem Techniktrends-Überblick!",
        ["tech"],
        0,
        "assets/tech.jpg",true)
    ],
    [//Day3
        this.game.createNewsItem(
        "7/10 für Nintendos neues Spiel",
        "Nintendo hat mal wieder ein Spiel produziert, das trotz kleiner Mängel überzeugen kann und viele Stunden Spaß bereithält.",
        ["gaming", "nintendo", "newgame"],
        -2,
        "assets/7-10.jpg",true),

        this.game.createNewsItem(
        "Nintendos neues Meisterwerk",
        "Es ist kaum zu glauben: Nintendo setzt erneut neue Maßstäbe für Qualität, Spielspaß und emotionale Dichte.",
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
        "Finanztipps 2018 - So investieren die Profis!",
        "Taschengeld aufbessern oder Haus finanzieren? Mit diesen Tipps können Sie ihr Erspartes zu einem Vermögen verwandeln!",
        ["finance"],
        1,
        "assets/finance.jpg",true)
    ],
    [//Day3
        this.game.createNewsItem(
        "Game of the Year von Nintendo",
        "2018 hat gerade erst begonnen und schon haben wir den ersten Game Of The Year-Kandidaten!",
        ["gaming", "nintendo", "newgame"],
        2,
        "assets/goty.jpg",true),

        this.game.createNewsItem(
        "Hotfix für neues Nintendo-Spiel",
        "Kein Produkt ist perfekt. Jedoch bemüht sich Nintendo schneller als andere, auch die kleinen Mängel zu beheben. Hier die wichtigsten Änderungen:",
        ["gaming", "nintendo", "newgame"],
        0,
        "assets/nintendo.jpg",true),

        this.game.createNewsItem(
        "Spielepresse korrupt?",
        "Wie bekommt Nintendos Meisterwerk eine vernichtende 7/10, während generische Shooter 10/10 absahnen? Wir untersuchen, wie Journalisten sich von ihren Gefühlen und anderen Anreizen lenken lassen.",
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
        "assets/cat-disapproves.jpg",true)
    ],
    [//Day4
        this.game.createNewsItem(
        "Sex für Reviews? Skandal aufgedeckt!",
        "Wer hat sich nicht den Kopf gekratzt, als die Presse sich vor Lob für ein mittelmäßiges Text- \"spiel\" nicht retten konnte? Nun ist klar warum:",
        ["gaming", "journalism", "newgame"],
        5,
        "assets/busted.png",true),

        this.game.createNewsItem(
        "Gamers Are Dead",
        "Was bedeutet \"Gamer\" heutzutage überhaupt noch? Ist es an der Zeit, dass wir uns von der Identität \"Gamer\" verabschieden?",
        ["gaming", "journalism"],
        -2,
        "assets/gamers-dead.jpg",true),

        this.game.createNewsItem(
        "DLC für Nintendos neuestes Spiel",
        "Fans sind entzückt: Nintendo kündigt neue Inhalte für ihren neuesten Titel an, der Million in seinen Bann gezogen hat",
        ["gaming", "newgame", "nintendo"],
        0,
        "assets/Season-Pass.png",true),

        this.game.createNewsItem(
        "",
        "",
        ["cats", "meme"],
        1,
        "assets/cat-opinion.jpg",true),

        this.game.createNewsItem(
        "",
        "",
        ["cats", "meme"],
        0,
        "assets/cat-no.jpg",true)
    ],
    [//Day5
        this.game.createNewsItem(
        "Petition gegen unfaire Bewertung",
        "Wir haben es satt, wie sich vermeintliche \"Journalisten\" gegen Entwickler wie Nintendo verschwören, weil es gerade trendy ist, konträr zu sein!",
        ["gaming", "newgame", "journalism"],
        3,
        "assets/stop.jpg",true),

        this.game.createNewsItem(
        "Ethik des Spielejournalismus",
        "Die Spielepresse hat ein Korruptionsproblem. Spiele werden Geisel genommen und bei nicht ausreichenden \"Gefallen\" in den Reviews vernichtet.",
        ["gaming", "journalism"],
        4,
        "assets/gg.jpg",true),

        this.game.createNewsItem(
        "Feminists vs. Gamers",
        "Keine Gewalt, kein Sex, kein Spaß. Wenn es nach diesen Frauen ginge, könnten wir bald nur noch Walking-Simulatoren spielen.",
        ["gaming", "journalism"],
        5,
        "assets/feminazi.jpg",true),

        this.game.createNewsItem(
        "",
        "",
        ["cats", "meme", "gaming"],
        3,
        "assets/cat-feminism.jpg",true),

        this.game.createNewsItem(
        "Ban Gamer Cat?",
        "Ich wusste nicht, dass Katzen sexistisch sein können! Aber scheinbar wollen diese Feminazis uns nun auch noch die Memes wegnehmen!",
        ["cats", "meme", "gaming", "journalism"],
        -1,
        "assets/banned.jpg",true)
    ],
    [//Day6
        this.game.createNewsItem(
        "Zensur in der Spielepresse",
        "Gelöschte oder gar ganz abgeschaltete Kommentare und vieles mehr: Unsere Meinungsfreiheit wird untergraben und attackiert!",
        ["gaming", "journalism", "mensrights"],
        3,
        "assets/censorship-2.jpg",true),

        this.game.createNewsItem(
        "Wie PC-Culture unsere Spiele ruiniert",
        "Es ist überall: Heulende Pflänzchen, die alle ihre Extrawurst haben wollen. Aber dürfen wir unsere Spiele noch genießen? Nein, das würde ja ihre Gefühle verletzen!",
        ["gaming", "journalism"],
        4,
        "assets/censorship.jpg",true),

        this.game.createNewsItem(
        "",
        "",
        ["gaming", "journalism", "cats", "meme"],
        5,
        "assets/cat-ethics.jpg",true),

        this.game.createNewsItem(
        "Misandrie - Ein wachsendes Problem",
        "Darf man heutzutage überhaupt noch Mann sein? Scheinbar ist alles an uns falsch und anstößig. Wer hilft uns gegen wachsenden Männerhass?",
        ["gaming", "journalism", "mensrights"],
        5,
        "assets/mra.jpg",true),

        this.game.createNewsItem(
        "",
        "",
        ["cats", "meme", "gaming"],
        4,
        "assets/cat-hypocrit.jpg",true)
    ],
    [//Day7
        this.game.createNewsItem(
        "Feministen hassen diese Spiele",
        "Mit Spiel #5 wirst du diese Mimöschen zum weinen bringen!",
        ["gaming", "mensrights"],
        5,
        "assets/feminists.jpg",true),

        this.game.createNewsItem(
        "Studie zeigt: Männer am meisten unterdrückte Gruppe",
        "Es ist zum Nationalsport geworden, Männer zu diskriminieren. Wann immer wir diese Ungerechtigkeit dann ankreiden, werden wir verspottet und abgewiesen. Genug!",
        ["gaming", "journalism", "mensrights"],
        5,
        "assets/oppression.jpg",true),

        this.game.createNewsItem(
        "The Age of the Snowflake",
        "\"Buhuhu, ich bin ja so getriggered!\" So schallt es dieser Tage überall und wir sollen uns dem beugen? Niemals!",
        ["journalism", "mensrights", "politics"],
        4,
        "assets/snowflake.jpg",true),

        this.game.createNewsItem(
        "Präsidentschaftskandidat sagt was wir alle denken",
        "Ein Funken Hoffnung erglimmt im Dunkel: Wer hätte gedacht, dass es heutzutage noch möglich ist, sich dem feministischen Apparat zu wider- setzen und Wahrheit stolz auszusprechen!",
        ["mensrights", "politics"],
        5,
        "assets/trump.jpg",true),

        this.game.createNewsItem(
        "",
        "",
        ["cats", "meme", "gaming"],
        0,
        "assets/cat-censorship.jpg",true)
    ]
];
} 