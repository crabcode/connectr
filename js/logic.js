var Logic = function Logic(game)
{
    this.game = game
}

Logic.prototype =
{
    getNewsItems: function getNewsItems()
    {
        var content = [];
        var todaysContent = this.game.content[this.game.day];
        var interest, maxContent;
        
        maxContent = todaysContent.length;
        for(var i = 0; i <= maxContent; i++)
            content.push(todaysContent[i]);
            
        return content;
    }
}