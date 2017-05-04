import React,{Component} from "react";

import { Header, Content, Footer } from "../../components/public";
import "../../styles/public.css"
import "../../styles/myself.css"

class Myself extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<div>    
            	<Header lefttitle=" " contitle="个人中心" righttitle="设置"/>
           	 	
            	<Content>
            		<div className="nav">
            			<div className="nav_con1">
            				<a><span><img src={require('../../img/3030.png')} / ></span></a>
            				<a href="#/login">登录</a>
            				<a href="#/register">注册</a>
            			</div>
            			<div className="nav_con2">
            				<p>我的关注</p>
            				<p>浏览记录</p>
            			</div>
            		</div>
            		<div className="dingdan">
            			<div className="dingdan_con1">
            				<a><i><img src={require('../../img/订单.png')} / ></i>我的订单</a>
            				<a>查看全部订单<i>&gt;</i></a>
            			</div>
            			<div className="dingdan_con2">
            				<p>代付款</p>
            				<p>待收货</p>
            				<p>待评价</p>
            			</div>
            		</div>
            		<div className="qianbao">
            			<div className="qianbao_con1">
            				<a><i><img src={require('../../img/qianbao.png')} / ></i>我的钱包</a>
            				<a>查看钱包<i>&gt;</i></a>
            			</div>
            			<div className="qianbao_con2">
            				<p>
            					优惠券
            				</p>
            				<p>积分</p>
            				
            			</div>
            		</div>
            		<div className="services">
            			<div className="services_con1">
            				<a><i><img src={require('../../img/service.png')} / ></i>我的服务</a>
            				<a>在线客服<i>&gt;</i></a>
            			</div>
            		</div>
            		<div className="fankui">
            			<div className="fankui_con1">
            				<a><i><img src={require('../../img/fankui.png')} / ></i>意见反馈</a>
            				<a><i>&gt;</i></a>
            			</div>
            		</div>
            		
            	</Content>
            	<Footer/>
            </div>
		)
	}

}
export default Myself