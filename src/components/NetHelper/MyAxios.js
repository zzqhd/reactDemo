import React from 'react'
import axios from 'axios'
class MyAxios extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            dataList:[]
        }
    }

    getData = () => {
        console.log("开始获取网络数据");
        var _url = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20";

        axios.get(_url)
            .then( (response) => {
                // handle success
                console.log(response.data.result);
                this.setState({
                    dataList: response.data.result
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    };

    render() {
        return (
            <div>
                Axios -- 获取服务器数据
                <br/>
                <button onClick={this.getData}>获取</button>

                <ul>
                    {
                        this.state.dataList.map((value,key) => {
                            return <li key={key}> {value.title} </li>
                        })
                    }
                </ul>
            </div>
        )
    }

}
export default MyAxios;