var Game = function Game()
{
    this.name = "Name";
    
    this.interests = {
        animals: 1,
        sports: 1,
        politics: 1
    }
    
    this.content = new createContent(this).content;
    this.init();
}

Game.prototype =
{
    init: function init()
    {
        this.container = $(document.createElement("div")).attr("id", "container");
        this.profile = $(document.createElement("div")).attr("id", "profile");
        this.newsfeed = $(document.createElement("div")).attr("id", "newsfeed");
        
        this.profile.append($(document.createElement("div")).attr("id", "profile-pic"))
            .append($(document.createElement("div")).attr("id", "profile-name").text(this.name))
            .append($(document.createElement("div")).attr("id", "profile-feed-header").text("Shares"))
            .append($(document.createElement("div")).attr("id", "profile-shares-container"));
        
        this.newsfeed.append($(document.createElement("div")).attr("id", "news-header").text("Newsfeed"))
            .append($(document.createElement("div")).attr("id", "news-container"));

        $(this.container).append(this.profile);
        $(this.container).append(this.newsfeed);
        
        this.profile.hide();
        
        $("body").append($(document.createElement("div")).attr("id", "connectr-header")
                        .append($(document.createElement("div")).attr("id", "connectr-header-container")
                        .append($(document.createElement("div")).attr("id", "connectr-logo").text("Connectr"))
                        .append($(document.createElement("div")).attr("id", "connectr-profile").addClass("alert").click(this.showProfile.bind(this)))
                        .append($(document.createElement("div")).attr("id", "connectr-feed").addClass("alert").click(this.showNewsfeed.bind(this)))));
        
        $("body").append(this.container);
        
        for(var i = 0; i < this.content[0].length; i++)
            $("#news-container").append(this.content[0][i]);
        
    },
    
    createNewsItem: function createNewsItem(headline, msg, tags, agenda, picURL, returnOnly)
    {
        var item = $(document.createElement("div")).addClass("news-item-wrapper")
                        .append($(document.createElement("div")).addClass("news-item")
                            .append($(document.createElement("div")).addClass("news-headline").text(headline))
                            .append($(document.createElement("div")).addClass("news-body").text(msg)));
        switch(tags)
        {
            case "animals":
                item.attr("tag", "animal");
                break;
            case "sports":
                item.attr("tag", "sports");
                break;
            case "politics":
                item.attr("tag", "politics");
                break;
        }
        
        item.attr("agenda", agenda);
        
        if (picURL)
            item.append($(document.createElement("img")).addClass("news-pic").attr("src", picURL));
        
        item.find(".news-item").append($(document.createElement("div")).addClass("news-response")
                   .append($(document.createElement("div")).addClass("news-response-like").text("Like").click(this.respond.bind(this)))
                   .append($(document.createElement("div")).addClass("news-response-dislike").text("Dislike").click(this.respond.bind(this)))
                   .append($(document.createElement("div")).addClass("news-response-dismiss").text("Dismiss").click(this.respond.bind(this))));
        
        if (returnOnly)
            return item;
        else
            this.newsfeed.find("#news-container").append(item);
    },
    
    respond: function respond(e)
    {
        var item = $(e.currentTarget.parentElement.parentElement);
        
        if ($(e.currentTarget).hasClass("news-response-like"))
        {
            item.remove();
            item.addClass("response-like");
            item.find(".news-response").remove();
            item.append($(document.createElement("div")).addClass("share-response"));
            this.profile.find("#profile-shares-container").append(item);
            
            if(item.hasClass("animals"))
                this.parentElement.interests.animals++;
            if(item.hasClass("sports"))
                this.parentElement.interests.sports++;
            if(item.hasClass("politics"))
                this.parentElement.interests.politics++;
            
        }
        else if ($(e.currentTarget).hasClass("news-response-dislike"))
        {
            item.remove();
            item.addClass("response-dislike");
            item.find(".news-response").remove();
            item.append($(document.createElement("div")).addClass("share-response"));
            this.profile.find("#profile-shares-container").append(item);
        }
        else
            item.remove();
        
        if ($("#news-container").children().length == 0)
            this.showProfile();
    },
    
    showNewsfeed: function showNewsfeed()
    {
        this.profile.hide();
        this.newsfeed.show();
    },
    
    showProfile: function showProfile()
    {
        this.newsfeed.hide();
        this.profile.show();
    }
};