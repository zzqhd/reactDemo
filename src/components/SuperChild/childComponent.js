import React from 'react'
import propTypes from 'prop-types'

class ChildComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            childMsg: "我是子组件的属性"
        }

    }

    childFunction () {
        alert("子组件function");
    }

    render() {

        return (
            <div>
                子类组件
                {/*子类获取父类传过来的props*/}

                <br/>
                {/* 1. 子类获取父类传过来的参数*/}
                {this.props.msg}
                <br/>
                {/* 2. 子类获取父类传过来的方法*/}
                <button onClick={this.props.superFunction} >父组件方法</button>
                <br/>
                {/* 3. 子类获取父类传过来的父组件本身*/}
                <button onClick={this.props.super.superAlert.bind(this,"子组件增加的数据")} >父组件方法</button>
                <br/>
            </div>
        );
    }


}

//defaultProps： 子组件用父组件传过来的值，就
ChildComponent.defaultProps = {
    msg: "默认的msg"
}
ChildComponent.propTypes = {
    msg: propTypes.string,
}

export default ChildComponent;