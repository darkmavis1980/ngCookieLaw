'use strict';
/**
  * @namespace  crCookieLaw
  * @memberOf   crCookieLaw
  */
angular.module('crCookieLaw',[
  'crTranslations',
  'ngCookies'
])

.directive('cookieLaw',['$cookies',
  function($cookies){
    return {
      restrict: 'E',
      replace: false,
      template: '<div ng-if="showCookieLaw()" class="crcl-banner">{{text}} <button ng-click="killBanner()">OK</button> <a href="{{detailsLink}}" class="crcl-learn-more">Learn more</a></div>',
      scope: {
        website: '@',
        detailsLink: '@'
      },
      link: function(scope, element, attrs){
        scope.text = 'By using the '+scope.website+' website you agree to our use of cookies as described in our cookie policy.';

        scope.showCookieLaw = function(){
          return !$cookies.get('cremeCookieLaw2');
        };

        scope.killBanner = function(){
          $cookies.put('cremeCookieLaw2',true);
        }
      }
    }
  }
]);
