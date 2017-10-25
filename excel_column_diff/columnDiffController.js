angular.module('columnDiffApp')
    .controller('columnDiffCtrl', function($scope, ColumnDiffService) {

        $scope.results = [];
        $scope.items = [];

        $scope.getFileNameAndDiff = function(files){
            if (files != null) {
                $scope.filename = '/excel_column_diff/' + files[0].name;
                ColumnDiffService.readCSV($scope.filename, function(res){
                    $scope.items = res;
                    var arr1 = [];
                    var arr2Base = [];
                    var arr2 = [];
                    var final = [];
                    for (var i in $scope.items){
                        arr1.push($scope.items[i][0]);
                        arr2Base.push($scope.items[i][1]);
                    }
                    for (var j in arr2Base){
                        var item = arr2Base[j].substr(0,4);
                        arr2.push(item);
                    }

                    for (var k in arr1){
                        var comparator = arr1[k].substr(arr1[k].length-4);
                        if(arr2.indexOf(comparator) < 0){
                            final.push(arr1[k]);
                        }
                    }
                    $scope.results = final;
                });
                $scope.$apply();
            }
        }
    });


