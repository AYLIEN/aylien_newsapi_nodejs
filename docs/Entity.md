# AylienNewsApi.Entity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique ID of the entity | [optional] 
**indices** | **[[Number]]** | The indices of the entity text | [optional] 
**links** | [**EntityLinks**](EntityLinks.md) |  | [optional] 
**prominenceScore** | **Number** | Describes how relevant an entity is to the article | [optional] 
**sentiment** | [**EntitySentiment**](EntitySentiment.md) |  | [optional] 
**stockTicker** | **String** | The stock_ticker of the entity (might be null) | [optional] 
**surfaceForms** | [**[EntitySurfaceForm]**](EntitySurfaceForm.md) |  | [optional] 
**text** | **String** | The entity text | [optional] 
**types** | **[String]** | An array of the entity types | [optional] 


