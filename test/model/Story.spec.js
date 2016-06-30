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
    instance = new AylienNewsApi.Story();
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

  describe('Story', function() {
    it('should create an instance of Story', function() {
      // uncomment below and update the code to test Story
      //var instane = new AylienNewsApi.Story();
      //expect(instance).to.be.a(AylienNewsApi.Story);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new AylienNewsApi.Story();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new AylienNewsApi.Story();
      //expect(instance).to.be();
    });

    it('should have the property body (base name: "body")', function() {
      // uncomment below and update the code to test the property body
      //var instane = new AylienNewsApi.Story();
      //expect(instance).to.be();
    });

    it('should have the property summary (base name: "summary")', function() {
      // uncomment below and update the code to test the property summary
      //var instane = new AylienNewsApi.Story();
      //expect(instance).to.be();
    });

    it('should have the property source (base name: "source")', function() {
      // uncomment below and update the code to test the property source
      //var instane = new AylienNewsApi.Story();
      //expect(instance).to.be();
    });

    it('should have the property author (base name: "author")', function() {
      // uncomment below and update the code to test the property author
      //var instane = new AylienNewsApi.Story();
      //expect(instance).to.be();
    });

    it('should have the property entities (base name: "entities")', function() {
      // uncomment below and update the code to test the property entities
      //var instane = new AylienNewsApi.Story();
      //expect(instance).to.be();
    });

    it('should have the property keywords (base name: "keywords")', function() {
      // uncomment below and update the code to test the property keywords
      //var instane = new AylienNewsApi.Story();
      //expect(instance).to.be();
    });

    it('should have the property hashtags (base name: "hashtags")', function() {
      // uncomment below and update the code to test the property hashtags
      //var instane = new AylienNewsApi.Story();
      //expect(instance).to.be();
    });

    it('should have the property charactersCount (base name: "characters_count")', function() {
      // uncomment below and update the code to test the property charactersCount
      //var instane = new AylienNewsApi.Story();
      //expect(instance).to.be();
    });

    it('should have the property wordsCount (base name: "words_count")', function() {
      // uncomment below and update the code to test the property wordsCount
      //var instane = new AylienNewsApi.Story();
      //expect(instance).to.be();
    });

    it('should have the property sentencesCount (base name: "sentences_count")', function() {
      // uncomment below and update the code to test the property sentencesCount
      //var instane = new AylienNewsApi.Story();
      //expect(instance).to.be();
    });

    it('should have the property paragraphsCount (base name: "paragraphs_count")', function() {
      // uncomment below and update the code to test the property paragraphsCount
      //var instane = new AylienNewsApi.Story();
      //expect(instance).to.be();
    });

    it('should have the property categories (base name: "categories")', function() {
      // uncomment below and update the code to test the property categories
      //var instane = new AylienNewsApi.Story();
      //expect(instance).to.be();
    });

    it('should have the property socialSharesCount (base name: "social_shares_count")', function() {
      // uncomment below and update the code to test the property socialSharesCount
      //var instane = new AylienNewsApi.Story();
      //expect(instance).to.be();
    });

    it('should have the property media (base name: "media")', function() {
      // uncomment below and update the code to test the property media
      //var instane = new AylienNewsApi.Story();
      //expect(instance).to.be();
    });

    it('should have the property sentiment (base name: "sentiment")', function() {
      // uncomment below and update the code to test the property sentiment
      //var instane = new AylienNewsApi.Story();
      //expect(instance).to.be();
    });

    it('should have the property language (base name: "language")', function() {
      // uncomment below and update the code to test the property language
      //var instane = new AylienNewsApi.Story();
      //expect(instance).to.be();
    });

    it('should have the property publishedAt (base name: "published_at")', function() {
      // uncomment below and update the code to test the property publishedAt
      //var instane = new AylienNewsApi.Story();
      //expect(instance).to.be();
    });

    it('should have the property links (base name: "links")', function() {
      // uncomment below and update the code to test the property links
      //var instane = new AylienNewsApi.Story();
      //expect(instance).to.be();
    });

  });

}));
