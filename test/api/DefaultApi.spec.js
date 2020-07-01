/**
 * AYLIEN News API
 * The AYLIEN News API is the most powerful way of sourcing, searching and syndicating analyzed and enriched news content. It is accessed by sending HTTP requests to our server, which returns information to your client. 
 *
 * The version of the OpenAPI document: 3.0
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
    instance = new AylienNewsApi.DefaultApi();
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

  describe('DefaultApi', function() {
    describe('listAutocompletes', function() {
      it('should call listAutocompletes successfully', function(done) {
        //uncomment below and update the code to test listAutocompletes
        //instance.listAutocompletes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listClusters', function() {
      it('should call listClusters successfully', function(done) {
        //uncomment below and update the code to test listClusters
        //instance.listClusters(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listHistograms', function() {
      it('should call listHistograms successfully', function(done) {
        //uncomment below and update the code to test listHistograms
        //instance.listHistograms(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listRelatedStoriesGet', function() {
      it('should call listRelatedStoriesGet successfully', function(done) {
        //uncomment below and update the code to test listRelatedStoriesGet
        //instance.listRelatedStoriesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listRelatedStoriesPost', function() {
      it('should call listRelatedStoriesPost successfully', function(done) {
        //uncomment below and update the code to test listRelatedStoriesPost
        //instance.listRelatedStoriesPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listStories', function() {
      it('should call listStories successfully', function(done) {
        //uncomment below and update the code to test listStories
        //instance.listStories(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listTimeSeries', function() {
      it('should call listTimeSeries successfully', function(done) {
        //uncomment below and update the code to test listTimeSeries
        //instance.listTimeSeries(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listTrends', function() {
      it('should call listTrends successfully', function(done) {
        //uncomment below and update the code to test listTrends
        //instance.listTrends(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
