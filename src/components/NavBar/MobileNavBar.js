import React, { Fragment } from 'react';
import { connect } from "react-redux";
import {  Badge} from 'antd';
import logo from "../../assets/logo.jpeg";
import { ShoppingCartOutlined,ArrowLeftOutlined } from '@ant-design/icons';
import "./NavBar.css";



import {appTheme} from '../../utils/Constants';






class MobileNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCartDrawer:false,
    }
  }


  componentDidMount(){
    console.log("componentDidMount", this.props.navProps)
  }
  



  goBack(){
    this.props.navProps.goBack();
  }

  openCartDrawer() {
    this.props.navProps.push('/cart');
  }



 



  
 


  render() {
    let { showMenuDrawer,showLoginModal, showCartDrawer,showContactUsModal } = this.state;
    let {isRootPage} = this.props;
    let cartcount = this.props.cart.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0)
    return (
      <Fragment>
        <div className="mobile-navbar-main">
            <div>
            {isRootPage ?
              <img src={logo} height="40px" width="40px" style={{marginLeft:20, verticalAlign:'bottom'}} />
            :
             <ArrowLeftOutlined  style={{ fontSize: '26px', color: '#000' }} onClick={this.goBack.bind(this)}/>
            }
            
            </div>
            
            <a style={{ display: 'flex', alignItems: 'center', paddingLeft: 10 }} onClick={this.openCartDrawer.bind(this)}>
              <Badge style={{backgroundColor:appTheme.primaryColor,borderColor:appTheme.secondaryColor}}
              count={cartcount}>
                <ShoppingCartOutlined style={{ fontSize: '30px', color: '#000' }} />
              </Badge>
            </a>
        
        </div>
        
        
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
export default connect(mapStateToProps, mapDispatchToProps)(MobileNavBar);

