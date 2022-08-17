/**
 * AYLIEN News API
 * The AYLIEN News API is the most powerful way of sourcing, searching and syndicating analyzed and enriched news content. It is accessed by sending HTTP requests to our server, which returns information to your client. 
 *
 * The version of the OpenAPI document: 4.7.3
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
    instance = new AylienNewsApi.StoryLinks();
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

  describe('StoryLinks', function() {
    it('should create an instance of StoryLinks', function() {
      // uncomment below and update the code to test StoryLinks
      //var instane = new AylienNewsApi.StoryLinks();
      //expect(instance).to.be.a(AylienNewsApi.StoryLinks);
    });

    it('should have the property canonical (base name: "canonical")', function() {
      // uncomment below and update the code to test the property canonical
      //var instane = new AylienNewsApi.StoryLinks();
      //expect(instance).to.be();
    });

    it('should have the property clusters (base name: "clusters")', function() {
      // uncomment below and update the code to test the property clusters
      //var instane = new AylienNewsApi.StoryLinks();
      //expect(instance).to.be();
    });

    it('should have the property permalink (base name: "permalink")', function() {
      // uncomment below and update the code to test the property permalink
      //var instane = new AylienNewsApi.StoryLinks();
      //expect(instance).to.be();
    });

    it('should have the property relatedStories (base name: "related_stories")', function() {
      // uncomment below and update the code to test the property relatedStories
      //var instane = new AylienNewsApi.StoryLinks();
      //expect(instance).to.be();
    });

  });

}));
