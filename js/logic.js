var Logic = function Logic(game)
{
    this.game = game
}

Logic.prototype =
{
    getNewsItems: function getNewsItems()
    {
        var content;
        
        if(this.game.interests.animals > 0)
            content = this.game.content[0][this.game.day];
        else
            content = this.game.content[1][this.game.day];
            
        return content;
    }
}