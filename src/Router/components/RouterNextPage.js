import React from 'react'
import url from 'url'
class RouterNextPage extends  React.Component{
    constructor(props) {
        super(props);
        this.state = {
            param: "",
            getParams: "",
        }
    }

    componentDidMount() {

        let syncRouter = this.props.match.params.myParams;
        let getRouter  = url.parse(this.props.location.search,true).query;

        console.log(this.props);
        console.log(this.props.location.search);
        this.setState({

            param: syncRouter,
            getParams: getRouter.aid
        })
    }

    render() {
        return (
            <div>
                RouterContent接收的内容 --动态路由：{this.state.param}
                <br/>
                RouterContent接收的内容 --get路由：{this.state.getParams}

            </div>
        );
    }
}

export default RouterNextPage