var app = angular.module('App', [
    'ui.router',
    'ui.bootstrap',
    'ngAnimate',
    'ngMessages',
    'angular-ladda',
    'lbServices',
    'ui-notification'
]);

app.config(function($stateProvider, $urlRouterProvider, $httpProvider, $httpProvider, $locationProvider, laddaProvider, NotificationProvider, LoopBackResourceProvider) {
    LoopBackResourceProvider.setAuthHeader('X-Access-Token');
    LoopBackResourceProvider.setUrlBase('http://localhost:3000/api');

    //KHAI BÁO THÔNG TIN LADDA
    laddaProvider.setOption({
        style: 'expand-left'
    });
    // KHAI BÁO THÔNG TIN NOTIFICATION
    NotificationProvider.setOptions({
        delay: 5000,
        startTop: 20,
        startRight: 10,
        verticalSpacing: 20,
        horizontalSpacing: 20,
        positionX: 'right',
        positionY: 'top'
    });

    // $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push(function($q, $location, LoopBackAuth) {
        return {
            responseError: function(rejection) {
                if (rejection.status == 401) {
                    LoopBackAuth.clearUser();
                    LoopBackAuth.clearStorage();
                    $location.path('login');
                }
                return $q.reject(rejection);
            }
        };
    });
    $urlRouterProvider.otherwise(function($injector) {
        var $state = $injector.get("$state");
        $state.go("home");
    }); // Mọi đường dẫn không hợp lệ đều được chuyển đến state home

    


    // ROUTER CLIENT //
    $stateProvider
        .state('home', { // Định ngĩa 1 state home
            url: '/', // khai báo Url hiển thị
            templateUrl: 'client/components/home/home.html', // đường dẫn view
            controller: 'ClientHomeCtrl',
            controllerAs: 'vm',
            data: {
                requireLogin: false
            }
        })
        .state('admin', { // Định ngĩa 1 state admin panel
            url: '/admin', // khai báo Url hiển thị
            templateUrl: 'client/components/admin/admin.html', // đường dẫn view
            controller: 'ClientAdminCtrl',
            controllerAs: 'vm',
            data: {
                requireLogin: true
            }
        })
        .state('login', { // Định ngĩa 1 state login
            url: '/login', // khai báo Url hiển thị
            templateUrl: 'client/components/login/login.html', // đường dẫn view
            controller: 'ClientLoginCtrl',
            controllerAs: 'vm',
            data: {
                requireLogin: false
            }
        })
       


});



app.run(function($rootScope, $state, $http, LoopBackAuth) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, error) {
        var requireLogin = toState.data.requireLogin;
        if (requireLogin && !LoopBackAuth.accessTokenId) {
            event.preventDefault();
            $state.go('login');
        };

    });

});

app.controller('AppCtrl', AppCtrl);

function AppCtrl($scope, $rootScope, $state, LoopBackAuth, Notification) {}
