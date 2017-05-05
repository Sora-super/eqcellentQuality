import React from  "react";
import ReactDOM from  "react-dom";
import {Router,Route,hashHistory} from  "react-router"


import Login from  "./routers/Home/login"
import Myself from "./routers/Home/myself"
import Index from  "./routers/Home/index"

import Register from  "./routers/Home/register"
import {SpecialHeader,Special} from  "./routers/Home/special"
import Details from  "./routers/Home/details"
import Cart from  "./routers/Home/cart"

ReactDOM.render(<div>
  <Router history={hashHistory}>
    <Route path="/" component={Index}/>
    <Route path="/myself" component={Myself}/>
    <Route path="/login" component={Login}/>
    <Route path="/register" component={Register}/>
    <Route path="/special" component={Special}/>
    <Route path="/details" component={Details}/>
    <Route path="/cart" component={Cart}/>
 
  </Router>
</div>, document.getElementById('root'));




/*ReactDOM.render(<Login/>,document.getElementById("root"))*/



/*模块热替换*/
if (module.hot) {
    module.hot.accept();
}








