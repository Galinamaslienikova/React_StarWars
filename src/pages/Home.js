import React from "react"
import Header from "../components/Header"
import HomePicture from "../components/HomePicture"


function Home(){
        return(
            <div style={{paddingRight:15,paddingLeft:15}} >
                <Header/>
                <div style={{marginBottom:35}} className="row ">
                    <HomePicture  nameClass='col' pictureUrl='https://starwars-visualguide.com/assets/img/categories/character.jpg' text='CHARACTERS' colorText='red' link='people/1'/>
                    <HomePicture nameClass='col' pictureUrl='https://starwars-visualguide.com/assets/img/categories/films.jpg' text='FILMS' colorText='yellow' link='films'/>
                    <HomePicture nameClass='col' pictureUrl='https://starwars-visualguide.com/assets/img/categories/species.jpg' text='SPECIES' colorText='red' link='species/1'/>
                </div>
                <div className="row ">
                    <HomePicture nameClass='col-md-4 ' pictureUrl='https://starwars-visualguide.com/assets/img/categories/starships.jpg' text='STARSHIPS' colorText='white' link='starships/1'/>
                    <HomePicture nameClass='col-md-4 offset-md-4' pictureUrl='https://starwars-visualguide.com/assets/img/categories/planets.jpg' text='PLANETS' colorText='white' link='planets/1'/>
                </div>
            </div>
        )
    }

export default Home