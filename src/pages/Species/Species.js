import React from "react";
import { withRouter } from "react-router";
import PageMain from "../../components/PageMain";
import {getSpecies, getSpeciesPicture } from "../../utils";

function Species(props){
    return(

        <PageMain
        getInfo={getSpecies}
        getInfoPicture={getSpeciesPicture}
        description='classification'
        pageName='species'
        linkDetails='specy'
        pageNumber={props.match.params.page}
        />
    )
}
export default withRouter(Species)