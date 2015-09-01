'use strict';

/**
  * @namespace  crCookieLaw
  * @memberOf   crCookieLaw
  */
angular.module('crCookieLaw',[
  'ngCookies',
  'ngAnimate'
])

.directive('cookieLaw',['$cookies','$animate',
  function($cookies, $animate){
    return {
      restrict: 'E',
      replace: false,
      template: '<div ng-if="showCookieLaw()" class="crcl-banner {{position}}">{{text}} <button ng-click="killBanner()">{{closeBtnLabel}}</button> <a href="{{detailsLink}}" target="_blank" class="crcl-learn-more">Learn more &raquo;</a></div>',
      scope: {
        website: '@',
        detailsLink: '@',
        closeBtnLabel: '@',
        position: '@'
      },
      link: function(scope, element, attrs){

        if(!angular.isDefined(scope.position)){
          scope.position = 'top';
        }// end if

        scope.text = 'By using the '+scope.website+' website you agree to our use of cookies as described in our cookie policy.';

        scope.showCookieLaw = function(){
          return !$cookies.get('cremeCookieLaw');
        };

        scope.killBanner = function(){
          var expireDate = new Date();
          expireDate.setDate(expireDate.getDate() + 31);
          $cookies.put('cremeCookieLaw',true,{
            'expires': expireDate
          });
        }
      }
    }
  }
]);