import React from 'react'
import {Button} from "antd";

class AnimationHome extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            show: true,
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className={this.state.show ? 'show': 'hidde'}> 简单的动画</div>
                <button onClick={this.buttonAction}> 颜色变化按钮 </button>

            </React.Fragment>

        )
    }
    buttonAction = () => {
        this.setState({
            show: !this.state.show
        })
    }
}

export default AnimationHome;