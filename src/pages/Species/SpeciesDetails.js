import { withRouter } from "react-router"
import PageDetails from "../../components/PageDetails"
import { getOneSpecies, getSpeciesPicture } from "../../utils"

 function SpeciesDetails(props){
 return(
     <PageDetails
     getOneInfo={getOneSpecies}
     infoId={props.match.params.id}
     p1='classification'
     p2='designation'
     p3='average_height'
     p4='skin_colors'
     p5='hair_colors'
     p6='eye_colors'
     p7='language'
     getInfoPicture={getSpeciesPicture}
     linksArr='homeworld'
     linksArrR='planet'
     links3='people'
     linksR3='characters'
     links2='films'
     linksR2='film'
     />
 )
 }
export default withRouter(SpeciesDetails)
