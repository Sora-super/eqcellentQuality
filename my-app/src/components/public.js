import React,{Component} from "react";
import "../styles/public.css"

class Header extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return 	<div className="header">
					<a href="#" >{this.props.lefttitle}</a>
					<a href="#">{this.props.contitle}</a>	
					<a href="#">{this.props.righttitle}</a>	
				</div>
	}
}

class Content extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return <div className="content">{this.props.children}</div>
	}
}
class Footer extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return	<ul className="footer">
					<li><a href="#">首页</a></li>
					<li><a href="#">专题</a></li>
					<li><a href="#">视频直播</a></li>
					<li><a href="#">购物车</a></li>
					<li><a href="#">我的</a></li>
				</ul>
	}
}


export {Header,Content,Footer}
