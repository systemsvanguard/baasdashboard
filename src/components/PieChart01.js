// src/components/PieChart01.js 
import React from 'react';
import {Pie} from 'react-chartjs-2';

const PieChart01 = (props) => {
	const data = {
	  labels: ['LoC', 'Visa', 'MC Silver', 'MC Gold'],
	  datasets: [
		{
		data: [65, 59, 75, 63], 
		backgroundColor: [
		  "#d207ed",
		  "#22ed07",
		  "#ed0722",
		  "#07edd2"
		  ]
		}
	  ]
	}  

	const options = {
	  title: {
		display: true,
		text: "Financial Products",
		fontFamily: "Roboto",
		fontSize: 20,
	  }
	}  

  return (
    <Pie data={data} options={options} />
  )
}

export default PieChart01; 