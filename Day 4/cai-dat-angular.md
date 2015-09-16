### Một số thư viện của Angular

> [Thư viện Angular JS - **Main**](https://cdnjs.com/libraries/angular.js)

> [Thư viện Angular UI Bootstrap - **UI**](https://cdnjs.com/libraries/angular-ui-bootstrap)

> [Thư viện Router UI - **Router**](https://cdnjs.com/libraries/angular-ui-bootstrap)

> [UI notification - **Notification**](https://github.com/alexcrack/angular-ui-notification)

### Cách tải về các thư viện

```
bower install angular angular-resource angular-animate angular-ui-router angular-bootstrap angular-ui-notification --save
```

### Cấu trúc HTML đơn giản để nạp các thư viện

index.html
```
<!DOCTYPE html>
<html ng-app="App" ng-controller="AppCtrl">
<head>
    <meta charset="UTF-8">
	<title>TITLE</title>
	<!-- CSS -->
	<link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css">
</head>
<body>
	<div ui-view></div>
	
	<!-- script JS -->
	<script src="bower_components/angular/angular/angular.min.js"></script>
	<script src="bower_components/angular-resource/angular-resource.min.js"></script>
	<script src="bower_components/angular-animate/angular-animate.min.js"></script>
	<script src="bower_components/angular-bootstrap/ui-bootstrap.min.js"></script>
	<script src="bower_components/ui-router/release/angular-ui-router.min.js"></script>
</body>
</html>
```

app.js
```
var app = angular.module('App', [
    'ui.router',
    'ui.bootstrap',
    'ngAnimate',
    'ngMessages',
    'ui-notification'
]);

app.config(function($stateProvider, $urlRouterProvider, $httpProvider, $httpProvider, $locationProvider, NotificationProvider) {

    $urlRouterProvider.otherwise(function($injector) {
        var $state = $injector.get("$state");
        $state.go("home");
    }); // Mọi đường dẫn không hợp lệ đều được chuyển đến state home

    NotificationProvider.setOptions({
        delay: 5000,
        startTop: 20,
        startRight: 10,
        verticalSpacing: 20,
        horizontalSpacing: 20,
        positionX: 'right',
        positionY: 'top'
    });


    // ROUTER CLIENT //
    $stateProvider
        .state('home', { // Định ngĩa 1 state home
            url: '/', // khai báo Url hiển thị
            templateUrl: 'components/home/home.html', // đường dẫn view
            controller: 'ClientHomeCtrl',
            controllerAs: 'ClientHome'           
        })


});

app.controller('AppCtrl', AppCtrl);

function AppCtrl($scope) {
    // body...
}

}

```
