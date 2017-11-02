function StarService(){
  var baseUrl = 'https://swapi.co/api/'
  
  var starWarsCharacters = [];
  var myCharacters = [];
  
  
  this.getStarWarsCharacters = function(){
    //what should this function return
  }
  
  this.getMyCharacters = function(){
    //what should this function return
    starWarsCharacters = myCharacters
    return myCharacters
  }
  
  this.addToMyCharacters = function(name){
    for (var i=0; i<starWarsCharacters.length; i++){
      var character = starWarsCharacters[i]
      if(character.name == name){
        myCharacters.push(character)
      }
    }
    console.log(myCharacters)
    //in order to add a character to your list you will first need to find 
    //the character by its id in the marvelCharacters array

  }
  
  this.removeMyCharacter = function(id){
    //you need to find the character that you want to remove by its id
    //and remove it.
  }
  
  
  this.getCharacters = function(callWhenDone){
    //Use &offset=Number to add pagination
    $.get(baseUrl + 'people', function(response){
      starWarsCharacters = response.results;
      callWhenDone(starWarsCharacters)
    })
  }
  
  
}
