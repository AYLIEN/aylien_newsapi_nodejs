/**
 * AYLIEN News API
 * The AYLIEN News API is the most powerful way of sourcing, searching and syndicating analyzed and enriched news content. It is accessed by sending HTTP requests to our server, which returns information to your client. 
 *
 * The version of the OpenAPI document: 4.7.4
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
    instance = new AylienNewsApi.Cluster();
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

  describe('Cluster', function() {
    it('should create an instance of Cluster', function() {
      // uncomment below and update the code to test Cluster
      //var instane = new AylienNewsApi.Cluster();
      //expect(instance).to.be.a(AylienNewsApi.Cluster);
    });

    it('should have the property earliestStory (base name: "earliest_story")', function() {
      // uncomment below and update the code to test the property earliestStory
      //var instane = new AylienNewsApi.Cluster();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new AylienNewsApi.Cluster();
      //expect(instance).to.be();
    });

    it('should have the property latestStory (base name: "latest_story")', function() {
      // uncomment below and update the code to test the property latestStory
      //var instane = new AylienNewsApi.Cluster();
      //expect(instance).to.be();
    });

    it('should have the property location (base name: "location")', function() {
      // uncomment below and update the code to test the property location
      //var instane = new AylienNewsApi.Cluster();
      //expect(instance).to.be();
    });

    it('should have the property representativeStory (base name: "representative_story")', function() {
      // uncomment below and update the code to test the property representativeStory
      //var instane = new AylienNewsApi.Cluster();
      //expect(instance).to.be();
    });

    it('should have the property storyCount (base name: "story_count")', function() {
      // uncomment below and update the code to test the property storyCount
      //var instane = new AylienNewsApi.Cluster();
      //expect(instance).to.be();
    });

    it('should have the property time (base name: "time")', function() {
      // uncomment below and update the code to test the property time
      //var instane = new AylienNewsApi.Cluster();
      //expect(instance).to.be();
    });

  });

}));
