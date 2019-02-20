import React, {Component, Fragment} from 'react';

// 获取控件值方法 一：通过event.target.value + state中添加变量
// 获取控件值方法 二：通过ref获取dom节点 + state中添加变量

class DataBind extends Component{
    constructor(props) {
        super(props);

        this.state= {
            inputValue: '',
            keyboardValue: '',
            sex: 1,
            name: '',
            city: "北京",
            citys: [
                "北京","上海","杭州"
            ],
            hobbies: [
                {
                    "title": "吃饭",
                    "checked": true,
                },
                {
                    "title": "唱歌",
                    "checked": true,
                },
                {
                    "title": "看电影",
                    "checked": true,
                },
            ],
            info: "",
        }
    }

    certainClick = () => {
        alert(this.state.inputValue);
    }
    // 获取控件值方法 一：通过event.target.value + state中添加变量
    inputChange = (event) => {

        console.log(event.target.value);
        this.setState({
            inputValue : event.target.value,
        });
    }
    // 获取控件值方法 二：通过ref获取dom节点 + state中添加变量
    inputChange2 = (event) => {
        console.log('1');

        let valueTemp = this.refs.refID1.value;
        console.log(valueTemp);
        this.setState({
            inputValue: valueTemp,
        });

    }
    // Keyboard
    keyboardUp= (event) => {
        console.log(event.target.value);
        this.setState({
            keyboardValue: event.target.value,
        })
    }
    keyboardClick = (event) => {
        let str = this.state.keyboardValue;
        str = str+'啊';
        this.setState({
            keyboardValue: str,
        })
        alert(this.state.keyboardValue);
    }
    //form 表单
    formSubmit =(e) => {
        e.preventDefault();
        console.log("姓名:"+this.state.name);
        console.log("性别:"+this.state.sex);
        console.log("城市:"+this.state.city);
        console.log("爱好:");
        console.log(this.state.hobbies);
        console.log("备注:"+this.state.info);

    }
    nameInputChange =(e) => {
        this.setState({
            name: e.target.value,
        })
    }
    radioInputChange = (e) => {
        this.setState({
            sex: e.target.value,
        })
    }
    cityInputChange = (e) => {
        this.setState({
            city: e.target.value,
        })
    }
    hobbyInputChange = (e) => {
        var hobby = this.state.hobbies;
        hobby[e].checked = !hobby[e].checked;
        this.setState({
            hobbies:hobby
        })
    }
    textareaChange = (e) => {
        this.setState({
            info: e.target.value,
        })
    }

    render() {
        return (
            <Fragment>
                {/*获取控件的两种方法*/}
                <input onChange={this.inputChange} />
                <button onClick={this.certainClick}> 确定 -- event.target</button>
                <hr/>
                <input ref="refID1" onChange={this.inputChange2} />
                <button onClick={this.certainClick}> 确定 -- ref获取dom节点</button>
                <hr/>
                {/*双向绑定*/}
                <input onKeyUp={this.keyboardUp}/> <button onClick={this.keyboardClick}>确定 -- 双向绑定</button>
                <br/>
                <label> {this.state.keyboardValue} </label>

                <hr/>
                <h2> react表单 </h2>
                <form onSubmit={this.formSubmit}>
                    <br/>
                    用户名: <input onChange={this.nameInputChange}/>
                    <br/>
                    性别:
                    <input type="radio" defaultValue="1" checked={this.state.sex == 1} onChange={this.radioInputChange}/>男<input type="radio" defaultValue="2" checked={this.state.sex == 2} onChange={this.radioInputChange}/>女
                    <br/>
                    城市:
                    <select value={this.state.city} onChange={this.cityInputChange}>
                        {
                            this.state.citys.map(function (value,key) {
                                return <option key={key}>{value}</option>
                            })
                        }
                    </select>
                    <br/>
                    爱好:
                    {
                        this.state.hobbies.map((value, key) => {
                            console.log("key: " + key + " Value: " + value);
                            return (
                                <div key={key}>
                                    <input type="checkbox" checked={value.checked} onChange={this.hobbyInputChange.bind(this,key)}/> {value.title}
                                </div>
                            )
                        })
                    }
                    <br/>
                    <textarea value={this.state.info} onChange={this.textareaChange}></textarea>


                    <br/>
                    <input type="submit" defaultValue="提交"/>
                </form>
            </Fragment>
        );
    }
}

export default DataBind;