/**
 * Created by hasee on 2017/4/27.
 */
import React,{Component} from "react";
import {Header,Content,Footer} from "../../components/public";
import "../../styles/public.css"
import "../../styles/index.css"
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
class Index extends  Component {
    constructor(props){
        super(props); 
    }
 	state = {
    	
  	}
  	
  
    render(){    
    
        return (
            <div>    
            	<Header lefttitle="左边" contitle="优品惠" righttitle="右边"/>           	 	
            	<Content>
            		<ul className="fenlei">
            			<li>推荐</li>
            			<li>TV直播</li>
            			<li>榜单</li>
            			<li>食品</li>
            			<li>家居</li>
            			<li>美妆</li>
            			<li>服饰</li>        			
            		</ul>
            		<div className="ad1">
            			<img src={require('../../img/ad1.png')} / >
            		</div>
            		<div className="lunbotu">
        <WingBlank>
     
      
        <Carousel className="my-carousel"
          dots={true} dragging={false} swiping={false} autoplay infinite vertical={false}
        >
          <div className="v-item"><a href="#"><img src={require('../../img/lunbo1.jpg')} / ></a></div>
         <div className="v-item"><a href="#"><img src={require('../../img/lunbo2.jpg')} / ></a></div>
        
        </Carousel>
      </WingBlank>
            		</div>
            		<div className="activity">
            			<p>
            				<a>活动进行时</a>
            				<a>超值精选别错过</a>
            			</p>
            			<ul>
            				<li><a href="#"><img src={require('../../img/activity1.png')} / ></a></li>
            				<li><a href="#"><img src={require('../../img/activity2.png')} / ></a></li>
            				<li><a href="#"><img src={require('../../img/activity3.png')} / ></a></li>
            				<li><a href="#"><img src={require('../../img/activity4.png')} / ></a></li>
            				<li><a href="#"><img src={require('../../img/activity5.png')} / ></a></li>
            		
            			</ul>
            		</div>
            		<div className="newpro">
            			<p>
            				<a>今日新品</a>
            				<a>每日10点上新</a>
            			</p>
            			<ul>
            				<li>
            					<div className="tupian">
            						<a href="#"><img src={require('../../img/newpro1.jpg')} / ></a>
            					</div>
            					<div className="word">这是好多好多好啊啊啊啊啊啊啊啊啊啊啊啊啊阿啊啊啊啊啊啊啊啊阿啊啊啊啊啊啊啊啊</div>
            					<div className="sale">
            						<a>$298</a>
            						<a>已经有5118人购买</a>
            					</div>
            				</li>
            				<li>
            					<div className="tupian">
            						<a href="#"><img src={require('../../img/newpro2.jpg')} / ></a>
            					</div>
            					<div className="word">这是好多好多好啊啊啊啊啊啊啊啊啊啊啊啊啊阿啊啊啊啊啊啊啊啊阿啊啊啊啊啊啊啊啊</div>
            					<div className="sale">
            						<a>$298</a>
            						<a>已经有5118人购买</a>
            					</div>
            				</li>
            				<li>
            					<div className="tupian">
            						<a href="#"><img src={require('../../img/newpro3.jpg')} / ></a>
            					</div>
            					<div className="word">这是好多好多好啊啊啊啊啊啊啊啊啊啊啊啊啊阿啊啊啊啊啊啊啊啊阿啊啊啊啊啊啊啊啊</div>
            					<div className="sale">
            						<a>$298</a>
            						<a>已经有5118人购买</a>
            					</div>
            				</li>
            				<li>
            					<div className="tupian">
            						<a href="#"><img src={require('../../img/newpro4.jpg')} / ></a>
            					</div>
            					<div className="word">这是好多好多好啊啊啊啊啊啊啊啊啊啊啊啊啊阿啊啊啊啊啊啊啊啊阿啊啊啊啊啊啊啊啊</div>
            					<div className="sale">
            						<a>$298</a>
            						<a>已经有5118人购买</a>
            					</div>
            				</li>
            				<li>
            					<div className="tupian">
            						<a href="#"><img src={require('../../img/newpro5.jpg')} / ></a>
            					</div>
            					<div className="word">这是好多好多好啊啊啊啊啊啊啊啊啊啊啊啊啊阿啊啊啊啊啊啊啊啊阿啊啊啊啊啊啊啊啊</div>
            					<div className="sale">
            						<a>$298</a>
            						<a>已经有5118人购买</a>
            					</div>
            				</li>
            			</ul>
            		</div>
            	</Content>
 				<Footer/>
            </div>
        )
    }
    componentDidMount() {
    
 	}
   
}
export default Index