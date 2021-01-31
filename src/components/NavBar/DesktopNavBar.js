import React, { Fragment } from 'react';
import { connect } from "react-redux";
import {
  Row, Col,
  Badge
} from 'antd';
import logo from "../../assets/logo.jpeg";
import {
 ShoppingCartOutlined,
} from '@ant-design/icons';
import "./NavBar.css";
import { Link } from 'react-router-dom';
import { appTheme } from '../../utils/Constants';
import Search from '../Search';





class DesktopNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }

  }

  componentDidMount() {

  }

  openCartPage=()=>{
    this.props.navProps.push('/cart');
  }







  render() {
    let { userdata } = this.props;
    let cartcount = this.props.cart.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0)
    return (
      <Fragment>
        {/* ----NavBar ---- */}
        <Row type="flex" className="navbar-main">
          <Col span={2} style={{ display: 'flex', alignItems: 'center' ,justifyContent:'center'}}>
            <Link to={'/'}>
              <img src={logo} style={{ alignSelf: 'center', justifySelf: 'center' }} height="40px" width="40px" />
            </Link>
          </Col>
          <Col span={19} style={{ display: 'flex', alignItems: 'center' ,justifyContent:'center'}}>
              <Search navProps={this.props.navProps} />
          </Col>
          <Col span={3} style={{ display: 'flex', alignItems: 'center' }}>
            <a style={{ display: 'flex', alignItems: 'center', paddingLeft: 10 }} 
             onClick={this.openCartPage.bind(this)}
            >
              <Badge style={{ backgroundColor: appTheme.primaryColor, borderColor: appTheme.secondaryColor }}
                count={cartcount}>
                <ShoppingCartOutlined style={{ fontSize: '30px', color: '#000' }} />
              </Badge>
              <h3 style={{ marginLeft: 20, color: '#000' }}>My Cart</h3>
            </a>
          </Col>
        </Row>
      </Fragment>

    );
  }
}


function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}
function mapDispatchToProps(dispatch) {
  return {
   
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DesktopNavBar);

