angular.module('columnDiffApp')
    .directive('columnDiff', function () {
        return {
            restrict: 'E',
            templateUrl: 'excel_column_diff/columnDiff.html'
        }
    });