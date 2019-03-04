import React from 'react'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RouterNestSub1 from '../RouterNest/RouterNestSub1';
import RouterNestSub2 from '../RouterNest/RouterNestSub2';
import './RouterNest.css'

class RouterNestHome extends  React.Component{
    constructor(props) {
        super(props);
        this.state = {
            param: "",
        }
    }

    render() {
        return (
            <div className="user">
                <div className="content">
                    <div className="left">
                        <Link to="/RouterNestHome/">个人中心</Link>
                        <br/>
                        <br/>
                        <Link to="/RouterNestHome/RouterNestSub2">用户信息</Link>
                    </div>

                    <div className="right">
                        <Route exact path="/RouterNestHome/" component={RouterNestSub1}/>
                        <Route path="/RouterNestHome/RouterNestSub2" component={RouterNestSub2}/>
                    </div>

                </div>
            </div>
        );
    }
}

export default RouterNestHome

{/*<div>*/}
{/*RouterNestHome*/}
{/*<div>*/}
{/*<Link to='/RouterNestHome/RouterNestSub1'> 子页面1 </Link>*/}

{/*<br />*/}
{/*<br />*/}

{/*<Link to='/RouterNestHome/RouterNestSub2'> 子页面2 </Link>*/}

{/*</div>*/}

{/*<div>*/}
{/*<Route path='/RouterNestHome/RouterNestSub1' component={RouterSub1} />*/}
{/*<Route path='/RouterNestHome/RouterNestSub2' component={RouterSub2} />*/}

{/*</div>*/}
{/*</div>*/}