import React from "react";
import { withRouter } from "react-router";
import PageMain from "../../components/PageMain";
import {getPeoplePictur, getPeople} from "../../utils";

function People(props){
    return(
        <PageMain
        getInfo={getPeople}
        getInfoPicture={getPeoplePictur}
        description='gender'
        pageName='people'
        linkDetails='characters'
        pageNumber={props.match.params.id}
        />
    )
}
export default withRouter(People)