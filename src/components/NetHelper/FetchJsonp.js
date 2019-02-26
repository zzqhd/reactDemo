import React from 'react'
import fetchJsonp from 'fetch-jsonp'
import ReactDOM from "react-dom"
import TabsControl from "../tab/TabsControl"

class FetchJsonp extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            dataList: [],
        }
    }

    getData = () => {
        console.log("开始获取网络数据");
        var _url = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20";

        fetchJsonp(_url)
            .then(function(response) {
                return response.json()
            }).then((json) => {
            console.log('parsed json', json);
            this.setState({

                dataList: json.result
            })

        }).catch(function(ex) {
            console.log('parsing failed', ex)
        })
    };


    render() {

        return (

            <div className="container">
                <TabsControl>
                    <div name="first">
                        第一帧
                    </div>
                    <div name="second">
                        第二帧
                    </div>
                    <div name="third">
                        第三帧
                    </div>
                </TabsControl>
            </div>
        );
    }

}
export default FetchJsonp;