
export function getDefaultImage (){
  return `https://starwars-visualguide.com/assets/img/placeholder.jpg`
}

export function getAllPlanets(page){
  return fetch(`https://swapi.dev/api/planets/?page=${page}`)
  .then(res=>res.json())
}
export function getPlanetPicture(id){
  return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
}
export function getOnePlanet(id){
  return fetch(`https://swapi.dev/api/planets/${id}`)
  .then(res=>res.json())
}
export function getAllFilms(){
  return fetch('https://swapi.dev/api/films/')
  .then(res=>res.json())
}
export function getFilmPicture(id){
  return `https://starwars-visualguide.com/assets/img/films/${id}.jpg`
}
export function getFilm(id){
  return fetch(`https://swapi.dev/api/films/${id}/`)
  .then(res=>res.json())
}
export function getUrl(id){
  return fetch(id)
  .then(res=>res.json())
}
export function getCharacters(id){
  return fetch(`https://swapi.dev/api/people/${id}/`)
  .then(res=>res.json())
}
export function getPeoplePictur(id){
  return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
}
export function getPeople(id){
  return fetch(`http://swapi.dev/api/people/?page=${id}`)
  .then(res=>res.json())
}
export function getPeoples(){
  return fetch(`http://swapi.dev/api/people/`)
  .then(res=>res.json())
}
export function getShips(page){
  return fetch(`https://swapi.dev/api/starships/?page=${page}`)
  .then(res=>res.json())

}
export function getShipPicture(id){
  return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
}
export function getOneShip(id){
  return fetch(`https://swapi.dev/api/starships/${id}`)
  .then(res=>res.json())
}
export function getSpecies(page){
  return fetch(`https://swapi.dev/api/species/?page=${page}`)
  .then(res=>res.json())

}
export function getSpeciesPicture(id){
  return `https://starwars-visualguide.com/assets/img/species/${id}.jpg`
}
export function getOneSpecies(id){
  return fetch(`https://swapi.dev/api/species/${id}`)
  .then(res=>res.json())
}