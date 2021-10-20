import React from "react";
import { Link } from "react-router-dom";
export function List({error,link,image,filmName,description,id}){
    
    return(
        <div style={{marginBottom:10}}  className='col'>
        <div className="card bg-secondary" style={{height:'100%'}}>
             <img onError={error} src={image}  className="card-img-top" alt="Здесь должна быть картика, но сайт висит и по этому ее нет((("/>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'end'}} className="card-body" >
            <h3 className="card-title">{filmName}</h3>
                <p className="card-text">{description}</p>
                <Link to={`/${link}/${id}`}><button  className="btn btn-primary">more...</button></Link>
            </div>
        </div>
        
        </div>
    )
}
export function Col({error,link,image,filmName,description,id}){
    return(
        <div style={{maxWidth: '100%'}} className="card text-white bg-secondary mb-3 mb-3" >
            <div className="row g-0 ">
                <div className="col-md-4">
                    <img onError={error} src={image} className="img-fluid rounded-start" alt="Здесь должна быть картика, но сайт висит и по этому ее нет((("/>
                </div>
                <div className="col-md-8">
                    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',height:'100%'}} className="card-body">
                        <h3 className="card-title">{filmName}</h3>
                        <p style={{fontSize:20}} className="card-text">{description}</p>
                        <Link to={`/${link}/${id}`}><button  className="btn btn-primary">more...</button></Link>
                    </div>
                </div>
            </div>
        </div>
        
    )
}