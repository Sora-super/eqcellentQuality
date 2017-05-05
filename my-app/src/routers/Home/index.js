/**
 * Created by hasee on 2017/4/27.
 */
import React,{Component} from "react";
import {Header,Content,Footer} from "../../components/public";
import "../../styles/public.css"
import "../../styles/index.css"
import { Carousel, WingBlank } from 'antd-mobile';
class Index extends  Component {
    constructor(props){
        super(props); 
    	 this.state={
            activityData:[],
            newData:[],
            lunbo:[]
        }
    }
 	
  	
  
    render(){    
    
        return (
            <div>    
            	<Header  contitle="优品惠" righttitle="我的"/>           	 	
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
					        
				        {
					        	this.state.lunbo.map((ele,i)=>
					         		 <div className="v-items"><a href="#"><img src={ele} / ></a></div>
					        		
					        	)
					    }
					
					       
					        
					        </Carousel>
					      </WingBlank>
            		</div>
            		<div className="activity">
            			<p>
            				<a>活动进行时</a>
            				<a>超值精选别错过</a>
            			</p>
            			<ul>
            			
            					{
            						this.state.activityData.map(function(ele,i){
            							return <li><a href="#/details"><img src={ele}/ ></a></li>        						
            						})
            					}
            		
            			</ul>
            		</div>
            		<div className="newpro">
            			<p>
            				<a>今日新品</a>
            				<a>每日10点上新</a>
            			</p>
            			<ul>
            				
            				{
            					this.state.newData.map((ele,i)=>
            						<li>
            							<div className="tupian">
            								<a href="#/details"><img src={ele.imgurl} / ></a>
            							</div>
            							<div className="word">{ele.word}</div>
            							<div className="sale">
            								<a>${ele.price}</a>
            								<a>{ele.scale}</a>
            							</div>
            				</li>
            					)
            			}
           		        			
            			</ul>
            		</div>
            	</Content> 
 				<Footer/>
            </div>
        )
    }
    componentDidMount() {
    	/*var data = require("../../mock/index.json");
    	console.log(data[0].activitydatas)*/
    	fetch("mock/index.json").then(res=>res.json()).then(function(data){
    		//console.log(data[0].activitydatas.length);
    		this.setState({
    			activityData:data[0].activitydatas,
    			newData:data[0].newDatas,
    			lunbo:data[0].lunbotu
    		})
    	
    	
  			
    	}.bind(this))
  		var fenlei = document.getElementsByClassName("fenlei")[0].children;
  		console.log(fenlei);
  		for(let x=0;x<fenlei.length;x++){
  			var that=this;
  				fenlei[x].onclick = function(){
  					fetch("mock/index.json").then(res=>res.json()).then(function(data){
  						that.setState({
    						activityData:data[x].activitydatas,
    						newData:data[x].newDatas,
    						lunbo:data[x].lunbotu
    					})
  					})
  				}
  		}
  		
		
 	}
   
}
export default Index