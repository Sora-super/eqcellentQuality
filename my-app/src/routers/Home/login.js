/**
 * Created by hasee on 2017/4/27.
 */
import React,{Component} from "react";
import {Header,Content,Footer} from "../../components/public";
import "../../styles/public.css"
import "../../styles/login.css"

class Login extends  Component {
    constructor(props){
        super(props); 
    }
    
    render(){    
        return (
        	
            <div>  
            <Header lefttitle="<" contitle="登录"/>
  			<Content>
				<div className="denglushurukuang">
					<input id="username" type="text" placeholder="请输入账号"/>
					<input id="passsword" type="text" placeholder="请输入密码"/>
				</div>
				<a className="denglu" >
					登录
				</a>
				<div className="forget">
					<a>新用户注册</a>
					<a>忘记密码</a>
				</div>
            </Content>
            	<Footer/>
            </div>
        )
    }
    
    componentDidMount(){
    	
    	var login = document.getElementsByClassName("denglu")[0];
    	login.onclick = function(){
    		var username = document.getElementById("username").value;
    		var passsword = document.getElementById("passsword").value;
    		console.log(localStorage.getItem(username))
    		console.log(passsword)
    		if(username.length==0){
    			alert("用户名或者密码不能为空")
    		}else{
    			if(localStorage.getItem(username)!==passsword){
    				
    				alert("用户名或者密码错误")
    			}else{
    				location.href="#/"
    			}
    		}
    		
    	}
    }
  
}
export default Login