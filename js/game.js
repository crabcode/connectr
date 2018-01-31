var Game = function Game()
{
    this.name = "Name";
    this.day = 0;
    
    this.interests = {
        gaming: 1,
        sports: 0,
        politics: 0
    }
    
    this.worldview = 0;
    
    this.content = new createContent(this).content;
    this.logic = new Logic(this);
    
    this.init();
    
    this.register();
}

Game.prototype =
{
    init: function init()
    {
        this.sndPop = new Audio("assets/pop.wav");
        
        this.container = $(document.createElement("div")).attr("id", "container");
        this.profile = $(document.createElement("div")).attr("id", "profile");
        this.newsfeed = $(document.createElement("div")).attr("id", "newsfeed");
        this.registration = $(document.createElement("div")).attr("id", "registration");
        
        this.profile.append($(document.createElement("div")).attr("id", "profile-pic")).append($(document.createElement("div")).attr("id", "profile-name").text(this.name)).append($(document.createElement("div")).attr("id", "profile-feed-header").text("Shares")).append($(document.createElement("div")).attr("id", "profile-shares-container").addClass("empty"));
        
        this.newsfeed.append($(document.createElement("div")).attr("id", "news-header").text("Newsfeed")).append($(document.createElement("div")).attr("id", "news-container").addClass("empty"));
        
        this.registration
            .append($(document.createElement("div")).attr("id", "register-header").text("Willkommen auf Connectr!"))
            .append($(document.createElement("div")).attr("id", "register-form").html('\
                <div id="register-form-header">Melde dich jetzt für deinen 7-tägigen Probezugang an!</div>\
                <div id="register-form-name"><label>Name</label><br/><input id="register-name" type="text"></div>\
                <div id="register-form-name"><label>Geschlecht</label><br/><input id="register-gender-male" name="register-gender" type="radio" value="male"><label for="register-gender-other">Männlich</label>  <input id="register-gender-female" name="register-gender" type="radio" value="female"><label for="register-gender-female">Weiblich</label> <input id="register-gender-other" name="register-gender" type="radio" value="other"><label for="register-gender-other">Andere</label></div>\
                <div id="register-form-age"><label>Alter</label><br/><input id="register-age" type="date"></div>\
                <div id="register-form-pic"><label>Profilbild</label><br/><input id="register-pic" type="file"></div>\
            ').append($(document.createElement("input")).attr("type", "submit").attr("value", "Registrieren").click(this.register.bind(this))));
        
        this.profile.hide();
        this.newsfeed.hide();
        
        $(this.container).append(this.registration);
        
        $("body").append($(document.createElement("div")).attr("id", "connectr-header")
                        .append($(document.createElement("div")).attr("id", "connectr-header-container")
                            .append($(document.createElement("div")).attr("id", "connectr-logo"))
                            .append($(document.createElement("div")).attr("id", "connectr-profile").click(this.showProfile.bind(this)))
                            .append($(document.createElement("div")).attr("id", "connectr-feed").click(this.showNewsfeed.bind(this)))));
        $("body").append(this.container);
    },
    
    createNewsItem: function createNewsItem(headline, msg, tags, view, picURL, returnOnly)
    {
        var item = $(document.createElement("div")).addClass("news-item-wrapper")
                        .append($(document.createElement("div")).addClass("news-item")
                            .append($(document.createElement("div")).addClass("news-headline").text(headline))
                            .append($(document.createElement("div")).addClass("news-body").text(msg)));
        
        item.attr("tags", tags);
        item.attr("worldview", view);
        
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
            this.profile.find("#profile-shares-container").append(item).removeClass("empty");
            
            this.updateInterests(item.attr("tags").split(","), 1);
            this.updateWorldview(Number(item.attr("worldview")), 1);
            
        }
        else if ($(e.currentTarget).hasClass("news-response-dislike"))
        {
            item.remove();
            item.addClass("response-dislike");
            item.find(".news-response").remove();
            item.append($(document.createElement("div")).addClass("share-response"));
            this.profile.find("#profile-shares-container").append(item).removeClass("empty");
            
            this.updateInterests(item.attr("tags").split(","), 1);
            this.updateWorldview(Number(item.attr("worldview")), -1);
        }
        else
        {
            item.remove();
            this.updateInterests(item.attr("tags").split(","), -1);
        }
        
        if ($("#news-container").children().length == 0)
        {
            $("#news-container").addClass("empty");
            $("#connectr-feed").removeClass("alert");
            this.showProfile();
            setTimeout(function() { this.loadNextDay(); }.bind(this), 2000);
        }
    },
    
    updateInterests: function updateInterests(tags, mod)
    {
        var changelog = "";
        var tag;
        for(var i in tags)
        {
            tag = tags[i];
            if(this.interests.hasOwnProperty(tag))
                this.interests[tag] += mod;
            else
                this.interests[tag] = mod;
            changelog += "\n "+tag+": "+this.interests[tag]+" ("+mod+")";
        }
        console.log("Updated interests: " +changelog);
    },
    
    updateWorldview: function updateWorldview(value, mod)
    {
        var change = value * mod;
        this.worldview += change;
        console.log("Updated worldview: " + this.worldview + " ("+change+")");
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
        var newsitems = this.logic.getNewsItems();
        
        for (var i = 0; i < newsitems.length; i++)
            $("#news-container").append(newsitems[i]);
        
        $("#news-container").removeClass("empty");
        
        this.sndPop.play();
        
        $("#connectr-feed").addClass("alert");
        this.day++;
    },
    
    register: function register()
    {
        this.name = $(this.registration).find("#register-name").val();
        this.profile.find("#profile-name").text(this.name);
        
        this.registration.remove();
        $(this.container).append(this.profile);
        $(this.container).append(this.newsfeed);
        
        this.showProfile();
        setTimeout(function() { this.loadNextDay(); }.bind(this), 2000);
    }
};