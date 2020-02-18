// src/components/FinProdBarGraph01.js 
import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
  labels: ['LoC', 'Visa', 'MC Silver', 'MC Gold'],
  datasets: [
    {
      label: 'Financial Products',
      backgroundColor: 'rgba(237,7,34,0.8)',
      borderColor: 'rgba(237,7,34,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(210,7,237,0.7)',
      hoverBorderColor: 'rgba(210,7,237,1)',
      data: [65, 59, 75, 63]
    }
  ]
};

class FinProdBarGraph01 extends Component {
  // displayName: 'BarExample',
  render() {
    return (
      <>
        <Bar
          data={data}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: true
          }}
        />
      </>
    );
  }
}

export default FinProdBarGraph01;
