import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { Drawer, Button, Row, Col, Table } from 'antd';
import { PlusOutlined, MinusOutlined, CloseOutlined } from '@ant-design/icons';
import DesktopNavBar from '../components/NavBar/DesktopNavBar';
import MobileNavBar from '../components/NavBar/MobileNavBar';
import UpdateButtons from '../components/UpdateButtons';
import ord from '../assets/ord.png';
import { IS_MOBILE, appTheme } from '../utils/Constants';

class CartPage extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }


  cartTotal() {
    let sum = 0;
    this.props.cart.forEach(item => {
      const itemTotal = item.quantity * item.price;
      return (sum += itemTotal);
    });
    return sum.toFixed(2);
  }

  sort(items) {
    return items.sort((a, b) => a.id - b.id);
  }

  render() {
    const { addToCart, removeFromCart, cart } = this.props;
    const columns = [
      {
        title: 'Product Image',
        dataIndex: 'image_url',
        key: 'image_url',
        render: image_url => <img src={image_url} height="80px" />,
      },
      {
        title: 'Product Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
      },
      {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: 'quantity',
      },
      {
        title: 'Total',
        dataIndex: '',
        key: 'id',
        render: item => <h5>{item.quantity * item.price}</h5>
      },
      {
        title: 'Add',
        dataIndex: '',
        key: 'id',
        render: item => <Button
          type="primary"
          style={{ backgroundColor: appTheme.primaryColor, borderColor: appTheme.primaryColor }}
          onClick={() => this.props.addToCart(item)}
          icon={<PlusOutlined />} />
      },
      {
        title: 'Remove',
        dataIndex: '',
        key: 'id',
        render: item => <Button
          type="primary"
          style={{ backgroundColor: appTheme.primaryColor, borderColor: appTheme.primaryColor }}
          onClick={() => this.props.removeFromCart(item)}
          icon={<MinusOutlined />}
        />
      },
      {
        title: 'Remove All',
        dataIndex: '',
        key: 'id',
        render: item => <Button
          icon={<CloseOutlined />} type="primary"
          block
          style={{
            backgroundColor: appTheme.primaryColor,
            borderColor: appTheme.primaryColor,
            color: '#fff'
          }}

          onClick={() => this.props.removeAllFromCart(item)}
        >
          Remove All
            </Button>
      },
    ];
    return (
      <div>
        {IS_MOBILE ? <MobileNavBar navProps={this.props.history} isRootPage={false} /> : <DesktopNavBar navProps={this.props.history} />}
        <div style={{ marginLeft: IS_MOBILE ? 0 : 50, marginRight: IS_MOBILE ? 0 : 50, marginTop: 8 }}>
          <div style={{ display: 'grid', justifyItems: 'center', alignItems: 'center', marginTop: 20 }}>
            <img src={ord} height="100px" style={{ alignSelf: 'center' }} />
            <h2 style={{ fontWeight: 'bold' }}>Shopping Cart</h2>
            <h4>View your shopping cart and add/remove items</h4>



          </div>
          {IS_MOBILE ? <div>
            {this.sort(cart).map((product) => (
              <Row style={{marginBottom:12}}>
                <Col flex={2} style={{ alignItems: 'center' }}>
                  <img src={product.image_url} height="80px" />
                </Col>
                <Col flex={4}>
                  <div>
                    <h3>{product.name}</h3>
                    <h4>Price : {product.price}</h4>
                  </div>
                  <Button
                    icon={<CloseOutlined />} type="primary"
                    size={'small'}
                    style={{
                      backgroundColor: appTheme.primaryColor,
                      borderColor: appTheme.primaryColor,
                      color: '#fff'
                    }}

                    onClick={() => this.props.removeAllFromCart(product)}
                  >
                    Remove All
            </Button>
                </Col>
                <Col flex={2}>
                  <Button
                    type="primary"
                    style={{ backgroundColor: appTheme.primaryColor, borderColor: appTheme.primaryColor }}
                    onClick={() => this.props.addToCart(product)}
                    icon={<PlusOutlined />} />
                </Col>
                <Col flex={1}><h3>{product.quantity}</h3></Col>
                <Col flex={2}>
                  <Button
                    type="primary"
                    style={{ backgroundColor: appTheme.primaryColor, borderColor: appTheme.primaryColor }}
                    onClick={() => this.props.removeFromCart(product)}
                    icon={<MinusOutlined />}
                  />
                </Col>
              </Row>
            ))}
            <h2>Shopping Cart Total: {this.cartTotal()}</h2>
          </div>
            : <Table
              dataSource={this.sort(cart)}
              columns={columns}
              pagination={false}
              footer={() => <h2>Shopping Cart Total: {this.cartTotal()}</h2>} />
          }
        </div>

      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}
function mapDispatchToProps(dispatch) {
  return {
    addToCart: item => {
      dispatch({ type: "ADD", payload: item });
    },
    removeFromCart: item => {
      dispatch({ type: "REMOVE", payload: item });
    },
    removeAllFromCart: item => {
      dispatch({ type: "REMOVE_ALL", payload: item });
    }

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartPage);