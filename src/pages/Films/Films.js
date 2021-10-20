import React from "react";
import { withRouter } from "react-router";
import PageMain from "../../components/PageMain";
import { getAllFilms,getFilmPicture} from "../../utils";
function Films(props){
    return(
        <PageMain
        getInfo={getAllFilms}
        getInfoPicture={getFilmPicture}
        description='opening_crawl'
        pageName='film'
        linkDetails='film'
        pageNumber={props.match.params.id}
        />
    )
}

export default withRouter(Films)