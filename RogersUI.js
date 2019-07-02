import React, { Component } from 'react';
import './App.css';
import RecatTable from "react-table";
import Select from 'react-select';
import listReactFiles from 'list-react-files';
import "react-table/react-table.css";
/*import clsx from "clsx"
import PropTypes from "prop-types"
import { lighten, makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TablePagination from "@material-ui/core/TablePagination"
import TableRow from "@material-ui/core/TableRow"
import TableSortLabel from "@material-ui/core/TableSortLabel"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import Checkbox from "@material-ui/core/Checkbox"
import IconButton from "@material-ui/core/IconButton"
import Tooltip from "@material-ui/core/Tooltip"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Switch from "@material-ui/core/Switch"
import DeleteIcon from "@material-ui/icons/Delete"
import FilterListIcon from "@material-ui/icons/FilterList"*/

/*const fs = require('fs');
const path = require('path');*/

const rows = [
  {
    application: "fido",
    project: "connectedHome",
    service: "tests",
    testCaseName: "sample_1 copy 2"
  },
  {
    application: "fido",
    project: "connectedHome",
    service: "tests",
    testCaseName: "sample_1 copy 3"
  },
  {
    application: "fido",
    project: "connectedHome",
    service: "tests",
    testCaseName: "sample_1 copy 4"
  },
    {
    application: "rogers",
    project: "connectedHome",
    service: "igniteInternet",
    testCaseName: "sample_2"
  }
]

/*function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}*/

/*function getSorting(order, orderBy) {
  return order === "desc"
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy)
}*/

/*function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort
  } = props
  const createSortHandler = property => event => {
    onRequestSort(event, property)
  }*/

class RogersUI extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: '', value1: '',    value2: ''  };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		//this.state = {
      // fileName: '',
      //  };
	}

    handleChange(event) {this.setState({value: event.target.value, value: event.target.value1 , value: event.target.value2});}

	handleSubmit(event) {
	alert('Your favorite flavor is: ' + this.state.value + this.state.value1 +this.state.value2);
	event.preventDefault();
  }

/*	onChange = e => {
    switch (e.target.name) {
      // Updated this
      case 'selectedFile':
        if(e.target.files.length > 0) {
            // Accessed .name from file 
            this.setState({ fileName: e.target.files[0].name });
        }
      break;
      default:
        this.setState({ [e.target.name]: e.target.value });
     }
    };*/

	render() {
		//const { fileName } = this.state;
            //let file = null;

        /*   file = fileName 
           ? ( <span>File Selected - {fileName}</span>) 
           : ( <span>Choose a file...</span> );*/

		const columns = [
			{
				Header: "Application",
				accessor: "userId",
				style: {
					textAlign: "middel"
				},
				width: 120,
				maxWidth: 100,
				minWidth: 100
			},
						{
				Header: "Project Name",
				accessor: "id",
				style: {
					textAlign: "middel"
				},
				width: 120,
				maxWidth: 100,
				minWidth: 100
			},
			{
				Header: "Service Type",
				accessor: "id",
				style: {
					textAlign: "middel"
				},
				width: 120,
				maxWidth: 100,
				minWidth: 100
			},
			{
				Header: "Test Script Name",
				accessor: "title",
				sortable: false,
				filterable: false,
				width: 350,
				maxWidth: 100,
				minWidth: 100,
				style: {
					textAlign: "left"
				}
			},
			{
				Header: "Test Case Name",
				accessor: "body",
				sortable: false,
				filterable: false,
				width: 350,
				maxWidth: 100,
				minWidth: 100,
				style: {
					textAlign: "left"
				}
			}
		]

		return (
			<div className="RogersUI">
				<header className="App-header">
					<h1> Welcome to Rogers Digital Automation</h1>
					<div>
                       <li className="side"><a className="App-link" href="https://www.rogers.com/" target="_blank" rel="noopener noreferrer" >Rogers.com</a></li>
					   <li className="side"><a className="App-link" href="https://www.fido.ca/" target="_blank" rel="noopener noreferrer" >Fido.ca</a></li>
					   <li className="side"><a className="App-link" href="https://www.fido.ca/" target="_blank" rel="noopener noreferrer" >Digital Applications</a></li>
                       <li className="side"><a className="App-link" href="https://reqcentral.com/wiki/display/DigiAUTO/Rogers+Connected+Home+Manual+Test+Suite+Assessment+for+Automation"
							target="_blank" rel="noopener noreferrer" >Digital Automation</a></li>
					</div> 
				</header>
				<body>  
                <section>
                    <form onSubmit={this.handleSubmit} >
						<div className="dropdowns">
								<label> Application : 
								          <select className="dropdown" value1={this.state.value1} onChange={this.handleChange}>
                                            <option value="Select">Select...</option>
                                            <option value="Rogers">Rogers</option>
                                            <option value="Fido">Fido</option>
										 </select>	</label>									
								<label> Project Name : 
								          <select className="dropdown" value={this.state.value} onChange={this.handleChange}>
										    <option value="Select">Select...</option>
                                            <option value="Connected Home">Connected Home</option>
                                            <option value="Self-Service">Self-Service</option>
                                            <option value="CMS Redisign">CMS Redisign</option>
                                            <option value="BSS">BSS</option>
			                                <option value="BFA">BFA</option>
                                         </select></label>								
							    <label> Service Type :
								          <select className="dropdown" value2={this.state.value2} onChange={this.handleChange}>
                                             <option value="Select">Select...</option>
                                             <option value="Legacy Internet">Legacy Internet</option>
                                             <option value="Legacy TV">Legacy TV</option>
                                             <option value="Legacy Bundle">Legacy Bundle</option>
			                                 <option value="Ignite TV">Ignite TV</option>
			                                 <option value="Ignite Internet">Ignite Internet</option>
                                             <option value="Ignite Bundle">Ignite Bundle</option>
                                             <option value="Fido Wireless">Fido Wireless</option>
                                             <option value="Fido PostPaid">Fido PostPaid</option>
			                                 <option value="Fido PrePaid">Fido PrePaid</option>
			                                 <option value="Fido HSI">Fido HSI</option>
                                         </select></label>
							</div>
						<input className="button" type="submit" value="Search" />					
                     </form>  
					 <form>    
						<RecatTable
							columns={columns}
							
							filterable
							defaultPageSize={3}
							noDataText={"Plese be with us, required data is loading ..."}>
						</RecatTable>
						<input className="button" type="submit" value="Submit" />
					</form>   		
				</section>
			  <footer className="footer">
              <p>© 2019 Rogers Digital Automation Services</p>
            </footer>
		 </body>				
		</div>

		);
	}
}

export default RogersUI;