function CardsController() {
  var starwarsService = new StarService()

  this.add = function add(name) {
    starwarsService.addToMyCharacters(name)
    // starwarsService.getMyCharacters(ready)
    // function ready(data) {

    //   updateMyCharacters(data)

    //   function updateMyCharacters(list) {
    //     var elem = document.getElementById('my-characters')
    //     elem.innerHTML = ''
    //     var starWarsTemplate = ''
    //     for (var j in list) {
    //       var character = list[j];
    //       starWarsTemplate += `
    //     <div class="card">
    //       <h3>${character.name}</h3>
    //       <h5>Hair color: ${character.hair_color}</h3>
    //       <h5>Height: ${character.height}</h3>
    //       <h5>Mass: ${character.mass}</h3>
    //       <div>
    //         <button class="btn-success" id="${character.name}" onclick="cardsCtrl.add('${character.name}')">Add to Team</button>
    //       </div>
    //     <div>
    //     `

    //     elem.innerHTML = starWarsTemplate
    //     }
    //   }
    }
  
  starwarsService.getCharacters(ready)
  function ready(data) {

    updateStarWars(data)

    function updateStarWars(list) {
      var elem = document.getElementById('starwars-characters')
      elem.innerHTML = ''
      var starWarsTemplate = ''
      for (var i in list) {
        var character = list[i];
        starWarsTemplate += `
      <div class="card">
        <h3>${character.name}</h3>
        <h5>Hair color: ${character.hair_color}</h3>
        <h5>Height: ${character.height}</h3>
        <h5>Mass: ${character.mass}</h3>
        <div>
          <button class="btn-success" id="${character.name}" onclick="cardsCtrl.add('${character.name}')">Add to Team</button>
        </div>
      <div>
      `

        elem.innerHTML = starWarsTemplate
      }

    }
  }
}