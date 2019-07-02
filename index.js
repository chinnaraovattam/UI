import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RogersUI from './RogersUI';
import * as serviceWorker from './serviceWorker';

//var displayAutomationInformation = (
 //     <div style={{display: 'flex', justifyContent: 'center'}} >
 //       <RogersUI />
 //     </div>
  //    );

	  ReactDOM.render(<RogersUI />, document.querySelector('#root'));
//ReactDOM.render(displayAutomationInformation, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker();
