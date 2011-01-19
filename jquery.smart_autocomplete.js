/**
 * Smart Auto Complete plugin 
 * 
 * Copyright (c) 2011 Lakshan Perera (laktek.com)
 * Licensed under the MIT (MIT-LICENSE.txt)  licenses.
 * 
*/

/*
 $(target).smartAutoComplete({options})
  options:
  minCharLength: (integer) minimum characters user have to type before invoking the autocomplete (default: 2)
  maxResults: (integer) maximum number of results to return (default: -1 (unlimited))
  delay: (integer) delay before autocomplete starts (default: 10ms)
  typeAhead: (boolean) fill the field with the best matching result, as in google instant search (default: false)
             and fires the select event.
  disabled: (boolean) whether autocomplete disabled on the field (default: false)
  source:  (array/function) you can supply an array or callback function that would return an array for the source
           this is optional if you prefer to have your own filter method 
           eg: ["Apple", "Banana", "Mango"] or [["Apple", 1], ["Banana", 2], ["Mango", 3]]
           or [["Apple", 1, {picture: 'apple.jpg'}], ["Banana", 2, {picture: 'banana.jpg'}], ["Mango", 3, {picture: 'mango.jpg'}]]
  filter: (function) define a function on that would return matching items to the query (use this if you want to override the default filtering algorithm)
          expects to return an array 
          arguments: query, list
  resultFormatter: (function) the function you supply here will be called to format the output of the individual result.
                   expects to return a string
                   arguments: result 
  appendTo: (selector) to which elements the result should be appended.
  forceSelect: (boolean) always fills the field with best matching result, without leaving custom input (similar to a select field) (default false)

  events:
  select: fires when user selects an item from the result list
  enable: fires when autocomplete is disabled
  disable: fires when autocomplete is enabled
  resultsReady: fires when filtered results are appended to the view 
  noMatch: fires when filter returns an empty array to append to the view


 })
*/

