import React from "react";
import { Link } from "react-router-dom";


export default function Pagination({pageName,counts,pages,changePage,prev,next}){

    return(
        <>
        <div className="pagination justify-content-center">
                <Link  to={`/${pageName}/${counts-1}`}><button style={{backgroundColor:'grey',color:'black'}} onClick={prev} disabled={counts===1?true:false}>Previous</button></Link>
                    <Link   to={`/${pageName}/${counts}`}><button  style={{backgroundColor:'white',color:'black'}} value={counts} onClick={changePage}   className="page-item ">{counts}</button></Link>
                    {counts===pages?null:<Link   to={`/${pageName}/${counts+1}`}><button style={{backgroundColor:'grey',color:'black'}}  value={counts+1} onClick={changePage}  className="page-item">{counts+1}</button></Link>}
                    {counts===pages||counts===pages-1?null:<Link   to={`/${pageName}/${counts+2}`}><button style={{backgroundColor:'grey',color:'black'}}  value={counts+2} onClick={changePage}  className="page-item">{counts+2}</button></Link>}
                    <Link   to={`/${pageName}/${counts+1}`}><button style={{backgroundColor:'grey',color:'black'}}  onClick={next} className='page-item' disabled={counts===pages?true:false}>Next</button></Link>
        </div>
        </>
    )
}