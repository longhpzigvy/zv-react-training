import { Spin } from "antd";
import React from 'react';



function Preloader() {
    return (
        <div>
             <Spin style={{textAlign: 'center'}} size="large" />
        </div>
    );
}

export default Preloader;