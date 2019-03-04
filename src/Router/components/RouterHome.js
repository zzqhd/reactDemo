import React from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import RouterNestHome from "../RouterNest/RouterNestHome";

class RouterHome extends  React.Component{
    constructor(props) {
        super(props);
        this.state = {
            dataList: [
                "动态路由1",
                "动态路由2",
                "动态路由3",
            ],
            getRouterList: [
                "get路由1",
                "get路由2",
                "get路由3",
            ]
        }
    }

    render() {
        return (
            <div>
                RouterHome

                <ul>
                    {/*动态路由写法：不是引号是键盘上的esc，`/路由名/参数`*/}
                    {this.state.dataList.map((value, index)=>{
                        return <li key={index}> <Link to={`/RouterContent/${value}`}> {value} </Link></li>
                    })
                    }
                    {/*get路由写法：同动态路由的"引号"，*/}
                    {
                        this.state.getRouterList.map((value,index) => {
                            return (
                                <li key={index}>
                                    <Link to={`/RouterContent?aid=${value}`}>{value}</Link>
                                </li>
                            )
                    })
                    }
                    <Link to='/RouterNestHome' >跳转嵌套路由 </Link>

                    <Route path='/RouterNestHome' component={RouterNestHome} />

                </ul>
            </div>
        );
    }
}

export default RouterHome