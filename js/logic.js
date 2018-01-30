var Logic = function Logic(game)
{
    this.game = game
}

Logic.prototype =
{
    getNewsItems: function getNewsItems()
    {
        var content = [];
        
        if(this.game.interests.animals > 0)
        {
            switch(this.game.agendas.cats)
            {
                case 0:
                    content.push(this.game.content[0][0][0]);
                    break;
                case 1:
                    content.push(this.game.content[0][1][0]);
                    break;
                case 2:
                    content.push(this.game.content[0][2][0]);
                    break;
            }
            switch(this.game.agendas.dogs)
            {
                case 0:
                    content.push(this.game.content[0][0][1]);
                    break;
                case 1:
                    content.push(this.game.content[0][1][1]);
                    break;
                case 2:
                    content.push(this.game.content[0][2][1]);
                    break;
            }
        }
        
        if(this.game.interests.sports > 0)
        {
            switch(this.game.agendas.ballers)
            {
                case 0:
                    content.push(this.game.content[1][0][0]);
                    break;
                case 1:
                    content.push(this.game.content[1][1][0]);
                    break;
                case 2:
                    content.push(this.game.content[1][2][0]);
                    break;
            }
            switch(this.game.agendas.kickers)
            {
                case 0:
                    content.push(this.game.content[1][0][1]);
                    break;
                case 1:
                    content.push(this.game.content[1][1][1]);
                    break;
                case 2:
                    content.push(this.game.content[1][2][1]);
                    break;
            }
        }
            
        return content;
    }
}