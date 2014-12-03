angular
.module('ControllerTable', [
    // Dependencies
    'CollectionTable',
    'table'
])
.controller('ControllerTable', function($scope, CollectionTable) {
    $scope.showTable = 1;

    $scope.table1 = $.extend(true, {}, CollectionTable());
    $scope.table2 = $.extend(true, {}, CollectionTable());

    var semester1 = {
        orderBy     : 'Week',
        schoolJSON  : './JSON/semester1.json'
    };

    var semester2 = {
        orderBy     : 'Week',
        schoolJSON  : './JSON/semester2.json'
    };

    $scope.table1.fetch(
        semester1.schoolJSON
    ).order.set(
        semester1.orderBy
    );

    $scope.table2.fetch(
        semester2.schoolJSON
    ).order.set(
        semester2.orderBy
    );

});