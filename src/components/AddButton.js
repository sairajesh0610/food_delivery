import React from "react";
import {Button } from 'antd';
import {appTheme} from '../utils/Constants';
import { PlusOutlined } from '@ant-design/icons';

export default function AddButton(props) {
  return (
    <Button 
        icon={<PlusOutlined />} type="primary"
        block 
        style={{backgroundColor: appTheme.primaryColor,
          borderColor: appTheme.primaryColor,
          color:'#fff'}}

        onClick={() => props.addToCart(props.product)}
        >
        ADD
    </Button>
  );
}
