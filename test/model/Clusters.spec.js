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
    instance = new AylienNewsApi.Clusters();
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

  describe('Clusters', function() {
    it('should create an instance of Clusters', function() {
      // uncomment below and update the code to test Clusters
      //var instane = new AylienNewsApi.Clusters();
      //expect(instance).to.be.a(AylienNewsApi.Clusters);
    });

    it('should have the property clusterCount (base name: "cluster_count")', function() {
      // uncomment below and update the code to test the property clusterCount
      //var instane = new AylienNewsApi.Clusters();
      //expect(instance).to.be();
    });

    it('should have the property clusters (base name: "clusters")', function() {
      // uncomment below and update the code to test the property clusters
      //var instane = new AylienNewsApi.Clusters();
      //expect(instance).to.be();
    });

    it('should have the property nextPageCursor (base name: "next_page_cursor")', function() {
      // uncomment below and update the code to test the property nextPageCursor
      //var instane = new AylienNewsApi.Clusters();
      //expect(instance).to.be();
    });

  });

}));
