import React, {Component} from 'react';
import '../assets/css/ColorCss.css'
import imgSrc from '../assets/images/example.gif'

// react 引用所有的对象，都要加{}

class Home extends Component {

    // 构造函数  props : 父子组件传值
    constructor(props) {
        super(props);
        this.state = {
            name: '张三',
            extraInfo: '额外的信息',
            style: {
                color: "gray",
                fontsize: "80px",
            },
            listData : ['我是list1','我是list2'],
            alertMessage1: '第一种获取方法',
            alertMessage2: '第二种获取方法',
            alertMessage3: '第三种获取方法',
        }
        this.run3 = this.run3.bind(this);
    }

    run(){
        alert("点击了run");
    }
    // 第一种获取方法
    run1(){
        alert(this.state.alertMessage1);
    }
    // 第二种获取方法
    run2 = ()=> {
        alert(this.state.alertMessage2);
    }
    // 第三种获取方法
    run3(){
        alert(this.state.alertMessage3);
    }
    //接收传入值，设置state变量
    setData = (str1,str2)=> {
        alert(str2);
        this.setState({
            name:str1,
        })
    }


    render() {

        let  listWidget = this.state.listData.map(function(value, index){
           return <li key={index}>{value}</li> ;
        });

        return (
            //和VUE一样 react所有节点都要被这一个根结点包括起来
            <div>
                <h2>
                    我是 -- name: {this.state.name}
                </h2>
                {/*绑定属性*/}
                <div title={this.state.extraInfo}>鼠标显示有关元素额外信息</div>
                <div className='red'> 属性 -- className</div>
                <label htmlFor='name'>我是</label>
                <input id='name'/>
                <div style={this.state.style}>行内样式</div>
                {/*图片*/}
                <hr/>
                图片示例 <br/>
                {/*<img src={require('../assets/images/example.gif')}/>*/}
                <img src={imgSrc}/>
                <ul>
                    <li>ul1</li>
                    <li>ul2</li>
                    {listWidget}
                </ul>
                <hr/>
                <button onClick={this.run}>点击弹窗</button>
                <hr/>
                <button onClick={this.run1.bind(this)}>点击弹窗获取state值 -- 第一种方法</button>
                <hr/>
                <button onClick={this.run2}>点击弹窗获取state值 -- 第二种方法</button>
                <hr/>
                <button onClick={this.run3}>点击弹窗获取state值 -- 第三种方法</button>
                <hr/>
                <button onClick={this.setData.bind(this,'我是传入参数1','我是传入参数2')}>传参设置state值 -- 第三种方法</button>


            </div>

        );
    }
}

export default Home;