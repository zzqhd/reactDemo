import React from 'react'
import {Button} from "antd";
import './css/animation_keyframe.css'
import './css/animation_csstransition.css'
import { CSSTransition } from 'react-transition-group';

class Animation_keyframe extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            show: true,
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className={this.state.show ? 'show2': 'show1'}> 简单的动画</div>
                <CSSTransition
                    in={this.state.show}
                    timeout={1000}
                    // 这里className有个S一定要注意
                    classNames='fade'
                    // 动画完成 移除dom
                    unmountOnExit
                    // 动画进场完成后，调用，同时调用，css的设置会失效
                    onEntered={(el)=>{
                        el.style.color = 'blue'
                    }}
                    // 在第一次加载页面的时候，也执行动画
                    appear={true}
                >
                    <div> CSSTransition动画 </div>
                </CSSTransition>
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

export default Animation_keyframe;