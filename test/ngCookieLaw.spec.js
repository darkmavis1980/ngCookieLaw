/*jshint quotmark: false */
//"use strict";

describe("ngCookieLaw", function() {

  beforeEach(function(){
    module('ngCookies');
    module('ngCookieLaw');
  });

  describe("Directives", function(){

    var $compile;
    var $rootScope;
    var $cookies;
    var $templateCache;
    var element;

    beforeEach(inject(function(_$compile_, _$rootScope_, _$templateCache_, _$cookies_){
      $compile = _$compile_;
      $rootScope = _$rootScope_;
      $templateCache = _$templateCache_;
      $cookies = _$cookies_;
    }));

    describe('cookieLaw',function(){
      beforeEach(function(){
        // Compile a piece of HTML containing the directive
        element = $compile('<cookie-law website="Your Website" details-link="http://yourwebsite.com/cookiepolicy.html" close-btn-label="OK"></cookie-law>')($rootScope);
        // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
        $rootScope.$digest();
      });

      it('should append the html inside the element',function(){
        expect(element.html()).toContain('class="crcl-banner');
      });

      it('should define the scope functions', function(){
        var scope = element.isolateScope();
        expect(scope.showCookieLaw).toBeDefined();
        expect(scope.killBanner).toBeDefined();
      });

      it('showCookieLaw should return true if no cookies are defined',function(){
        var scope = element.isolateScope();
        var result = scope.showCookieLaw();
        $cookies.remove('cremeCookieLaw');
        expect(result).toBeTruthy();
      });

      it('showCookieLaw should return false if a cookie is defined',function(){
        var scope = element.isolateScope();
        scope.killBanner();
        var result = scope.showCookieLaw();
        expect(result).toBeFalsy();
      });
    });
  });
});
