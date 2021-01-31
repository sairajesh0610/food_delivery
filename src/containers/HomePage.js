import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { Layout, Card } from 'antd';


import DesktopNavBar from '../components/NavBar/DesktopNavBar';
import MobileNavBar from '../components/NavBar/MobileNavBar';


import Slider from '../components/Slider/Slider';
import ProductsCard from '../components/ProductsCard/ProductsCard';


import { IS_MOBILE, products } from '../utils/Constants';

import './styles/HomePage.css';


const { Header, Content } = Layout;

class HomePage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        const { loadProducts } = this.props;
        loadProducts(products);
        this.setState({
            products: this.props.products,
        });
    }








    render() {
        const { products } = this.state;
        const { addToCart, removeFromCart, cart } = this.props;
        return (
            <Fragment>
                {IS_MOBILE ? <MobileNavBar navProps={this.props.history} isRootPage={true} /> : <DesktopNavBar navProps={this.props.history} />}
                <div style={{ marginLeft: IS_MOBILE ? 0 : 50, marginRight: IS_MOBILE ? 0 : 50, marginTop: 8 }}>
                    <Slider />
                    {products && products.length !== 0 &&
                        <Card title="Products"
                            className={IS_MOBILE && "remove_mobile_padding"}
                        >
                            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                                {products.map((product) =>
                                    <ProductsCard
                                        key={product.id}
                                        product={product}
                                        addToCart={addToCart}
                                        removeFromCart={removeFromCart}
                                        cartItem={
                                            cart.filter(cartItem => cartItem.id === product.id)[0]
                                        }
                                    />
                                )}

                            </div>

                        </Card>
                    }
                </div>



            </Fragment>




        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart,
        products: state.products
    }
}
function mapDispatchToProps(dispatch) {
    return {
        loadProducts: products => {
            dispatch({ type: "LOAD", payload: products });
        },
        addToCart: item => {
            dispatch({ type: "ADD", payload: item });
        },
        removeFromCart: item => {
            dispatch({ type: "REMOVE", payload: item });
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);