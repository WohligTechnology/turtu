var phonecatControllers = angular.module('phonecatControllers', ['templateservicemod', 'navigationservice']);

phonecatControllers.controller('home', ['$scope', 'TemplateService', 'NavigationService',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Home");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.posts = [];
        $scope.Artists = [];
        $scope.Art = [];
        $scope.Photos = [];


        NavigationService.getPhotos(function(data, status) {
            $scope.Photos = splitarray(data.response.posts,3);
            console.log($scope.Photos);
        });
        
        NavigationService.getPosts(function(data, status) {
            $scope.posts = data.response;
            $scope.posts = splitarray($scope.posts.posts,3);
            console.log($scope.posts);
        });
        
        NavigationService.getPostArtists(function(data, status) {
            $scope.Artists = data.response;
            console.log($scope.Artists);
        });
        
        NavigationService.getPostsArt(function(data, status) {
            $scope.Art = data.response;
            console.log($scope.Art);
        });
    }
]);
phonecatControllers.controller('about', ['$scope', 'TemplateService', 'NavigationService',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("About");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    }
]);
phonecatControllers.controller('services', ['$scope', 'TemplateService', 'NavigationService',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Services");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    }
]);
phonecatControllers.controller('portfolio', ['$scope', 'TemplateService', 'NavigationService',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Portfolio");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    }
]);
phonecatControllers.controller('contact', ['$scope', 'TemplateService', 'NavigationService',
    function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Contact");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    }
]);


phonecatControllers.controller('headerctrl', ['$scope', 'TemplateService',
    function($scope, TemplateService) {
        $scope.template = TemplateService;
    }
]);