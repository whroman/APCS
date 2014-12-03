angular
.module('table', [])
.directive('table', function(){
    var directive = {
        restrict: 'A',
        templateUrl: 'Resources/ng-views/table.html',
        scope: {
            table: '=',
        },
        link: function(scope, element, attribute) {
            scope.isArray = function (input) {
                if (input === undefined) return false;
                var bool = input.constructor === Array;
                return bool;
            };
        }
    };

    return directive;
});