/**
 * Created by hasee on 2017/4/27.
 */
import React,{Component} from "react";
import {Header,Content,Footer} from "../../components/public";
import {SpecialHeader,Special} from "./special"
import "../../styles/public.css"
import "../../styles/details.css"
import { Carousel, WingBlank } from 'antd-mobile';
class DetailsFooter extends Component{
	render(){
		return <ul className="detailsfooter">
					<li>
						<a><img src="img/detailsxin.png" / ></a>
					</li>
					<li>
						<a><img src="img/detailsgouwuche.png" / ></a>
					</li>
					<li>加入购物车</li>
				</ul>
	}
	
}
class Details extends  Component {
	constructor(props){
		super(props);
		this.state={
			moreData:[],
			lunbo:[],
			price:[],
			instro:[],
			activityData:[],
			addressData:[],
			evaluateData:[],
			morethingData:[],
			chakan:"点击查看更多图文详情"
		}
		
	}
 
    render(){    
    
        return (
            <div>    
            	<SpecialHeader lefttitle="<" contitle="商品详情" righttitle="首页"/>           	 	
            	<Content>
          			<div className='con_img'>
          			   <WingBlank>    
				        <Carousel className="my-carousel" dots={true} dragging={false} swiping={false} autoplay infinite vertical={false} >	        
				        {
				        	this.state.lunbo.map((ele,i)=>
				         		 <div className="v-item"><a href="#"><img src={ele} / ></a></div>
				        		
				        	)
				       }			        
				        </Carousel>
				           </WingBlank>
          			</div>
          			<div className="con_price">
          				{
          					this.state.price.map((ele,i)=>
          						<a>{ele}</a>
          					)
          				}
          			</div>
          			<div className="con_instro">
          			
          				{
          					this.state.instro.map(function(ele,i){
          						return <div>
          								<h3>{ele.h3}</h3>
          								<p>{ele.zixi}</p>
          								</div>
          					})
          				}
          				
          			
          				
          			</div>
          			<div className="con_activity">
          				<div className="left">促销</div>
          				<div className="right">
          				
          					{
          						this.state.activityData.map((ele,i)=>
          							<p>{ele}</p>
          						)
          					}
          					
          				</div>
          			</div>
          			<div className="con_address">
          				<div>送至</div>
          				
          					{
          						this.state.addressData.map(function(ele,i){
          							return <div>   										
					          					<a>{ele.ads1}</a>
					          					<a>{ele.ads2}</a>
					          					<a>{ele.ads3}</a>
          									</div>
          						})
          					}
          				
          				
          				<div>有货></div>
          			</div>
          			
          				
          				
          					{
          						this.state.evaluateData.map(function(ele,i){
          							return (
          								<div className="con_evaluate">
          									<p className="pingjia">{ele.pingjia}</p>
          									<ul>
          											<li>
						          						<div className="pingjia_left">
						          							<span><img src="img/3030.png" / ></span>
						          						</div>
						          						<div className="pingjia_right">
						          							<p>{ele.yonghu1}</p>
						          							<p>{ele.yonghu1pingjia}</p>
						          						</div>
						          					</li>
						          					<li>
						          						<div className="pingjia_left">
						          							<span><img src="img/3030.png" / ></span>
						          						</div>
						          						<div className="pingjia_right">
						          							<p>{ele.yonghu2}</p>
						          							<p>{ele.yonghu2pingjia}</p>
						          						</div>
						          					</li>
          									</ul>
          									<p className="seemore" id="seemore">查看更多评价</p>
          								</div>)
          						})
          						
          					}
          				
          					
          				
          			
          			<div className="con_ads1">
          				<img src="img/detailsad1.png" / >
          			</div>
          			<div className="con_moredetails">
          				<p id="moreimgdetails">{this.state.chakan}</p>
          				<ul>
          					{
          						this.state.moreData.map(function(ele,i){
          							return <li>
          										<img src={ele} / >
          									</li>
          						})
          					}
          				
          					
          				</ul>
          			</div>
          			<div className="con_morethings">
          				<p>更多好物</p>
          				<ul>
          				
          					{
          						this.state.morethingData.map(function(ele,i){
          							return <li>
				          						<div>
													<a href="#/details"><img src={ele.imgurl} /></a>
													<p>{ele.money}</p>
													<p>
														<a>{ele.words}</a>
													</p>
												</div>
				          					</li>
          						})
          						
          					}
          					
          					
          				</ul>
          			</div>
          			
          			
            	</Content> 
 				<DetailsFooter/>
            </div>
        )
    }
    componentDidMount() {
    	//获取数据
    	fetch("mock/details.json").then(res=>res.json()).then(function(data){
    		this.setState({
    			lunbo:data[0].lunbotu,
    			price:data[0].price,
    			instro:data[0].instrox,
    			activityData:data[0].activity,
    			addressData:data[0].address,
    			evaluateData:data[0].evaluate,
    			morethingData:data[0].thing
    		})
    		var morepingjia = document.getElementById("seemore");
			console.log(morepingjia)
			morepingjia.onclick = function(){
				alert("没有更多评价了啊")
			}
    	}.bind(this));
    	//保存this 当加载更多图片被点击时 发送请求
    	var that = this;
    	var more = document.getElementById("moreimgdetails");
    	more.onclick = function(){
    		
	    	fetch("mock/details.json").then(res=>res.json()).then(function(data){
	    		console.log("aa")
	    		console.log(that.state.moreData)
	    		if(that.state.moreData.length==0){
	    			that.setState({
	    			moreData:data[0].tupian,
	    			chakan:"收起"
	    		})
	    		}else{
	    			that.setState({
	    				moreData:[],
	    				chakan:"点击查看更多图文详情"
	    		})
	    		}
	    		
	    		
	    	}
	    		
	    	)
    	}
		
 	}
   
}
export default Details