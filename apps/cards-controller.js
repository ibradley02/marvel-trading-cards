function CardsController() {
var starwarsService = new StarService()

  this.add = function add(name){
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
        <h3>${character.hair_color}</h3>
        <h3>${character.height}</h3>
        <h3>${character.mass}</h3>
        <div>
          <button class="btn-success" id="${character.name}" onclick="apps.app.cardsCtrl.cards-controller.add('${character.name}')">Add to Team</button>
        </div>
      <div>
      `

        elem.innerHTML = starWarsTemplate
      }

    }
  }

}
