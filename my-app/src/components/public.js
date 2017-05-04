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
					<li><a href="#"><img src={require('../img/nav_index.png')}/></a></li>
					<li><a href="#/special"><img src={require('../img/nav_special.png')}/></a></li>
					<li><a href="#"><img src={require('../img/nav_tv.png')}/></a></li>
					<li><a href="#"><img src={require('../img/nav_cart.png')}/></a></li>
					<li><a href="#/myself"><img src={require('../img/nav_my.png')}/></a></li>
				</ul>
	}
}


export {Header,Content,Footer}
