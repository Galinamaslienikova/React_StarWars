import React from "react";
import { getDefaultImage } from "../utils";
import Loader from "./Loader";
import Pagination from "./Pagination";
import  { Col,List } from "./List";
import ColListButtons from "./ColListButtons";
import Header from "./Header";



let counts=1
 class PageMain extends React.Component{
    constructor(props){
        super(props)
        this.state={
            loader:true,
            info:false,
            pages:0,
            list:false,
            col:true
            
        }
    }
   
    loadPage=(page)=>{
        this.props.getInfo(page)
       .then(data =>{
        this.setState({
            info:data,
            loader:false,
            
           
    })});
    }
    componentDidMount(){
        
        counts=this.props.pageNumber*1
        this.props.getInfo(counts)
        .then(data =>{
         this.setState({
            info:data,
            loader:false,
            pages:Math.ceil(data.count/data.results.length),
     })})
    }
    componentWillUnmount() {
        this.setState = (state,callback)=>{
            return;
        };
    }
    next=()=>{
        counts=counts+1
        this.setState({
            loader:true
        })
        this.loadPage(counts)
    }
    prev=()=>{
        counts-=1
        this.setState({
            loader:true
        })
        this.loadPage(counts)
    }
    changePage=(e)=>{
        this.setState({
            loader:true
        })
           let n=parseInt(e.target.value)
           n===Math.ceil(this.state.pages)+1||
           this.props.getInfo(n)
        .then(data =>{
            counts=n
            this.setState({
                info:data,
                loader:false
        })});
    }
    imageLoadError =(e) => {
        let pict=getDefaultImage()
        if (e.target.src !== pict) {
          e.target.src = pict;
          e.target.classList.add('img-placeholder');
        }
    }
    onList=()=>{
          this.setState({
            col:false,
            list:true
          })
    }
    onColt=()=>{
            this.setState({
            col:true,
            list:false
            })
    }
    clickLoad=()=>{
        this.setState({
            loader:true
        })
        counts=1
        this.props.getInfo(1)
        .then(data =>{
        this.setState({
            info:data,
            loader:false,
            pages:Math.ceil(data.count/data.results.length),
        })} )
    }    
  
    render(){
        let result
        if(this.state.info){
            if(this.state.col){
                result=this.state.info.results.map((item)=>{ 
                    let id=item.url.replace(/[\D]+|\/$/g,'')
                    return<List error={this.imageLoadError} key={id} link={this.props.linkDetails} image={this.props.getInfoPicture(id)} filmName={item.name} description={this.props.description+':'+item[this.props.description]} id={id}/>
                }) 
            }else 
            result=this.state.info.results.map((item)=>{ 
                let id=item.url.replace(/[\D]+|\/$/g,'')
                return <Col error={this.imageLoadError} key={id} link={this.props.linkDetails} image={this.props.getInfoPicture(id)} filmName={item.name} description={this.props.description+':'+item[this.props.description]} id={id}/>
            })
        }
    
       return(
        <>
            <Header clickLoad={this.clickLoad}/>{   
            this.state.loader?<Loader/>:
            <div  >
                <ColListButtons col={this.state.col} onColt={this.onColt} onList={this.onList}/>
                <div style={{paddingLeft:15}} className={this.state.col?'row row-cols-3 row-cols-lg-3 ':'row'}>
                    {result}
                </div> 
                {this.state.pages>1&&<Pagination
                    pageName={this.props.pageName}
                    counts={counts}
                    pages={this.state.pages}
                    changePage={this.changePage}
                    prev={this.prev}
                    next={this.next}
                />}
            </div>}
        </>)
        
    }
}
export default PageMain