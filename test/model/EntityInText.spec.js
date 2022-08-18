/**
 * AYLIEN News API
 * The AYLIEN News API is the most powerful way of sourcing, searching and syndicating analyzed and enriched news content. It is accessed by sending HTTP requests to our server, which returns information to your client. 
 *
 * The version of the OpenAPI document: 5.2.3
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
    instance = new AylienNewsApi.EntityInText();
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

  describe('EntityInText', function() {
    it('should create an instance of EntityInText', function() {
      // uncomment below and update the code to test EntityInText
      //var instane = new AylienNewsApi.EntityInText();
      //expect(instance).to.be.a(AylienNewsApi.EntityInText);
    });

    it('should have the property sentiment (base name: "sentiment")', function() {
      // uncomment below and update the code to test the property sentiment
      //var instane = new AylienNewsApi.EntityInText();
      //expect(instance).to.be();
    });

    it('should have the property surfaceForms (base name: "surface_forms")', function() {
      // uncomment below and update the code to test the property surfaceForms
      //var instane = new AylienNewsApi.EntityInText();
      //expect(instance).to.be();
    });

  });

}));
