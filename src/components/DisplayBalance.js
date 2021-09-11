import React from 'react';
import {Statistic} from 'semantic-ui-react';


const DisplayBalance = ({size,label,value,color,style}) => {
    return (
        <Statistic size={size} color={color}>
         <Statistic.Label style={style}>{label}</Statistic.Label>
         <Statistic.Value>{value}</Statistic.Value>
       </Statistic>
        
    )
}

export default DisplayBalance
