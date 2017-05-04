/**
 * Created by hasee on 2017/4/27.
 */
import React,{Component} from "react";
import {Header,Content,Footer} from "../../components/public";
import "../../styles/public.css"
import "../../styles/register.css"

class Login extends  Component {
    constructor(props){
        super(props); 
    }
    
    render(){    
        return (
        	
            <div>  
            <Header lefttitle="<" contitle="注册"/>
  			<Content>
				<div className="shurukuang">
					<input type="text" placeholder="验证码"/>
					<input id="phone" type="text" placeholder="手机号"/>
					<input type="text" placeholder="短信验证码"/>
					<input id="phonepass" type="text" placeholder="密码"/>
				</div>
				<a className="zhuce" >
					注册
				</a>
				<div className="forget">
					<a></a>
					<a>注册表示同意《优品惠服务协议》</a>
				</div>
            </Content>
            	<Footer/>
            </div>
        )
    }
     componentDidMount(){
    	
   			
    	var reg = document.getElementsByClassName("zhuce")[0];
    	reg.onclick = function(){
    		//组件加载完毕
    		var phone = document.getElementById("phone").value;
    		var passsword = document.getElementById("phonepass").value;
    		if((/^1[34578]\d{9}$/).test(phone)){
    			
    			localStorage.setItem(phone,passsword)	;		
    			if(phone.length==0||passsword.length==0){
    			alert("请至少输入手机号和密码")
    			}else{
    				location.href="#/login"
    			}
    		}else{
    			alert("手机号格式不正确")		
    		}

    		
    		
    	}
   }
}
export default Login