import React, { Component } from 'react';
import data from "./data"; 

const socialMediaList = data.SocialMedias;

class Example1 extends Component {
	render() {
		return (
			<div class="container">
				<div class="row list">
					<div class="col-md-4">
	            		<ul>
	                		{socialMediaList.map(s => (<input type="text" value={s} class="form-control"/>))}
	            		</ul>
	            		<button class="btn btn-success">submit</button>
	            	</div>
	            	<div class="col-md-8">
	            		<img src={"https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"} class="img-thumbnail" alt=""/>
	            	</div>
	            </div>
            </div>
        );
    }
} 
export default Example1;