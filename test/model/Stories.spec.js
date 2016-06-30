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
    instance = new AylienNewsApi.Stories();
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

  describe('Stories', function() {
    it('should create an instance of Stories', function() {
      // uncomment below and update the code to test Stories
      //var instane = new AylienNewsApi.Stories();
      //expect(instance).to.be.a(AylienNewsApi.Stories);
    });

    it('should have the property stories (base name: "stories")', function() {
      // uncomment below and update the code to test the property stories
      //var instane = new AylienNewsApi.Stories();
      //expect(instance).to.be();
    });

    it('should have the property clusters (base name: "clusters")', function() {
      // uncomment below and update the code to test the property clusters
      //var instane = new AylienNewsApi.Stories();
      //expect(instance).to.be();
    });

    it('should have the property nextPageCursor (base name: "next_page_cursor")', function() {
      // uncomment below and update the code to test the property nextPageCursor
      //var instane = new AylienNewsApi.Stories();
      //expect(instance).to.be();
    });

  });

}));
