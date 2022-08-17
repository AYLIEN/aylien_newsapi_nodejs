/**
 * AYLIEN News API
 * The AYLIEN News API is the most powerful way of sourcing, searching and syndicating analyzed and enriched news content. It is accessed by sending HTTP requests to our server, which returns information to your client. 
 *
 * The version of the OpenAPI document: 5.1.0
 * Contact: support@aylien.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AylienNewsApi);
  }
}(this, function(expect, AylienNewsApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AylienNewsApi.Stories();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Stories', function() {
    it('should create an instance of Stories', function() {
      // uncomment below and update the code to test Stories
      //var instane = new AylienNewsApi.Stories();
      //expect(instance).to.be.a(AylienNewsApi.Stories);
    });

    it('should have the property nextPageCursor (base name: "next_page_cursor")', function() {
      // uncomment below and update the code to test the property nextPageCursor
      //var instane = new AylienNewsApi.Stories();
      //expect(instance).to.be();
    });

    it('should have the property publishedAtEnd (base name: "published_at.end")', function() {
      // uncomment below and update the code to test the property publishedAtEnd
      //var instane = new AylienNewsApi.Stories();
      //expect(instance).to.be();
    });

    it('should have the property publishedAtStart (base name: "published_at.start")', function() {
      // uncomment below and update the code to test the property publishedAtStart
      //var instane = new AylienNewsApi.Stories();
      //expect(instance).to.be();
    });

    it('should have the property stories (base name: "stories")', function() {
      // uncomment below and update the code to test the property stories
      //var instane = new AylienNewsApi.Stories();
      //expect(instance).to.be();
    });

    it('should have the property warnings (base name: "warnings")', function() {
      // uncomment below and update the code to test the property warnings
      //var instane = new AylienNewsApi.Stories();
      //expect(instance).to.be();
    });

  });

}));
