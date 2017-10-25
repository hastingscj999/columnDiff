angular.module('columnDiffApp')
    .service('ColumnDiffService', function($http) {
        this.readCSV = function(path, callback) {
            return $http.get(path)
                .then(function (response) {
                    var res = response.data;
                    var allTextLines = res.split(/\r\n|\n/);
                    var headers = allTextLines[0].split(',');
                    var lines = [];
                    for ( var i = 0; i < allTextLines.length; i++) {
                        var data = allTextLines[i].split(',');
                        if (data.length == headers.length) {
                            var tarr = [];
                            for ( var j = 0; j < headers.length; j++) {
                                tarr.push(data[j]);
                            }
                            lines.push(tarr);
                        }
                    }
                    callback(lines);
                })
        };
    });