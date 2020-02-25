import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./style.css";

import Demo1 from './Demo1';
import Demo2 from './Demo2';
import Demo3 from './Demo3';
 
class App extends Component {
    render() {
        return (
            <div className="App">
            	<h2 class="heading">Simple React Application to Read Json Data</h2> 
				<Demo1></Demo1>
				<Demo2></Demo2>
				<Demo3></Demo3>
            </div>
        );
    }
}
 
export default App;
