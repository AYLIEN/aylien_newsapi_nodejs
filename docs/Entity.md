# AylienNewsApi.Entity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique ID of the entity | [optional] 
**links** | [**EntityLinks**](EntityLinks.md) |  | [optional] 
**stockTickers** | **[String]** | The stock tickers of the entity (might be empty) | [optional] 
**types** | **[String]** | An array of the entity types | [optional] 
**overallSentiment** | [**EntitySentiment**](EntitySentiment.md) |  | [optional] 
**overallProminence** | **Number** | Describes how relevant an entity is to the article | [optional] 
**overallFrequency** | **Number** | Amount of entity surface form mentions in the article | [optional] 
**body** | [**EntityInText**](EntityInText.md) |  | [optional] 
**title** | [**EntityInText**](EntityInText.md) |  | [optional] 
**externalIds** | [**ExternalIds**](ExternalIds.md) |  | [optional] 


