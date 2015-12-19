/**
 * Created by Administrator on 05/13/2015.
 */
$(function(){
    "use strict";
    var sample = {};
    sample.init = function() {

    };
    sample.init();
});

var app = angular.module('myApp', []);
app.controller('phoneListCtrl', function($scope) {
    $scope.phones = [
        {"name": "Nexus","snippet": "Fast just got faster with Nexus S."},
        {"name": "Motorola","snippet": "The Next, Next Generation tablet."},
        {"name": "MOTOROLA","snippet": "The Next, Next Generation tablet."}
    ];
});