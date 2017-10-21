/// <reference path="../../angular.js" />
angular.module("homeApp")
    .filter('duration', function () {
        return function (duration) {
            switch (duration) {
                case 1:
                    return "Half Hour";
                case 2:
                    return "Hour";
            }
        }
    });