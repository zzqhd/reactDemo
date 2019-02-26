import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Home from './components/Home'
import DataBind from './components/DataBind'
import TodoList from './components/TodoList'
import MyAxios from './components/NetHelper/MyAxios'
import FetchJsonp from './components/NetHelper/FetchJsonp'
import SuperComponent from './components/SuperChild/superComponent'
import RouterHome from './Router/components/RouterHome'
import RouteContent from './Router/components/RouterNextPage'
import './assets/css/app.css'
import HomeOrder    from './project_order/HomeOrder'
import OrderContent from './project_order/OrderContent'

class App extends Component {

  // render 模版  jsx,
  render() {
    return (
        <Router>
            <div>
                <header className="title">

                    <Link to="/">Home</Link>
                    <Link to="/Home">Home</Link>
                    <Link to="/TodoList">TodoList</Link>
                    <Link to="/SuperComponent">父子组件传值</Link>
                    <Link to="/MyAxios">MyAxios</Link>
                    <Link to="/FetchJsonp">FetchJsonp</Link>
                    <Link to='/HomeOrder'> HomeOrder </Link>

                </header>
                <hr/>
                <br/>
                <br/>
                <hr/>
                {/*URL path路由 -- 静态路由*/}
                <Route exact path="/" component={RouterHome} />
                <Route path="/Home" component={Home} />
                <Route path="/TodoList" component={TodoList} />
                <Route path="/SuperComponent" component={SuperComponent} />
                <Route path="/MyAxios" component={MyAxios} />
                <Route path="/FetchJsonp" component={FetchJsonp} />
                <Route path="/RouterHome" component={RouterHome} />
                <Route path="/HomeOrder" component={HomeOrder} />
                {/*动态路由*/}
                <Route path="/RouterContent/:myParams" component={RouteContent} />
                {/*get路由*/}
                <Route path="/RouterContent" component={RouteContent} />
                {/*动态路由*/}
                <Route path="/OrderContent/:id" component={OrderContent} />
            </div>

        </Router>
    );
  }
}

export default App;
