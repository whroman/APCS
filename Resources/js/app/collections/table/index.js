angular
.module('CollectionTable', [
    // Dependencies

])
.factory("CollectionTable", function($http, $filter, $location) {
    function Table () {
    // Used for filtering
        var filter = {
            val : ''
        };

    // `all` is filled by ajax request
        var all = [];

    // `queried` is filled when `all` is filtered
        var queried = [];

    // Is set to false once data is loaded. While `true`, a loading gif shows in place of table
        var data = {
            isLoading : true,
        };

    // List of keys that are properties for each object in loaded json
        var keys = [];

        var setKeys = function(arr) {
            var i = 0;
            var arrLen = arr.length;
            var key;
            for (i; i < arrLen; i++) {
                for (key in arr[i]) {
                    if (this.keys.indexOf(key) === -1) {
                        this.keys.push(key);
                    }
                }
            }
        };

        var order = {
            value   :  null,
            latestInput : null,
            reverse : false,
            set     : function(key) {
                this.latestInput = key;
                if (this.value === key) {
                    this.reverse = !this.reverse;
                } else {
                    this.reverse = false;
                    this.value = key;
                }
                return this;
            }
        };

        var fetch = function(path) {
            var This = this;
            $http
                .get(path)
                .error(function(error) {
                    throw ("Could not load JSON: " + error);
                })
                .success(function(data) {
                    This.all = data;
                    This.setKeys(data);
                    This.order.value = This.keys[0];
                    This.data.isLoading = false;
                });
            return this;
        };

        var startEpochTimeMS = 1407740401000;
        var currentWeek = function(startTimeMS) {
            var currentTimeMS = (new Date()).getTime();
            var oneWeekMS = 604800000;
            var week = Math.ceil((currentTimeMS - startTimeMS) / oneWeekMS);
            return week;
        }(startEpochTimeMS);

        return {
            currentWeek: currentWeek,
            data : data,
            keys : keys,
            setKeys: setKeys,
            all : all,
            filter : filter,
            order : order,
            fetch : fetch,
        };
    }

    return Table;
});