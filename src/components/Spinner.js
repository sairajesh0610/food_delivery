import React from "react";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import {appTheme} from '../utils/Constants';

const antIcon = <LoadingOutlined style={{ fontSize: 32,color:appTheme.primaryColor }} spin />;


const Spinner = () => {
    return (
        <Spin indicator={antIcon} />
    );
  };
  
  
  
  export default Spinner;