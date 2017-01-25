//Ensure that every route is accessible only when the user is looged in 

define(['./newapp'], function(newapp) {
    'use strict';
    return newapp.config(function($stateProvider) {
        $stateProvider.state('mock_tests',{
            url: '/mock_tests',
            templateUrl: 'templates/mock_test_list.html',
            controller:'MockTestListCtrl'
        })
        .state('mock_test',{
            url: '/mock_test?id&pushed_id&attempted&exam&attempted_id&test_name',
            templateUrl: 'templates/mock_test.html',
            controller: 'MockTestCtrl'
        })
        .state('analysis',{
            url: '/analysis',
            templateUrl: 'templates/cumulative_analysis.html',
            controller: 'CumulativeAnalysisCtrl'
        })     

        .state('main',{
            url: '/main',
            templateUrl: 'main.html',
            controller: 'mainCtrl'
        })

        .state('student_signin',{
            url: '/student_signin',
            templateUrl: 'templates/student_signin.html',
            controller: 'StudentSignInCtrl',

            data: {
           
                }
        })

        .state('student_signup',{
            url: '/student_signup',
            templateUrl: 'templates/student_signup.html',
            controller: 'StudentSignUpCtrl',
            data: {
            
                }
        })
        .state('app',{
            url: '/app',
            templateUrl: 'templates/app.html',
            controller: 'AppCtrl'
        })


    })
});