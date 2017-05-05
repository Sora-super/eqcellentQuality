/**
 * Created by hasee on 2017/4/27.
 */
import React,{Component} from "react";
import {Header,Content,Footer} from "../../components/public";
import "../../styles/public.css"
import "../../styles/special.css"

class SpecialHeader extends Component{
	 constructor(props){
        super(props); 
    }
    render(){
    	return 	<div className="specialHeaders">
					<a href="javascript:window.history.go(-1);" >{this.props.lefttitle}</a>
					<a href="#">{this.props.contitle}</a>	
					<a href="#">{this.props.righttitle}</a>	
				</div>
    }
}

class Special extends  Component {
    constructor(props){
        super(props); 
        this.state={
        	specialData : []
        }
    }
    
    render(){    
        return (
        	
            <div>  
            <SpecialHeader lefttitle="<" contitle="专题" />
           
  			<Content>
				<ul className="specialCon">
					{
						this.state.specialData.map((ele,i)=>
							<li>
								<div><a href="#/details"><img src={ele.bigimg} /> </a></div>
								<div>
									<a href="#/details"><img src={ele.smallimg1} /></a>
									<p>{ele.smallword1}</p>
									<p>
										<a>{ele.smallprice1}</a>
									</p>
								</div>
								<div>
									<a href="#/details"><img src={ele.smallimg2} /></a>
									<p>{ele.smallword2}</p>
									<p>
										<a>{ele.smallprice2}</a>
									</p>
								</div>
								<div>
								<a href="#/details">	<img src={ele.smallimg3} /></a>
									<p>{ele.smallword3}</p>
									<p>
										<a>{ele.smallprice3}</a>
									</p>
								</div>
							</li>
						
						)
					}
				
					
				</ul>
            </Content>
            	<Footer/>
            </div>
        )
    }
     componentDidMount(){
    	
   			fetch("mock/special.json").then(res=>res.json()).then((data)=>
   				//console.log(data[0].newdata[0].bigimg)
   				this.setState({
   					specialData:data[0].newdata
   				})
   			
   			)
    	
   }
}
export {
SpecialHeader,	Special
}
