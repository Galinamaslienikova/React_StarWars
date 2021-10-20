import { withRouter } from "react-router"
import PageDetails from "../../components/PageDetails"
import { getFilm,  getFilmPicture } from "../../utils"
    
function Details(props){
    return(
         <PageDetails
         getOneInfo={getFilm}
         infoId={props.match.params.id}
         p1='director'
         p2='opening_crawl'
         p3='producer'
         p4='release_date'
         getInfoPicture={getFilmPicture}
         links1='starships'
         linksR1='ship'
         links3='species'
         linksR3='specy'
         links2='planets'
         linksR2='planet'
         links4='characters'
         linksR4='characters'
         />
     )
    }
export default withRouter(Details)
           