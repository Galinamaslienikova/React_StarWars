import React from "react";
import { Link } from "react-router-dom";
import { getUrl } from "../utils";
import Loader from "./Loader";

 class Info extends React.Component {
    constructor(id, link){
        super(id, link)
        this.state={
            information:[],
            loader:true
        }
    }
    firstLoad(){
        if(this.props.id==''){
            return
        }
       else  this.props.id.forEach((item)=>{
            getUrl(item)
            .then(data=>
                this.setState({
                    information:this.state.information.concat(data),
                })
            )
        })
    }
    componentDidMount(){
        this.firstLoad()
        this.setState({
            loader:false
        }) 
    }
    componentWillUnmount() {
        this.setState = (state,callback)=>{
            return;
        };
    }
    render(){
        let res=this.state.information.map((int,index)=>{
           const id=int.url.replace(/[\D]+|\/$/g,'')
           if (index<9){
            return <Link key={int.url} to={`/${this.props.link}/${id}`}><span > {int[Object.keys(int)[0]]}{index+1===this.state.information.length||index+1===9?".":' , '} </span></Link>}
            else
            return ''  
        } )
        return(
            <div>{this.state.loader? <Loader/> : (res.length===0?<>We do not know :)</>:res)}</div>
        )
    }
}
export default Info