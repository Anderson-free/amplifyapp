import React from 'react';
import Swap from './swap';
import {SwapNavigation} from './home_page/components/swapnavigation';

const RouteApp = () => {
    return (
        <div>
            <SwapNavigation />
            <Swap/>
        </div>
      )
}
export default RouteApp