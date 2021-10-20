import { withRouter } from "react-router"
import PageDetails from "../../components/PageDetails"
import { getCharacters, getPeoplePictur } from "../../utils"

 function PeopleDetails(props){
 return(
     <PageDetails
     getOneInfo={getCharacters}
     infoId={props.match.params.id}
     p1='height'
     p2='mass'
     p3='hair_color'
     p4='skin_colors'
     p5='birth_year'
     p6='eye_color'
     p7='gender'
     getInfoPicture={getPeoplePictur}
     links1='starships'
     linksR1='ship'
     links3='species'
     linksR3='specy'
     links2='films'
     linksR2='film'
     />
 )
 }
export default withRouter(PeopleDetails)
       