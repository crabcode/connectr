var createContent = function(game)
{
    this.game = game;
    this.content = 
    [
        [
            this.game.createNewsItem(
            "Dogs are so cute!",
            "Dogs, who doesn't love them? More and more people fall in love with humans best friend.",
            ["animals"],
            -1,
            null,true),

            this.game.createNewsItem(
            "Cats are so cute!",
            "Cats, who doesn't love them? More and more people fall in love with these cuddly animals.",
            ["animals"],
            1,
            null,true),

        ],
        [
            this.game.createNewsItem(
            "Dogs are the cutest!",
            "Now it's official, dogs are the cutest!",
            ["animals"],
            -1,
            null,true),

            this.game.createNewsItem(
            "Nothing is cuter than cats",
            "Cats, reign supreme in cuteness, nobody can deny it!",
            ["animals"],
            1,
            null,true),

        ],
        [
            this.game.createNewsItem(
            "Dogs our new rulers, kill all cats!",
            "Now it's official, dogs are the cutest!",
            ["animals"],
            -1,
            null,true),

            this.game.createNewsItem(
            "Nothing is cuter than cats",
            "Cats, reign supreme in cuteness, nobody can deny it!",
            ["animals"],
            1,
            null,true),

        ]
    ]
} 