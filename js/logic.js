var Logic = function Logic(game)
{
    this.game = game;
    this.backlog = [];
}

Logic.prototype =
{
    
    getNewsItems: function getNewsItems()
    {
        // Add new content to backlog front
        this.backlog = this.game.content[this.game.day].concat(this.backlog);
        
        // Calculate weights
        var freshnessBonus = this.game.content[this.game.day].length;
        var item;
        for(var i in this.backlog)
        {
            item = this.backlog[i];
                item.weight = 0;
            
            // Add freshness bonus
            if(freshnessBonus > 0)
            {
                freshnessBonus--;
                item.weight += 5;
            }
            
            // Handle interests
            var tags = item.attr("tags").split(",");
            var tag;
            for(var t in tags)
            {
                tag = tags[t];
                if(this.game.interests.hasOwnProperty(tag))
                    item.weight += this.game.interests[tag];
            }
            
            // Handle worldview
            var view = Number(item.attr("worldview"));
            item.weight -= Math.abs(this.game.worldview - view);
        }
        
        // Sort by weight
        this.backlog.sort(function(a, b){return b.weight - a.weight});
        
        // Splice off top content
        var content = this.backlog.splice(0,5);
        
        //Debug
        var debuglog = "Content weights:";
        for(var i in content)
        {
            debuglog += "\n " + content[i].weight + ": " + content[i].find(".news-headline").text();
        }
        console.log(debuglog);
            
        return content;
    }
}