function StarService(){
  var baseUrl = 'https://swapi.co/api/people/'
  
  var starWarsCharacters = [];
  var myCharacters = [];
  
  
  this.getStarWarsCharacters = function(){
    //what should this function return
  }
  
  this.getMyCharacters = function(){
    //what should this function return
  }
  
  this.addToMyCharacters = function(id){
    //in order to add a character to your list you will first need to find 
    //the character by its id in the marvelCharacters array
  }
  
  this.removeMyCharacter = function(id){
    //you need to find the character that you want to remove by its id
    //and remove it.
  }
  
  
  this.getCharacters = function(callWhenDone){
    //Use &offset=Number to add pagination
    $.get(baseUrl, function(response){
      starWarsCharacters = response.results;
      callWhenDone(starWarsCharacters)
    })
  }
  
  
}
