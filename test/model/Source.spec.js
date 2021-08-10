/**
 * AYLIEN News API
 * The AYLIEN News API is the most powerful way of sourcing, searching and syndicating analyzed and enriched news content. It is accessed by sending HTTP requests to our server, which returns information to your client. 
 *
 * The version of the OpenAPI document: 5.0.1
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
    instance = new AylienNewsApi.Source();
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

  describe('Source', function() {
    it('should create an instance of Source', function() {
      // uncomment below and update the code to test Source
      //var instane = new AylienNewsApi.Source();
      //expect(instance).to.be.a(AylienNewsApi.Source);
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new AylienNewsApi.Source();
      //expect(instance).to.be();
    });

    it('should have the property domain (base name: "domain")', function() {
      // uncomment below and update the code to test the property domain
      //var instane = new AylienNewsApi.Source();
      //expect(instance).to.be();
    });

    it('should have the property homePageUrl (base name: "home_page_url")', function() {
      // uncomment below and update the code to test the property homePageUrl
      //var instane = new AylienNewsApi.Source();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new AylienNewsApi.Source();
      //expect(instance).to.be();
    });

    it('should have the property linksInCount (base name: "links_in_count")', function() {
      // uncomment below and update the code to test the property linksInCount
      //var instane = new AylienNewsApi.Source();
      //expect(instance).to.be();
    });

    it('should have the property locations (base name: "locations")', function() {
      // uncomment below and update the code to test the property locations
      //var instane = new AylienNewsApi.Source();
      //expect(instance).to.be();
    });

    it('should have the property logoUrl (base name: "logo_url")', function() {
      // uncomment below and update the code to test the property logoUrl
      //var instane = new AylienNewsApi.Source();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new AylienNewsApi.Source();
      //expect(instance).to.be();
    });

    it('should have the property rankings (base name: "rankings")', function() {
      // uncomment below and update the code to test the property rankings
      //var instane = new AylienNewsApi.Source();
      //expect(instance).to.be();
    });

    it('should have the property scopes (base name: "scopes")', function() {
      // uncomment below and update the code to test the property scopes
      //var instane = new AylienNewsApi.Source();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new AylienNewsApi.Source();
      //expect(instance).to.be();
    });

  });

}));
