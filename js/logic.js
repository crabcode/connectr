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
        
        //Animals
        interest = this.game.interests.animals;
        maxContent = todaysContent[0].length;
        for(var i = 0; i <= interest && i < maxContent; i++)
            content.push(todaysContent[0][i]);
        
        //Sports
        interest = this.game.interests.sports;
        maxContent = todaysContent[1].length;
        for(var i = 0; i <= interest && i < maxContent; i++)
            content.push(todaysContent[1][i]);
        
        //Politics
        interest = this.game.interests.politics;
        maxContent = todaysContent[2].length;
        for(var i = 0; i <= interest && i < maxContent; i++)
            content.push(todaysContent[2][i]);
            
        return content;
    }
}