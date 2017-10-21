/// <reference path="../../angular.js" />

angular.module("homeApp")
        .factory("homeData", function ($http,$log) {
            return {
                getHomeData: function () {
                    return $http({ method: "Get", url: "https://jsonplaceholder.typicode.com/posts" });
                }    
                    /*function (successcb) {
                    $http({ method: "Get", url: "https://jsonplaceholder.typicode.com/posts" })
                        .success(function (data) {
                            successcb(data);
                       })
                       .error(function () {
                      })
                }*/,  
                test :"TEST DATA"
                ,home: {
                    Name: "Amr Ghonem",
                    Age: 21,
                    Job: ".Net Developer",
                    Skills: [
                        {
                            Name: "Asp.Net MVC",
                            Years: 1,
                            Likes :0
                        },
                        {
                            Name: "C#",
                            Years: 3,
                            Likes : 0
                        }
                    ]
                }
            };
        });