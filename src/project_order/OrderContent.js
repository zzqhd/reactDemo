import React from 'react'
import Axios from 'axios'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

class OrderContent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            domain: 'http://a.itying.com/',
            // react变量后面是个对象就要用对象，数组或者{}都可以，都是对象
            dataList:[]
        }
    }

    componentDidMount() {
        console.log(this.props);

        let _id = this.props.match.params.id;
        console.log('获取到到id:   '+ _id);

        this.requestData();
    }

    requestData = () => {
        let _id = this.props.match.params.id;
        console.log('获取到到id'+ _id);
        let url = this.state.domain + "api/productcontent?id=" + this.props.match.params.id;
        Axios.get(url).then((res)=> {
            console.log(res.data);
            let resultList = res.data.result;
            this.setState({
                dataList: resultList
            })

        }).catch((e)=> {

        });
    }


    render() {
        return (
            <div className='Order'>

                {/*图片*/}
                {
                    this.state.dataList.map((value, index) => {
                        return <div key={index}>
                            <div className='header'>
                                {/*商品图片*/}
                                <img src={`${this.state.domain}${value.img_url}`}/>
                                {/*价格*/}
                                <p className='price'>{value.price}元/份</p>
                            </div>
                            {/*商品详情*/}
                            <h3>商品详情 </h3>
                            {/*嵌入html 正确显示*/}
                            <div dangerouslySetInnerHTML={{__html: value.content}}></div>
                            {/*商品详情内容*/}

                            <footer className="pFooter">
                                <div className="cart">
                                    <strong>数量:</strong>
                                    <div className="cart_num">
                                        <div className="input_left">-</div>
                                        <div className="input_center">
                                            <input type="text"  readOnly="readonly" value="1" name="num" id="num" />
                                        </div>
                                        <div className="input_right">+</div>
                                    </div>
                                </div>

                                <button className="addcart">加入购物车</button>
                            </footer>
                        </div>

                    })
                }
            </div>

        )
    }

}

export default OrderContent;




{/*<div className="pcontent">*/}

    {/*<div className="back">  <Link to='/'>返回</Link></div>*/}

    {/*<div className="p_content">*/}
        {/*<div className="p_info">*/}
            {/*<img src={`${this.state.domain}${this.state.dataList.img_url}`} />*/}
            {/*<h2>{this.state.dataList.title}</h2>*/}
            {/*<p className="price">{this.state.dataList.price}/份</p>*/}
        {/*</div>*/}
        {/*<div className="p_detial">*/}
            {/*<h3>*/}
                {/*商品详情*/}
            {/*</h3>*/}
            {/*<div className="p_content"  dangerouslySetInnerHTML={{__html: this.state.dataList.content}}>*/}

            {/*</div>*/}
        {/*</div>*/}
    {/*</div>*/}


    {/*<footer className="pfooter">*/}

        {/*<div className="cart">*/}
            {/*<strong>数量:</strong>*/}
            {/*<div className="cart_num">*/}
                {/*<div className="input_left">-</div>*/}
                {/*<div className="input_center">*/}
                    {/*<input type="text"  readOnly="readonly" value="1" name="num" id="num" />*/}
                {/*</div>*/}
                {/*<div className="input_right">+</div>*/}
            {/*</div>*/}

        {/*</div>*/}

        {/*<button className="addcart">加入购物车</button>*/}
    {/*</footer>*/}


{/*</div>*/}