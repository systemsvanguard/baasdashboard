// src/components/FinProdBarGraph02.js 
import React from 'react';
import {Bar} from 'react-chartjs-2';

const FinProdBarGraph02 = (props) => {
  const data = {
    labels: ["LoC", "Visa", "Silver MC", "Gold MC"],
    datasets: [
      {
        data: [65, 59, 75, 63],
        backgroundColor: "#ed0722",
        label: "Dec 2019"
    },
      {
        data: [60, 70, 80, 75],
        backgroundColor: "#0722ed",
        label: "Jan 2020"
    }
    ]
  }

  const options = {
        scales: {
            yAxes: [
              {
                  ticks: {
                     callback: function(label, index, labels) {
                       return '$' + label;
                     }
                  }
              }
            ]
        },

    }

  return (
    <Bar data={data} options={options} />
  )
}

export default FinProdBarGraph02;
