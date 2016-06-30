/**
 * Copyright 2016 Aylien, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AylienNewsApi);
  }
}(this, function(expect, AylienNewsApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AylienNewsApi.Coverages();
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

  describe('Coverages', function() {
    it('should create an instance of Coverages', function() {
      // uncomment below and update the code to test Coverages
      //var instane = new AylienNewsApi.Coverages();
      //expect(instance).to.be.a(AylienNewsApi.Coverages);
    });

    it('should have the property storyTitle (base name: "story_title")', function() {
      // uncomment below and update the code to test the property storyTitle
      //var instane = new AylienNewsApi.Coverages();
      //expect(instance).to.be();
    });

    it('should have the property storyBody (base name: "story_body")', function() {
      // uncomment below and update the code to test the property storyBody
      //var instane = new AylienNewsApi.Coverages();
      //expect(instance).to.be();
    });

    it('should have the property storyPublishedAt (base name: "story_published_at")', function() {
      // uncomment below and update the code to test the property storyPublishedAt
      //var instane = new AylienNewsApi.Coverages();
      //expect(instance).to.be();
    });

    it('should have the property storyLanguage (base name: "story_language")', function() {
      // uncomment below and update the code to test the property storyLanguage
      //var instane = new AylienNewsApi.Coverages();
      //expect(instance).to.be();
    });

    it('should have the property coverages (base name: "coverages")', function() {
      // uncomment below and update the code to test the property coverages
      //var instane = new AylienNewsApi.Coverages();
      //expect(instance).to.be();
    });

    it('should have the property clusters (base name: "clusters")', function() {
      // uncomment below and update the code to test the property clusters
      //var instane = new AylienNewsApi.Coverages();
      //expect(instance).to.be();
    });

  });

}));
