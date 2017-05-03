import React,{Component} form "react";


class Header extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return <div>{this.props.children}</div>	
	}
}

class Content extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return <div>{this.props.children}</div>
	}
}
