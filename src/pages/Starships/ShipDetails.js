import React from 'react';
import { withRouter } from 'react-router';
import { getOneShip, getShipPicture } from '../../utils';
import PageDetails from '../../components/PageDetails';


function ShipDetails(props){
  return(
      <PageDetails
      getOneInfo={getOneShip}
      infoId={props.match.params.id}
      p1='MGLT'
      p2='model'
      p3='manufacturer'
      p4='cost_in_credits'
      p5='length'
      p6='max_atmosphering_speed'
      p7='passengers'
      getInfoPicture={getShipPicture}
      links2='films'
      linksR2='film'
      />
  )
  }
 export default withRouter(ShipDetails)