var Game = function Game()
{
    this.name = "Name";
    this.day = 0;
    
    this.interests = {
        animals: 1,
        sports: 1,
        politics: 1
    }
    
    this.agendas = {
        dogs: 0,
        cats: 0,
        kickers: 0,
        ballers: 0
    }
    
    this.content = new createContent(this).content;
    this.logic = new Logic(this);
    
    this.init();
    this.loadNextDay();
}

Game.prototype =
{
    init: function init()
    {
        this.sndPop = new Audio("assets/pop.wav");
        
        this.container = $(document.createElement("div")).attr("id", "container");
        this.profile = $(document.createElement("div")).attr("id", "profile");
        this.newsfeed = $(document.createElement("div")).attr("id", "newsfeed");
        
        this.profile.append($(document.createElement("div")).attr("id", "profile-pic")).append($(document.createElement("div")).attr("id", "profile-name").text(this.name)).append($(document.createElement("div")).attr("id", "profile-feed-header").text("Shares")).append($(document.createElement("div")).attr("id", "profile-shares-container"));
        
        this.newsfeed.append($(document.createElement("div")).attr("id", "news-header").text("Newsfeed")).append($(document.createElement("div")).attr("id", "news-container"));

        $(this.container).append(this.profile);
        $(this.container).append(this.newsfeed);
        this.profile.hide();
        
        $("body").append($(document.createElement("div")).attr("id", "connectr-header")
                        .append($(document.createElement("div")).attr("id", "connectr-header-container")
                            .append($(document.createElement("div")).attr("id", "connectr-logo").text("Connectr"))
                            .append($(document.createElement("div")).attr("id", "connectr-profile").click(this.showProfile.bind(this)))
                            .append($(document.createElement("div")).attr("id", "connectr-feed").click(this.showNewsfeed.bind(this)))));
        $("body").append(this.container);
    },
    
    createNewsItem: function createNewsItem(headline, msg, tags, agendas, picURL, returnOnly)
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
        
        switch(agendas)
        {
            case "dogs":
                item.attr("agenda", "dogs");
                break;
            case "cats":
                item.attr("agenda", "cats");
                break;
            case "kickers":
                item.attr("agenda", "kickers");
                break;
            case "ballers":
                item.attr("agenda", "ballers");
                break;
        }
        
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
        var item = $(e.currentTarget.parentElement.parentElement.parentElement);
        
        if ($(e.currentTarget).hasClass("news-response-like"))
        {
            item.remove();
            item.addClass("response-like");
            item.find(".news-response").remove();
            item.append($(document.createElement("div")).addClass("share-response"));
            this.profile.find("#profile-shares-container").append(item);
            
            switch(item.attr("tag"))
            {
                case "animals":
                    this.parentElement.interests.animals++;
                    break;
                case "sports":
                    this.parentElement.interests.sports++;
                    break;
                case "politics":
                    this.parentElement.interests.politics++;
                    break;
            }
            switch(item.attr("agenda"))
            {
                case "dogs":
                    this.parentElement.agendas.dogs++;
                    break;
                case "cats":
                    this.parentElement.agendas.cats++;
                    break;
                case "kickers":
                    this.parentElement.agendas.kickers++;
                    break;
                case "ballers":
                    this.parentElement.agendas.ballers++;
                    break;
            }
            
        }
        else if ($(e.currentTarget).hasClass("news-response-dislike"))
        {
            item.remove();
            item.addClass("response-dislike");
            item.find(".news-response").remove();
            item.append($(document.createElement("div")).addClass("share-response"));
            this.profile.find("#profile-shares-container").append(item);
            
            switch(item.attr("tag"))
            {
                case "animals":
                    this.parentElement.interests.animals++;
                    break;
                case "sports":
                    this.parentElement.interests.sports++;
                    break;
                case "politics":
                    this.parentElement.interests.politics++;
                    break;
            }
            switch(item.attr("agenda"))
            {
                case "dogs":
                    this.parentElement.agendas.dogs--;
                    break;
                case "cats":
                    this.parentElement.agendas.cats--;
                    break;
                case "kickers":
                    this.parentElement.agendas.kickers--;
                    break;
                case "ballers":
                    this.parentElement.agendas.ballers--;
                    break;
            }
        }
        else
        {
            item.remove();
            
            switch(item.attr("tag"))
            {
                case "animals":
                    this.parentElement.interests.animals--;
                    break;
                case "sports":
                    this.parentElement.interests.sports--;
                    break;
                case "politics":
                    this.parentElement.interests.politics--;
                    break;
            }
        }
        
        if ($("#news-container").children().length == 0)
        {
            $("#connectr-feed").removeClass("alert");
            this.showProfile();
            setTimeout(function() { this.loadNextDay(); }.bind(this), 2000);
        }
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
    },
    
    loadNextDay: function loadNextDay()
    {
        if (this.day > this.content.length)
            return;
        
        var newsitems = this.logic.getNewsItems();
        
        for (var i = 0; i < newsitems.length; i++)
            $("#news-container").append(newsitems[i]);
        
        if (this.day > 0)
            this.sndPop.play();
        
        $("#connectr-feed").addClass("alert");
        this.day++;
    }
};