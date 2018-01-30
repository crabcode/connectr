var Logic = function Logic(game)
{
    this.game = game
}

Logic.prototype =
{
    getNewsItems: function getNewsItems()
    {
        return this.game.content[this.game.day];
    }
}