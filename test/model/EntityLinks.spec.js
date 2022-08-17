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
    instance = new AylienNewsApi.EntityLinks();
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

  describe('EntityLinks', function() {
    it('should create an instance of EntityLinks', function() {
      // uncomment below and update the code to test EntityLinks
      //var instane = new AylienNewsApi.EntityLinks();
      //expect(instance).to.be.a(AylienNewsApi.EntityLinks);
    });

    it('should have the property dbpedia (base name: "dbpedia")', function() {
      // uncomment below and update the code to test the property dbpedia
      //var instane = new AylienNewsApi.EntityLinks();
      //expect(instance).to.be();
    });

    it('should have the property wikidata (base name: "wikidata")', function() {
      // uncomment below and update the code to test the property wikidata
      //var instane = new AylienNewsApi.EntityLinks();
      //expect(instance).to.be();
    });

    it('should have the property wikipedia (base name: "wikipedia")', function() {
      // uncomment below and update the code to test the property wikipedia
      //var instane = new AylienNewsApi.EntityLinks();
      //expect(instance).to.be();
    });

  });

}));
