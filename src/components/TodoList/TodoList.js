import React, {Component} from 'react';
import '../../assets/css/ColorCss.css'
import Mystorage from '../../model/MyStorage.js'
import { Button,Input} from 'antd';

class TodoList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            dataList: [],
        }

    }
    clickActionAdd = (e) => {
        console.log("增加：" + this.refs.ref1.value);

        var tempList = this.state.dataList;
        tempList.push({
            title: this.refs.ref1.value,
            checked: false
        });
        this.refs.ref1.value = '';
        this.setState({
            dataList: tempList,
        },()=>{
            console.log(this.state)

        });
        // localStorage.setItem(,JSON.stringify(tempList));
        Mystorage.setStorage("todoList",tempList)
    };
    clickActionDelete = (key)=> {
        console.log("删除下标：" + key);
        var tempList = this.state.dataList;
        tempList.splice(key,1);
        this.refs.ref1.value = '';
        this.setState({
            dataList: tempList,
        },()=>{

        })
    };
    checkBoxChange = (key) => {
        var tempList = this.state.dataList;
        tempList[key].checked = !tempList[key].checked;
        this.setState({
            dataList: tempList,
        })
    };

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log(nextProps.state.dataList)
    //     return (nextProps.dataList != this.props.dataList);
    // }

    componentDidMount() {
        var  tempList = Mystorage.getStorage("todoList");
        if (tempList) {
            this.setState({
                dataList: tempList,
            }, ()=> {
            })
        }
    }
    //键盘按下
    keyboardUpChange = (e) => {
        if (e.keyCode == "13") {
            this.clickActionAdd(e);
        }
    };

    render() {
        return (
            <div style={{marginLeft: '20px',marginRight: '20px'}}>
                <h2> TodoList </h2>
                <Input placeholder="增加代办事项"  ref="ref1" onKeyDown={this.keyboardUpChange}
                       style={{width: '300px', marginBottom: '20px', marginRight: '20px'}}
                />
                <Button type="primary" onClick={this.clickActionAdd}> 点击</Button>
                <hr/>

                未完成
                <hr/>
                <ul className='todoList'>
                    {
                        this.state.dataList.map(function (value,key){
                            console.log( value);
                            if (!value.checked) {
                                return (
                                    <li key={key}>
                                        <input type="checkbox" checked={value.checked} onChange={this.checkBoxChange.bind(this,key)} />
                                        {value.title} --
                                        <button onClick={this.clickActionDelete.bind(this, key)}>删除</button>

                                    </li>
                                )
                            }
                        }.bind(this))
                    }
                </ul>

                已完成
                <hr/>
                <ul className='todoList'>
                    {
                        this.state.dataList.map(function (value,key){
                            if (value.checked) {
                                return (
                                    <li key={key}> <input type="checkbox" checked={value.checked} onChange={this.checkBoxChange.bind(this,key)} />  {value.title} -- <button onClick={this.clickActionDelete.bind(this, key)}>删除</button>
                                    </li>
                                )
                            }
                        }.bind(this))
                    }
                </ul>
            </div>
        );
    }


}

export default TodoList;