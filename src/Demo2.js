import React, { Component } from 'react';
import data from "./data"; 

class Example2 extends Component {
	render() {
		return (
            <div>
                {
					data.Experiences.map((experience, i) => {
						return (
							<div key={i}>
								<div class="container">
									<div class="row">
										<div class="col-md-12">
											{experience.roles.map(function (role, i) { 
												return <div key={i}>
													<h5 class="heading2">{role.title}</h5>
													<span>{role.startDate}</span><br/>
													<span>{role.location}</span>
													<p>{role.description}</p>
												</div>
											})}
										</div>
									</div>
								</div>
							</div>
						);
					})
				}
            </div>
        );
    }
} 
export default Example2;
