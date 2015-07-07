var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function ($http) {
    var navigation = [{
        name: "Home",
        classis: "active",
        link:"#/home",
        subnav: []
    }, {
        name: "Team",
        active: "",
        link:"#/team",
        subnav: []
    }, {
        name: "Artwork(artist-wise)",
        classis: "",
        link:"#/artworkart",
        subnav: []
    }, {
        name: "Artwork(total-view)",
        classis: "",
        link:"#/portfolio",
        subnav: []
    }, {
        name: "Art Infrastructure Solution",
        classis: "",
        link:"#/contact",
        subnav: []
    }, {
        name: "Events",
        classis: "",
        link:"#/contact",
        subnav: []
    }, {
        name: "Media Coverage",
        classis: "",
        link:"#/contact",
        subnav: []
    }, {
        name: "Thought Leadership",
        classis: "",
        link:"#/contact",
        subnav: []
    }, {
        name: "Contact US",
        classis: "",
        link:"#/contact",
        subnav: []
    }];

    return {
        getnav: function() {
            return navigation;
        },
        makeactive: function(menuname) {
            for(var i=0;i<navigation.length;i++) {
                if(navigation[i].name==menuname)
                {
                    navigation[i].classis="active";
                }
                else {
                    navigation[i].classis="";
                }
            }
            return menuname;
        },
        getPosts: function(callback) {
            $http.get("http://wohlig.co.in/tumblr/?url=http://api.tumblr.com/v2/blog/yesaurathings.tumblr.com/posts").success(callback);
        },
        getPostArtists: function(callback) {
            $http.get("http://wohlig.co.in/tumblr/?url=http://api.tumblr.com/v2/blog/auraparticipants.tumblr.com/posts").success(callback);
        },
        getPostsArt: function(callback) {
            $http.get("http://wohlig.co.in/tumblr/?url=http://api.tumblr.com/v2/blog/greatwallofart.tumblr.com/posts").success(callback);
        },
        getPhotos: function(callback) {
            $http.get("http://wohlig.co.in/tumblr/?url=http://api.tumblr.com/v2/blog/auraeventphotos.tumblr.com/posts").success(callback);
        },
        
    }
});