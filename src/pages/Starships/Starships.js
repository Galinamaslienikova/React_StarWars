import React from "react";
import { withRouter } from "react-router";
import PageMain from "../../components/PageMain";
import { getShipPicture, getShips } from "../../utils";

function Planets(props){
    return(
        <PageMain
        getInfo={getShips}
        getInfoPicture={getShipPicture}
        description='manufacturer'
        pageName='starships'
        linkDetails='ship'
        pageNumber={props.match.params.page}
        />
    )
}
export default withRouter(Planets)