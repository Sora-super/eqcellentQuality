import React from  "react";
import ReactDOM from  "react-dom";
import {Router,Route,hashHistory} from  "react-router"

import Index from  "./routers/Home/index"


const App = ()=>

<Router history={hashHistory}>

    <Route path="/" component={Index} />
 
</Router>;



ReactDOM.render(<App/>,document.getElementById("root"))




/*模块热替换*/
if (module.hot) {
    module.hot.accept();
}








