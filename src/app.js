var log = function(msg) {
    console.log(msg);
}


angular.module('full-stack-challenge', [
    'ngRoute',
    'ngResource'
])
.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
    .when('/admin', {templateUrl: 'templates/admin.html', controller: 'AdminCtrl'})
    .when('/employees', {templateUrl: 'templates/employees.html'})
    .otherwise({redirectTo:'/', templateUrl: 'templates/home.html'})
}])
.controller('AdminCtrl', [ '$scope', '$window', function($scope, $window){



    $scope.chooseEmployee = function (e) {
        if(angular.isDefined(e)) {
            $scope.selected = angular.copy(e);
        } else {
            $scope.selected = new Employee('', '');
        }

        $scope.viewEmployee = true;
    }

    $scope.saveEmployee = function () {
        add($scope.selected);
        $scope.viewEmployee = false
        initAdmin();
    }

    $scope.deleteEmployee = function () {
        var answer = $window.confirm('Are you sure you want to delete this employee?');

        if(answer === true) {
            remove($scope.selected);
            $scope.viewEmployee = false;
            initAdmin()
        }

        // If not nothing to do
    }

    var initAdmin = function() {
        $scope.employees = findAll();
    }

    initAdmin();

}]);