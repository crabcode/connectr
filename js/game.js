var Game = function Game()
{
    this.name = "Name";
    this.day = 0;
    
    this.interests = {
        cats: 1
    }
    this.interests = {cats: 1,dogs: 3,mama: 2}
    
    this.worldview = 0;
    this.worldviewChange = [];
    //this.worldviewChange = [0,5,10,20];
    
    this.content = new createContent(this).content;
    this.logic = new Logic(this);
    this.graph = new Graph(this);
    
    this.init();
    //this.showTrialOver();
    //this.register();
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
        this.avatar = $(document.createElement("div")).attr("id", "avatar");
        this.byebye = $(document.createElement("div")).attr("id", "byebye");
        
        this.profile.append($(document.createElement("div")).attr("id", "profile-pic")).append($(document.createElement("div")).attr("id", "profile-name").text(this.name)).append($(document.createElement("div")).attr("id", "profile-feed-header").text("Shares")).append($(document.createElement("div")).attr("id", "profile-shares-container").addClass("empty"));
        
        this.newsfeed.append($(document.createElement("div")).attr("id", "news-header").text("Newsfeed")).append($(document.createElement("div")).attr("id", "news-container").addClass("empty"));
        
        this.registration
            .append($(document.createElement("div")).attr("id", "register-header").text("Willkommen auf Connectr!"))
            .append($(document.createElement("div")).attr("id", "register-tagline").text("Jetzt 7 Tage kostenlos ausprobieren!"))
            .append($(document.createElement("div")).attr("id", "register-form").html('\
                <div id="register-form-name"><br/><input id="register-name" placeholder="Name" type="text"></div>\
                <div id="register-form-name"><br/><select id="register-gender" name="register-gender"><option value="" disabled selected>Geschlecht</option><option value="male">Männlich</option><option value="female">Weiblich</option><option value="other">Andere</option></div>\
                <div id="register-form-age"><input id="register-age" type="date"></div>\
            ')
            .append($(document.createElement("input")).attr("type", "submit").attr("value", "Registrieren*").click(this.register.bind(this)))
            .append($(document.createElement("div")).attr("id", "register-disclaimer").text("*Mit der Registrierung erklärst du dich mit unseren AGBs einverstanden.")));
        
        this.avatar
            .append($(document.createElement("div")).attr("id", "register-header").text("Profilbild"))
            .append($(document.createElement("div")).attr("id", "register-tagline").text("Bevor es los geht, lade ein Profilbild hoch."))
            .append($(document.createElement("div")).attr("id", "register-form").html('\
                <div id="register-form-defaultpic"></div>\
                <div id="register-form-pic"><input id="register-pic" type="file"></div>\
            ')
            .append($(document.createElement("input")).attr("id", "start-button").attr("type", "submit").attr("value", "Los geht's!").click(this.start.bind(this))));
        
        this.byebye
            .append($(document.createElement("div")).attr("id", "byebye-header").text("Auf Wiedersehen!"))
            .append($(document.createElement("div")).attr("id", "byebye-msg").text("Deine Probezeit ist abgelaufen. Vielen Dank für deine Teilnahme!"))
            .append($(document.createElement("div")).attr("id", "byebye-link")
                    .append($(document.createElement("a")).attr("href", "#").text("Hier").click(this.showGraph.bind(this)))
                    .append(" kommst du zur Auswertung deines Sharing-Verhaltens."));
        
        this.profile.hide();
        this.newsfeed.hide();
        this.avatar.hide();
        this.byebye.hide();
        
        $(this.container).append(this.registration);
        $(this.container).append(this.byebye);
        
        $("body").append($(document.createElement("div")).attr("id", "connectr-header")
                        .append($(document.createElement("div")).attr("id", "connectr-header-container")
                            .append($(document.createElement("div")).attr("id", "connectr-logo"))
                            .append($(document.createElement("div")).attr("id", "connectr-profile").click(this.showProfile.bind(this)))
                            .append($(document.createElement("div")).attr("id", "connectr-feed").click(this.showNewsfeed.bind(this)))
                            .append($(document.createElement("div")).attr("id", "connectr-notification").text("Wir haben neue Inhalte für dich!").hide().click(this.showNewsfeed.bind(this)))));
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
        {
            item.find(".news-item").prepend($(document.createElement("div")).addClass("news-pic").css("background-image", "url('" + picURL + "')"));
            
            if (headline == "")
                item.attr("piconly", "true");
        }
        
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
        $("#connectr-notification").stop().hide();
        var item = $(e.currentTarget.parentElement.parentElement.parentElement);
        
        if ($(e.currentTarget).hasClass("news-response-like"))
        {
            item.remove();
            item.addClass("response-like");
            item.find(".news-response").remove();
            item.append($(document.createElement("div")).addClass("share-response"));
            this.profile.find("#profile-shares-container").prepend(item).removeClass("empty");
            
            this.updateInterests(item.attr("tags").split(","), 1);
            this.updateWorldview(Number(item.attr("worldview")), 1);
            
        }
        else if ($(e.currentTarget).hasClass("news-response-dislike"))
        {
            item.remove();
            item.addClass("response-dislike");
            item.find(".news-response").remove();
            item.append($(document.createElement("div")).addClass("share-response"));
            this.profile.find("#profile-shares-container").prepend(item).removeClass("empty");
            
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
            $("title").text("Connectr");
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
        var change = 0;
        
        if(mod > 0)
            change = value;
        else
            change = value * mod / 2;
        
        this.worldview += change;
        
        console.log("Updated worldview: " + this.worldview + " ("+change+")");
    },
    
    showNewsfeed: function showNewsfeed()
    {
        $("#connectr-notification").stop().hide();
        this.profile.hide();
        this.newsfeed.show();
    },
    
    showProfile: function showProfile()
    {
        $("#connectr-notification").stop().hide();
        this.newsfeed.hide();
        this.profile.show();
    },
    
    loadNextDay: function loadNextDay()
    {
        if (this.day < 8)
        {
            var newsitems = this.logic.getNewsItems();

            console.log(newsitems);

            for (var i = 0; i < newsitems.length; i++)
                $("#news-container").append(newsitems[i]);

            $("#news-container").removeClass("empty");

            this.sndPop.play();

            $("#connectr-feed").addClass("alert");
            $("title").text("(!) Connectr");
            $("#connectr-notification").css("opacity", "0").show().delay(500).animate({ opacity: 1}, 500);
            this.day++;
            
            this.worldviewChange.push(this.worldview);
        }
        else
            this.showTrialOver();
    },
    
    register: function register()
    {
        this.name = $(this.registration).find("#register-name").val();
        this.profile.find("#profile-name").text(this.name);
        
        // Add interests based on gender
        var gender = $("#register-gender").val();
        switch(gender)
        {
            case "male":
                this.interests.sports = 1;
                break;
            case "female":
                this.interests.gossip = 1;
                break;
            default:
                this.interests.politics = 1;
        }
        
        // Add interests based on age
        var dob = new Date($(this.registration).find("#register-age").val());
        var today = new Date();
        var age = Math.floor((today-dob) / (365.25 * 24 * 60 * 60 * 1000));
        if(age > 35)
        {
            this.interests.finances = 1;
        }
        else
        {
            this.interests.gaming = 1;
        }
        
        this.registration.remove();
        $(this.container).append(this.avatar);
        this.avatar.show();
    },
    
    start: function start()
    {
        this.avatar.remove();
        $(this.container).append(this.profile);
        $(this.container).append(this.newsfeed);
        
        this.showProfile();
        setTimeout(function() { this.loadNextDay(); }.bind(this), 2000);
    },
    
    showGraph: function showGraph()
    {
        this.byebye.hide();
        
        var graph = this.graph.drawLineGraph(this.worldviewChange);
        var graph2 = this.graph.drawBarGraph(this.interests);
        
        this.graphPage = $(document.createElement("div")).attr("id", "graph")
            .append($(document.createElement("div")).attr("id", "graph-header").text("Dein Sharing-Verhalten"))
            .append($(document.createElement("div")).attr("id", "graph-subheader").text("Politische Ausrichtung"))
            .append(graph)
            .append($(document.createElement("div")).attr("id", "graph-subheader").text("Interessen"))
            .append(graph2);
        
        $(this.container).append(this.graphPage);
    },
    
    showTrialOver: function showTrialOver()
    {
        this.registration.hide();
        this.newsfeed.hide();
        this.profile.hide();
        this.byebye.show();
    }
};