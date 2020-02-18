// src/components/Table4Chart.js 
import React, { Component } from 'react';
import { Table } from 'reactstrap';

class Table4Chart extends Component {
  render() {
    return (
      <>
		<h2 style={{color: "#ed0722", textAlign: "center", fontWeight: "bold" }}>Financial Subscriptions</h2>
        <br />
        <Table striped hover size="sm" responsive light>
			  <thead style={{color: "white", background: "#ed0722"}}>
				<tr>
				  <th>#</th>
				  <th>LoC</th>
				  <th>Visa</th>
				  <th>MC Silver</th>
                  <th>MC Gold</th>
				</tr>
			  </thead>
			  <tbody>
				<tr>
				  <th scope="row">1</th>
				  <td>65</td>
				  <td>59</td>
				  <td>75</td>
                  <td>63</td>
				</tr>
				<tr>
				  <th scope="row">2</th>
				  <td>Dec "09</td>
				  <td>Dec "09</td>
				  <td>Dec "09</td>
                  <td>Dec "09</td>
				</tr>
			  </tbody>
			</Table>
    </>
    );
  }
}

export default Table4Chart;
