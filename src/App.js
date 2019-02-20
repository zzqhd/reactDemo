import React, { Component } from 'react';
import Home from './components/Home'
import DataBind from './components/DataBind'
import TodoList from './components/TodoList'
// import MyAxios from './components/NetHelper/MyAxios'
import FetchJsonp from './components/NetHelper/FetchJsonp'
import SuperComponent from './components/SuperChild/superComponent'

class App extends Component {

  // render 模版  jsx,
  render() {
    return (
      <div>
        {/*我是div*/}
        {/*<Home/>*/}
        {/*<DataBind/>*/}
        {/*<TodoList/>*/}
        {/*<SuperComponent/>*/}
        {/*<MyAxios/>*/}
        <FetchJsonp/>
      </div>
    );
  }
}

export default App;
