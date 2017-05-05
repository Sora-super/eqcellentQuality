/**
 * Created by hasee on 2017/4/27.
 */
import React,{Component} from "react";
import {Header,Content,Footer} from "../../components/public";
import {SpecialHeader,Special} from "./special"
import "../../styles/public.css"
import "../../styles/cart.css"

class Cart extends  Component {
	constructor(props){
		super(props);
		this.state={
		
		}
		
	}
 
    render(){    
    	return (
    		<div>
    			<SpecialHeader lefttitle="<" contitle="购物车" / >
    			<Content>
    				<div className="cart">
				      <p className="cart-empty-img"><img src="img/cart1.png" / ></p>
				      <p className="cart-empty-tit">购物车空空的哟～</p>
				      <p className="cart-empty-subtit">全场优品特卖</p>
				      <p className="cart-empty-link"><a href="#" >逛一逛</a></p>
				    </div>
    			</Content>
    		</div>
    	)
        
    }
    componentDidMount() {
    	
		
 	}
   
}
export default Cart