import React from "react";


export default function ListDetails ({error,image,title,details,detailsSmallText,children}){
  
    return(
       <div className="card mb-3 bg-secondary" style={{maxWidth: '100%'}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img onError={error} src={image} alt="img" style={{maxWidth: '100%'}}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title">{title}</h4>
                        <div className="card-text"> {details}</div>
                        {children}
                        <p className="card-text"><small className="text-white-50">{detailsSmallText}</small></p>
                    </div>
                </div>
            </div>
        </div>
     
    )
}