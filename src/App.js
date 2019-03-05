import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import DataBind from './components/DataBind'
import './assets/css/app.css'
import OrderContent from './project_order/OrderContent'
import  RouterList from './Router/model/RouterTotal'

class App extends Component {

  // render 模版  jsx,
  render() {
    return (
        <Router>
            <div>
                <header className="title">
                    <Link to="/Home">Home</Link>
                    <Link to="/TodoList">TodoList</Link>
                    <Link to="/SuperComponent">父子组件传值</Link>
                    <Link to="/MyAxios">MyAxios</Link>
                    <Link to="/FetchJsonp">FetchJsonp</Link>
                    <Link to='/HomeOrder'> HomeOrder </Link>
                    <Link to='/RouterHome'> RouterHome </Link>

                </header>
                <hr/>
                {
                    RouterList.map((route,key)=>{

                        if ( route.routes != null) {
                            if (route.exact) {
                                return <Route exact path={route.path}  render={
                                    props => (
                                        <route.component {...props} routes={route.routes} />
                                    )
                                } />;
                            } else {
                                return <Route path={route.path} render={
                                    props => (
                                        <route.component {...props} routes={route.routes} />
                                    )
                                } />;
                            }
                        } else  {
                            if (route.exact) {
                                return <Route exact path={route.path} component={route.component} />;
                            } else {
                                return <Route path={route.path} component={route.component}/>;
                            }
                        }

                    })
                }
            </div>

        </Router>
    );
  }
}

export default App;
