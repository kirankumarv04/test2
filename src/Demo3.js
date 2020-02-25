import React, { Component } from 'react';
import data from "./data"; 

class Example3 extends Component {
	render() {
		return (
            <div class="container">
                {
                  data.Skills.map((skill) => {
                    return (
                      <div>
                        <h4 class="heading2">{skill.Area}</h4>
                        <ul>
                          {
                            skill.SkillSet.map((skillDetail) => {
                              return (
                                  <li>
                                    {skillDetail.Name}
                                  </li>
                              );
                            })
                          }
                        </ul>
                      </div>
                    );
                  })
                } 
            </div>
        );
    }
} 
export default Example3;
