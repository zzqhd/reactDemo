import React from 'react'
import Axios from 'axios'
import './css/HomeOrder.css'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'


class HomeOrder extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            domain: 'http://a.itying.com/',
            dataList:[]
        }
    }

    requestData = () => {
        let api = this.state.domain + 'api/productlist';
        Axios.get(api)
            .then((res)=> {
                this.setState({
                    dataList: res.data.result,
                })
                console.log(res.data.result)
            })

    }

    componentDidMount() {
        this.requestData();
    }

    render() {
        return (
            <div className='Order'>
                <button> <Link to='/Login'> 跳转登陆 </Link> </button>

                {
                        this.state.dataList.map((value, index) => {
                            return <div key={index} className='List'>
                                <p> {value.title} </p>
                                <ul className='List_section'>
                                    {
                                        value.list.map((value2, index2) => {
                                            return (
                                                    <li key={index2}>
                                                        <Link to={`/OrderContent/${value2._id}`}>

                                                        <img src={`${this.state.domain}${value2.img_url}`}/>
                                                        <p>{value2.title}</p>
                                                        <p className='price'>{value2.price}元</p>
                                                        </Link>

                                                    </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        })
                    }

            </div>
        )
    }

}

export default HomeOrder;