import React, { Component } from 'react';


class RouterNestSub1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg:'我是个人中心'
        };
    }
    render() {
        return (
            <div className="info">
                嵌套路由1
            </div>
        );
    }
}

export default RouterNestSub1;
