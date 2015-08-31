'use strict';
/**
  * @namespace  crCookieLaw
  * @memberOf   crCookieLaw
  */
angular.module('crCookieLaw',[
  'ngCookies'
])

.directive('cookieLaw',['$cookies',
  function($cookies){
    return {
      restrict: 'E',
      replace: false,
      template: '<div ng-if="showCookieLaw()" class="crcl-banner">{{text}} <button ng-click="killBanner()">{{closeBtnLabel}}</button> <a href="{{detailsLink}}" target="_blank" class="crcl-learn-more">Learn more &raquo;</a></div>',
      scope: {
        website: '@',
        detailsLink: '@',
        closeBtnLabel: '@'
      },
      link: function(scope, element, attrs){
        scope.text = 'By using the '+scope.website+' website you agree to our use of cookies as described in our cookie policy.';

        $cookies.remove('cremeCookieLaw');

        scope.showCookieLaw = function(){
          return !$cookies.get('cremeCookieLaw');
        };

        scope.killBanner = function(){
          $cookies.put('cremeCookieLaw',true);
        }
      }
    }
  }
]);
