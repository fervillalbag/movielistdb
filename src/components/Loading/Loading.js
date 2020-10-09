
import React from 'react';
import { Spin } from 'antd';

import './Loading.scss';

const Loading = () => {
   return (
      <div className="loading">
         <Spin size="large" />
         <h4 style={{ marginTop: '0.75rem' }}>Cargando</h4>
      </div>
   );
}

export default Loading;