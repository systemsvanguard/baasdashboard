// src/components/Table4DualMonth.js 
import React, { Component } from 'react';
import { Table } from 'reactstrap';

class Table4DualMonth extends Component {
  render() {
    return (
      <>
		<br /><br />
		<h2 style={{color: "#0722ed", textAlign: "center", fontWeight: "bold" }}>Two Month Product Change</h2>
        <br />
        <Table striped hover size="sm" responsive light>
			  <thead style={{color: "white", background: "#0722ed"}}>
				<tr>
				  <th>#</th>
				  <th>Product</th>
				  <th>Dec 2019</th>
				  <th>Jan 2020</th>
				</tr>
			  </thead>
			  <tbody>
				<tr>
				  <th scope="row">1</th>
				  <td style={{color: "#0722ed", fontWeight: "bold" }}>Line of Credit</td>
				  <td>65</td>
				  <td>60</td>
				</tr>
				<tr>
				  <th scope="row">2</th>
				  <td style={{color: "#0722ed", fontWeight: "bold" }}>Visa</td>
				  <td>59</td>
				  <td>70</td>
				</tr>
				<tr>
				  <th scope="row">3</th>
				  <td style={{color: "#0722ed", fontWeight: "bold" }}>MC - Silver</td>
				  <td>75</td>
				  <td>80</td>
				</tr>
				<tr>
				  <th scope="row">4</th>
				  <td style={{color: "#0722ed", fontWeight: "bold" }}>MC - Gold</td>
				  <td>63</td>
				  <td>75</td>
				</tr>				
			  </tbody>
			</Table>
    </>
    );
  }
}

export default Table4DualMonth;
