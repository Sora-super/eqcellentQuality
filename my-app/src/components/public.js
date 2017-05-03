import React,{Component} from "react";
import "../styles/public.css"

class Header extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return 	<div className="header">
					<a href="#">后退</a>
					<a href="#">优品惠</a>	
					<a href="#">太阳</a>	
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
					<li><a href="#">首页</a></li>
					<li><a href="#">首页</a></li>
					<li><a href="#">首页</a></li>
					<li><a href="#">我的</a></li>
				</ul>
	}
}


export {Header,Content,Footer}
