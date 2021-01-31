import React from "react";
import { Badge ,Button ,Skeleton } from 'antd';
import { DownOutlined ,UpOutlined } from '@ant-design/icons';
import {appTheme,IS_MOBILE} from '../../utils/Constants';
import {isNotEmpty} from '../../utils/Utils';
import AddButton from '../AddButton';
import UpdateButtons from '../UpdateButtons';
import './ProductCard.css';

const  showSavings=(it)=> {
    //console.log(it);
    let item = {};
    for (let i = 0; i < it.proditems.length; i++) {
      if (it.proditems[i].selected) {
        item = it.proditems[i];
        break;
      }
    }
    // console.log('showSavings');
    // console.log(item);
    if (item && item.promo) {
      let a = item.saving.indexOf('Rs');
      return (
        <div style={{
            backgroundColor:appTheme.badgeColor,
            paddingLeft:5,paddingRight:5,
            borderRadius: 3}}>
          <h6
            style={{
              color: '#fff',
              fontWeight: '700',
              fontSize: 12
            }}>
            {a != -1 ? item.savingtext : ''} {item.saving}{' '}
            {a == -1 ? item.savingtext : ''}
          </h6>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

const ProductsCard = ({product,cartItem,removeFromCart,addToCart,openProductDetail}) => {
    
        return(
            <div key={product.id} className="product-card" style={{width:IS_MOBILE  ? 150 : 235}}>
                <div className="prd-header" onClick={() => openProductDetail(product)}>
                {!isNotEmpty(product.image_url) ? 
                    <Skeleton.Image style={{height:130}}/> :
                        <img  src={product.image_url} height={(IS_MOBILE) ?"110px" : "130px" } className="hover-animation" />
                }             
                </div>
                <div className="prd-footer">
                <h4>{product.name}</h4>
                <h5 style={{color:'gray'}}>Size : {product.size}</h5>
                <h3>Price ₹{product.price}</h3> 
                

                        {cartItem ?  
                                       
                                        < UpdateButtons 
                                        cartItem={cartItem}
                                        product={product}
                                        removeFromCart={removeFromCart}
                                        addToCart={addToCart}
                                        /> :
                                        <AddButton 
                                        cartItem={cartItem }
                                        product={product}
                                       
                                        addToCart={addToCart}
                                        /> 
                                        } 


                 
                </div>
            </div>
         
       
        )
       
      


  
};

export default ProductsCard;