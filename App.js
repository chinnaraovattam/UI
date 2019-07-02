import React, { Component } from 'react';
import './App.css';
import RecatTable from "react-table";
import Select from 'react-select';
import listReactFiles from 'list-react-files';
import "react-table/react-table.css";

const projectName = [
	{ label: "Connected Home", value: 1 },
	{ label: "Self-Service", value: 2 },
	{ label: "CMS Redisign", value: 3 },
	{ label: "BSS", value: 4 },
	{ label: "BFA", value: 5 },
];

/*const fs = require('fs');
const path = require('path');*/

const applicationName = [
	{ label: "Rogers", value: 1 },
	{ label: "Fido", value: 2 },
];

const serviceType = [
	{ label: "Legacy Internet", value: 1 },
	{ label: "Legacy TV", value: 2 },
	{ label: "Legacy Bundle", value: 3 },
	{ label: "Ignite Internet", value: 4 },
	{ label: "Ignite TV", value: 5 },
	{ label: "Ignite Bundle", value: 6 },
	{ label: "Fido HSI", value: 7 },
	{ label: "Fido Wireless", value: 8 },
	{ label: "Fido PostPaid", value: 9 },
	{ label: "Fido PrePaid", value: 10 },
];

class App extends React.Component {
	constructor(props) {
		super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
		this.state = {
       fileName: '',
        };
		this.state = {
			displayMenu: true,
		};
		this.showDropdownMenu = this.showDropdownMenu.bind(this);
		this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
	}

  handleChange(event) {
    this.setState({value: event.target.value});
  }

	state = {
        value: null
    };

	showDropdownMenu(event) {
		event.preventDefault();
		this.setState({ displayMenu: true }, () => {
			document.addEventListener('click', this.hideDropdownMenu);
		});
	}

	hideDropdownMenu() {
		this.setState({ displayMenu: false }, () => {
			document.removeEventListener('click', this.hideDropdownMenu);
		});

	}

	onChange = e => {
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
    };

	render() {
		const { fileName } = this.state;
            let file = null;

           file = fileName 
           ? ( <span>File Selected - {fileName}</span>) 
           : ( <span>Choose a file...</span> );

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
			},
			{
				Header: "Action",
				width: 80,
				maxWidth: 100,
				minWidth: 100,
				sortable: false,
				filterable: false,
				Cell: props => {
					return (
						<button style={{ backgroundColor: "Red", color: "#fefefe" }}
							onClick={() => {
								console.log("props", props)
							}}
						>Select</button>
					)
				}
			}

		]

		return (
			<div className="App">
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
							<div className="dropdown">
								<div className="container" onClick={this.showDropdownMenu}> Project Name </div>
								{this.state.displayMenu ? (
								<Select value={this.state.value} options={projectName} onChange={this.handleChange} />
									) :
										(
											null
										)
									}
								</div>
							<div className="dropdown" >
								<div className="container" onClick={this.showDropdownMenu}> Application Name </div>
								{this.state.displayMenu ? (
								<Select value={this.state.value} options={applicationName} onChange={this.handleChange} />
								) :
									(
										null
									)
								}
							</div>
							<div className="dropdown" >
								<div className="container" onClick={this.showDropdownMenu}> Service Type </div>
								{this.state.displayMenu ? (
								<Select value={this.state.value} options={serviceType} onChange={this.handleChange} />
									) :
										(
											null
										)
									}
							</div>
							<input className="button" type="submit" value="Search" />					
						</div>
                     </form>         
						<RecatTable
							columns={columns}
							
							filterable
							defaultPageSize={2}
							noDataText={"Plese be with us, required data is loading ..."}>
						</RecatTable>
						<input className="button" type="submit" value="Submit" />		
				</section>
			<footer className="footer">
              <p>© 2019 Rogers Digital Automation Services</p>
            </footer>
		 </body>				
		</div>

		);
	}
}

export default App;
