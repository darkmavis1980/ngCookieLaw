/*jshint quotmark: false */
//"use strict";

describe("crCookieLaw", function() {

  beforeEach(function(){

    module('crCookieLaw');
  });

  describe("Directives", function(){

    var $compile;
    var $rootScope;
    var $templateCache;
    var element;

    beforeEach(inject(function(_$compile_, _$rootScope_, _$templateCache_){
      $compile = _$compile_;
      $rootScope = _$rootScope_;
      $templateCache = _$templateCache_;
    }));
  });
});
