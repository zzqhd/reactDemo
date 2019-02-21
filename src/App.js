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

class App extends Component {

  // render 模版  jsx,
  render() {
    return (
        <Router>
            <div>
                <ul>
                    <li> <Link to="/">Home</Link> </li>
                    <li> <Link to="/Home">Home</Link> </li>
                    <li> <Link to="/TodoList">TodoList</Link> </li>
                    <li> <Link to="/SuperComponent">父子组件传值</Link> </li>
                    <li> <Link to="/MyAxios">MyAxios</Link> </li>
                    <li> <Link to="/FetchJsonp">FetchJsonp</Link> </li>
                </ul>
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
                {/*动态路由*/}
                <Route path="/RouterContent/:myParams" component={RouteContent} />
                {/*get路由*/}
                <Route path="/RouterContent" component={RouteContent} />

            </div>

        </Router>
    );
  }
}

export default App;
