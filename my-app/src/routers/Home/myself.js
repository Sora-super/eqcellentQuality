import React,{Component} from "react";

import {Header,Content,Footer} from "../../components/public";
import "../../styles/public.css"
import "../../styles/myself.css"

class Myself extends  Component {
    constructor(props){
        super(props); 
    }
    render(){    
        return (
            <div>    
            	<Header lefttitle=" " contitle="个人中心" righttitle="设置"/>
           	 	
            	<Content>
            		<div className="nav">
            			<div className="nav_con1">
            				<a><span></span></a>
            				<a>登录</a>
            				<a>注册</a>
            			</div>
            			<div className="nav_con2">
            				<p>我的关注</p>
            				<p>浏览记录</p>
            			</div>
            		</div>
            		<div className="dingdan">
            			<div className="dingdan_con1">
            				<a><i>图片</i>我的订单</a>
            				<a>查看全部订单<i>&gt;</i></a>
            			</div>
            		</div>
            		<div className="qianbao"></div>
            		<div className="services"></div>
            		<div className="fankui"></div>
            		
            	</Content>
            	<Footer/>
            </div>
        )
    }
  
}
export default Myself