import React from "react";
import { withRouter } from "react-router";
import PageMain from "../../components/PageMain";
import { getAllPlanets, getPlanetPicture } from "../../utils";
function Planets(props){
    return(
        <PageMain
        getInfo={getAllPlanets}
        getInfoPicture={getPlanetPicture}
        description='climate'
        pageName='planets'
        linkDetails='planet'
        pageNumber={props.match.params.id}
        />
    )
}

export default withRouter(Planets)