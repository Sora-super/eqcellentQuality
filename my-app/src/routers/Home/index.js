/**
 * Created by hasee on 2017/4/27.
 */
import React,{Component} from "react";
import {Header,Content,Footer} from "../../components/public";
import "../../styles/public.css"


class Index extends  Component {
    constructor(props){
        super(props); 
    }
    render(){    
        return (
            <div>    
            	<Header lefttitle="左边" contitle="优品惠" righttitle="右边"/>           	 	
            	<Content/>
 				<Footer/>
            </div>
        )
    }
  
}
export default Index