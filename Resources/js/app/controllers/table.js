angular
.module('ControllerTable', [
    // Dependencies
    'CollectionTable'
])
.controller('ControllerTable', function($scope, CollectionTable) {
    $scope.table = CollectionTable();

    var Default = {
        orderBy     : 'Week',
        schoolJSON  : './JSON/schedule.json'
    };

    $scope.table
        .fetch(Default.schoolJSON)
        .order
        .set(Default.orderBy);

    $scope.typeOf = function(input) {
        return typeof input;
    };

});