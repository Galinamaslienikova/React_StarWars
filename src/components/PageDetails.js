import React, { useCallback, useEffect,  useState } from 'react';
import {  withRouter } from 'react-router';
import { getDefaultImage } from '../utils';
import Header from './Header';
import Info from './Info';
import ListDetails from './ListDetails';
import Loader from './Loader';




 function PageDetails({getOneInfo,infoId,p1,p2,p3,p4,p5,p6,p7,getInfoPicture,links1,linksR1,links2,linksR2,links3,linksR3,links4,linksR4,linksArr,linksArrR,children}){
 const[page, setPage]=useState(false)
  
 useEffect(()=>{
    getOneInfo(infoId)
    .then(data=>{
        setPage(data)})
 },[infoId,getOneInfo])
 let picture=getDefaultImage()
 let onImageLoadError = useCallback(e => {
    if (e.target.src !== picture) {
      e.target.src =picture;
      e.target.classList.add('img-placeholder');
    }
  }, [picture]);

 let desc=function(){
   
    return(
        <>
           {p1?<p>{p1+":" +page[p1]}</p>:''} 
           {p2?<p>{p2+":" +page[p2]}</p>:''} 
           {p3?<p>{p3+":" +page[p3]}</p>:''} 
           {p4?<p>{p4+":" +page[p4]}</p>:''} 
           {p5?<p>{p5+":" +page[p5]}</p>:''} 
           {p6?<p>{p6+":" +page[p6]}</p>:''} 
           {p7?<p>{p7+":" +page[p7]}</p>:''} 
        </>
    )
}

   return(
       <>
       <Header/>
       {
       page? 
       
       <ListDetails 
       error={onImageLoadError}
       image={getInfoPicture(infoId)}
       title={page.name||page.title}
       details={desc()}
       
       >  {page&&
       <>   
            {linksArr&&<h5>{linksArr}: <Info link={linksArrR} id={[page[linksArr]]}/></h5>}
            {links1&&<h5>{links1}: <Info link={linksR1} id={page[links1]}/></h5>}
            {links2&&<h5>{links2}: <Info link={linksR2} id={page[links2]}/></h5>}
            {links3&&<h5>{links3}: <Info link={linksR3} id={page[links3]}/></h5>}
            {links4&&<h5>{links4}: <Info link={linksR4} id={page[links4]}/></h5>}
            
       </>
      
       }
         {children}  
       </ListDetails>
       :<Loader/>
      
       
       
   }</>
      
   )
 }
export default withRouter(PageDetails)