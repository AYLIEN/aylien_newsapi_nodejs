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
    instance = new AylienNewsApi.NestedEntity();
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

  describe('NestedEntity', function() {
    it('should create an instance of NestedEntity', function() {
      // uncomment below and update the code to test NestedEntity
      //var instane = new AylienNewsApi.NestedEntity();
      //expect(instance).to.be.a(AylienNewsApi.NestedEntity);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new AylienNewsApi.NestedEntity();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new AylienNewsApi.NestedEntity();
      //expect(instance).to.be();
    });

    it('should have the property surfaceFormsText (base name: "surface_forms.text")', function() {
      // uncomment below and update the code to test the property surfaceFormsText
      //var instane = new AylienNewsApi.NestedEntity();
      //expect(instance).to.be();
    });

    it('should have the property sentiment (base name: "sentiment")', function() {
      // uncomment below and update the code to test the property sentiment
      //var instane = new AylienNewsApi.NestedEntity();
      //expect(instance).to.be();
    });

    it('should have the property element (base name: "element")', function() {
      // uncomment below and update the code to test the property element
      //var instane = new AylienNewsApi.NestedEntity();
      //expect(instance).to.be();
    });

    it('should have the property linksWikipedia (base name: "links.wikipedia")', function() {
      // uncomment below and update the code to test the property linksWikipedia
      //var instane = new AylienNewsApi.NestedEntity();
      //expect(instance).to.be();
    });

    it('should have the property linksWikidata (base name: "links.wikidata")', function() {
      // uncomment below and update the code to test the property linksWikidata
      //var instane = new AylienNewsApi.NestedEntity();
      //expect(instance).to.be();
    });

    it('should have the property stockTicker (base name: "stock_ticker")', function() {
      // uncomment below and update the code to test the property stockTicker
      //var instane = new AylienNewsApi.NestedEntity();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new AylienNewsApi.NestedEntity();
      //expect(instance).to.be();
    });

  });

}));
