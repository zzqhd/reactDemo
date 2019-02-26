import React,{Component} from 'react'
import ChildComponent from "./childComponent";

class SuperComponent extends Component{
    constructor(props) {
        super(props);

        this.state = {
            msg: "父类组件msg",
        }

    }
    //接收子组件传过来的数据
    superAlert (value) {
        alert("父组件 alert方法" + value);
    }

    //父组件调用子组件的属性和方法: 注意要在dom加载完成后调用refs，就是说不能写在组件里直接调用
    callChildProperites = () => {
        alert(this.refs.child.state.childMsg);
    };

    render() {
        return (
            <div>
                父类组件
                <br/>
                <button onClick={this.callChildProperites}>父组件调用子组件的属性和方法</button>

                <hr/>
                <ChildComponent msg={this.state.msg} superFunction={this.superAlert} super={this} ref='child'/>
                <hr/>

            </div>
        )
    }
}

export default SuperComponent;