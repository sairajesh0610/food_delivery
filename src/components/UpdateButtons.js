import React from "react";
import {Button } from 'antd';
import {appTheme} from '../utils/Constants';
import { PlusOutlined,MinusOutlined } from '@ant-design/icons';

export default function UpdateButtons(props) {
    
  return (
    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                        <Button
                        type="primary"
                        style={{backgroundColor:appTheme.primaryColor,borderColor:appTheme.primaryColor }}
                        onClick={() => props.removeFromCart(props.cartItem)}
                        icon={<MinusOutlined />}           
                        />
                        <h3 style={{textAlign:'center'}}>{props.cartItem.quantity}</h3>
                        <Button
                        type="primary"
                        style={{backgroundColor:appTheme.primaryColor,borderColor:appTheme.primaryColor }}
                        onClick={() => props.addToCart(props.product)}
                        icon={<PlusOutlined />}           
                        />
                    </div>
  );
}
