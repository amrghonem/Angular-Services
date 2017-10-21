/// <reference path="../angular.js" />
(function () {
    angular.module("homeApp")
            .controller("homeCtrl", homeControlloler);

    function homeControlloler($scope, homeData , $anchorScroll ,$compile ,$parse , $locale,$timeout,$filter,$cookieStore) {


        $scope.homeData = homeData.home;

        $scope.LikeSkill = function (skill) {
            skill.Likes += 1;
        };

        $scope.DislikeSkill = function (skill) {
            if (skill.Likes > 0) {
                skill.Likes -= 1;
            }
        };
        
        //Api ==> way 1
        //homeData.getHomeData(function (posts) {
        //    $scope.Posts = posts;
        //});

        //Api ==> way 2
        homeData.getHomeData().
            success(function (data,status) {
                //alert(status);
                $scope.Posts = data;
            })

        $scope.test = homeData.test;

        //Scroll 
        $scope.scrollToSession = function () {
            $anchorScroll(); 
        }

        //CACHE . 
        //$scope.addToCache = function (key, value) {
        //    myCache.put(key, value);
        //};
        //$scope.readFromCache = function (key) {
        //    return myCache.get(key);
        //};
        //$scope.getCacheStats = function () {
        //    return myCache.info() ;
        //}

        //Markup ==> $compile
        $scope.Append = function (markup) {
            return $compile(markup)($scope).appendTo(angular.element("#appendHere"))
        };

        // $parse

        var getter = $parse("event.name");

        var context1 = { event: { name: 'amr', age: 21 } };
        var context2 = { event: { name: 'abdallah', age: 21 } };

        var setter = getter.assign;
        setter(context2, 'ahmed');

        console.log(context2.event.name +""+context2.event.age);

        console.log(getter(context1));
        console.log(getter(context2));

        //$local 
        $scope.myDate = Date.now()
        $scope.myFormat = $locale.DATETIME_FORMATS.longDate;

        // Time Out
        var promise = $timeout(function () {
            $scope.timeoutName = "Amr Ghonem";
        }, 3000);

        $scope.CancelTimeout = function () {
            $timeout.cancel(promise);
        }

        //Filter 

        $scope.filterData = {};

        var duration = $filter('duration');

        $scope.filterData.duration1 =duration(1);
        $scope.filterData.duration2 = duration(2);

        //Cookie

        $scope.cookieEvent = { id: 1, name: "My Event" };
        $scope.saveEventCookie = function (event) {
            $cookieStore.put('event', $scope.cookieEvent);
        };
        $scope.getEventFromCookie = function () {
            console.log($cookieStore.get('event'));
        };
        $scope.removeEventCookies = function () {
            $cookieStore.remove('event');
        };
    }

})()