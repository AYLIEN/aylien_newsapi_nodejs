# AylienNewsApi.Story

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | ID of the story which is a unique identification | [optional] 
**title** | **String** | Title of the story | [optional] 
**body** | **String** | Body of the story | [optional] 
**summary** | [**Summary**](Summary.md) | The suggested story summary | [optional] 
**source** | [**Source**](Source.md) | The story source | [optional] 
**author** | [**Author**](Author.md) | The story author | [optional] 
**entities** | [**Entities**](Entities.md) | Extracted entities from the story title or body | [optional] 
**keywords** | **[String]** | Extracted keywords mentioned in the story title or body | [optional] 
**hashtags** | **[String]** | An array of suggested Story hashtags | [optional] 
**charactersCount** | **Number** | Character count of the story body | [optional] 
**wordsCount** | **Number** | Word count of the story body | [optional] 
**sentencesCount** | **Number** | Sentence count of the story body | [optional] 
**paragraphsCount** | **Number** | Paragraph count of the story body | [optional] 
**categories** | [**[Category]**](Category.md) | Suggested categories for the story | [optional] 
**socialSharesCount** | [**ShareCounts**](ShareCounts.md) | Social shares count for the story | [optional] 
**media** | [**[Media]**](Media.md) | An array of extracted media such as images and videos | [optional] 
**sentiment** | [**Sentiments**](Sentiments.md) | Suggested sentiments for the story title or body | [optional] 
**language** | **String** | Language of the story | [optional] 
**publishedAt** | **Date** | Published date of the story | [optional] 
**links** | [**StoryLinks**](StoryLinks.md) | Links which is related to the story | [optional] 


