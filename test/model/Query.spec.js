/**
 * AYLIEN News API
 * The AYLIEN News API is the most powerful way of sourcing, searching and syndicating analyzed and enriched news content. It is accessed by sending HTTP requests to our server, which returns information to your client. 
 *
 * The version of the OpenAPI document: 5.1.1
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
    instance = new AylienNewsApi.Query();
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

  describe('Query', function() {
    it('should create an instance of Query', function() {
      // uncomment below and update the code to test Query
      //var instane = new AylienNewsApi.Query();
      //expect(instance).to.be.a(AylienNewsApi.Query);
    });

    it('should have the property eq (base name: "$eq")', function() {
      // uncomment below and update the code to test the property eq
      //var instane = new AylienNewsApi.Query();
      //expect(instance).to.be();
    });

    it('should have the property text (base name: "$text")', function() {
      // uncomment below and update the code to test the property text
      //var instane = new AylienNewsApi.Query();
      //expect(instance).to.be();
    });

    it('should have the property _in (base name: "$in")', function() {
      // uncomment below and update the code to test the property _in
      //var instane = new AylienNewsApi.Query();
      //expect(instance).to.be();
    });

    it('should have the property gt (base name: "$gt")', function() {
      // uncomment below and update the code to test the property gt
      //var instane = new AylienNewsApi.Query();
      //expect(instance).to.be();
    });

    it('should have the property gte (base name: "$gte")', function() {
      // uncomment below and update the code to test the property gte
      //var instane = new AylienNewsApi.Query();
      //expect(instance).to.be();
    });

    it('should have the property lt (base name: "$lt")', function() {
      // uncomment below and update the code to test the property lt
      //var instane = new AylienNewsApi.Query();
      //expect(instance).to.be();
    });

    it('should have the property lte (base name: "$lte")', function() {
      // uncomment below and update the code to test the property lte
      //var instane = new AylienNewsApi.Query();
      //expect(instance).to.be();
    });

    it('should have the property boost (base name: "$boost")', function() {
      // uncomment below and update the code to test the property boost
      //var instane = new AylienNewsApi.Query();
      //expect(instance).to.be();
    });

  });

}));