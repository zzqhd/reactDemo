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

    componentDidMount() {

        console.log(this.props);
    }

    render() {
        return (
            // this.props.routes.
            <div className="user">
                <div className="content">
                    <div className="left">
                        <Link to="/RouterNestHome/">个人中心</Link>
                        <br/>
                        <br/>
                        <Link to="/RouterNestHome/RouterNestSub2">用户信息</Link>
                    </div>

                    <div className="right">
                        {/*/!*传统写法，不用路由*!/*/}
                        {/*<Route exact path="/RouterNestHome/" component={RouterNestSub1}/>*/}
                        {/*<Route path="/RouterNestHome/RouterNestSub2" component={RouterNestSub2}/>*/}
                        {
                            // 路由模块化写法
                            this.props.routes.map((route,key) =>{
                                return <Route exact path={route.path} component={route.component} />
                            })
                        }
                    </div>

                </div>
            </div>
        );
    }
}

export default RouterNestHome