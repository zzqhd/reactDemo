import React, {Component} from 'react';
import '../assets/css/ColorCss.css'
import Mystorage from '../model/MyStorage'

class TodoList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            dataList: [
            ],
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
        })
    };
    checkBoxChange = (key) => {
        var tempList = this.state.dataList;
        tempList[key].checked = !tempList[key].checked;
        this.setState({
            dataList: tempList,
        })
    };

    componentDidMount() {
        var  tempList = Mystorage.getStorage("todoList");
        if (tempList) {
            this.setState({
                dataList: tempList,
            })
        }
    }
    //键盘按下
    keyboardUpChange = (e) => {
        console.log(e.keyCode);
        if (e.keyCode == "13") {
            this.clickActionAdd(e);
        }
    };

    render() {
        return (
            <div>
                <h2> TodoList </h2>
                <input ref="ref1" onKeyDown={this.keyboardUpChange}/> <button onClick={this.clickActionAdd}> 点击</button>
                <hr/>

                未完成
                <hr/>
                <ul className='todoList'>
                    {
                        this.state.dataList.map(function (value,key){
                            if (!value.checked) {
                                return (
                                    <li key={key}> <input type="checkbox" checked={value.checked} onChange={this.checkBoxChange.bind(this,key)} />  {value.title} -- <button onClick={this.clickActionDelete.bind(this, key)}>删除</button>

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