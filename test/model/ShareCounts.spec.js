/**
 * AYLIEN News API
 * The AYLIEN News API is the most powerful way of sourcing, searching and syndicating analyzed and enriched news content. It is accessed by sending HTTP requests to our server, which returns information to your client. 
 *
 * The version of the OpenAPI document: 2.0
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
    instance = new AylienNewsApi.ShareCounts();
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

  describe('ShareCounts', function() {
    it('should create an instance of ShareCounts', function() {
      // uncomment below and update the code to test ShareCounts
      //var instane = new AylienNewsApi.ShareCounts();
      //expect(instance).to.be.a(AylienNewsApi.ShareCounts);
    });

    it('should have the property facebook (base name: "facebook")', function() {
      // uncomment below and update the code to test the property facebook
      //var instane = new AylienNewsApi.ShareCounts();
      //expect(instance).to.be();
    });

    it('should have the property googlePlus (base name: "google_plus")', function() {
      // uncomment below and update the code to test the property googlePlus
      //var instane = new AylienNewsApi.ShareCounts();
      //expect(instance).to.be();
    });

    it('should have the property linkedin (base name: "linkedin")', function() {
      // uncomment below and update the code to test the property linkedin
      //var instane = new AylienNewsApi.ShareCounts();
      //expect(instance).to.be();
    });

    it('should have the property reddit (base name: "reddit")', function() {
      // uncomment below and update the code to test the property reddit
      //var instane = new AylienNewsApi.ShareCounts();
      //expect(instance).to.be();
    });

  });

}));
