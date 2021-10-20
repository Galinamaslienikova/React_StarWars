import { Link } from "react-router-dom";

export default function HomePicture({nameClass,pictureUrl,text,colorText,link}){

    return(
    <div className={nameClass} >
        <Link style={{position:'relative'}}    to={link}>
            <img style={{maxWidth:'100%'}} src={pictureUrl} alt='img'/>
            <p style={{position:'absolute', top:'90%',textAlign:'center', width:'100%',backgroundColor:'grey',opacity:'50%', color:colorText,fontWeight:'900',fontSize:'x-large'}}>{text}</p>
        </Link>
    </div>
      
    )
}