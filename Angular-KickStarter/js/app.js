////////////////////////////////////////////
///////    Initilization    ////////////////
////////////////////////////////////////////

//Depency Injection
; (function () {


    /**
     * Definition of the main app module and its dependencies
     */
    angular
      .module('audyou', [
        'ui.router'
      ])
      .config(config);

    function config($stateProvider, $urlRouterProvider, $httpProvider) {

        //by default route to dashboard state
        $urlRouterProvider.otherwise("/");

        //Application Views
        $stateProvider
        //index
             .state('index', {
                 url: "/",            
                 templateUrl: "views/main/index.html",
                 controller: "mainCtrl",

             })

        //dummy
            .state('index.dummy', {
                data: { stateName: "Dummy", icon: "stamp" },
                url: "dummy",

                resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load({
                            name: 'kaust',

                        });
                    }]
                },

            })

    }


})();