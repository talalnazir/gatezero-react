import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {


  return (
    
    <div>
      
      <div className="bottom-navbar">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul>
                  <li><NavLink exact activeClassName="active" to='/user' >Dashboard</NavLink></li>
                  <li><NavLink activeClassName="active" to='/user/problemdescription'>Problem</NavLink></li>
                  <li><NavLink activeClassName="active" to='/user/customeractor'>Customer</NavLink></li>
                  <li><NavLink activeClassName="active" to='/user/problemvalidation'>Validation</NavLink></li>
                  <li><NavLink activeClassName="active" to='/user/solutionscorecard'>Solution</NavLink></li>
                  <li><NavLink activeClassName="active" to='/user/cruxcompetitive'>CRUX-Competitive</NavLink></li>
                  <li><NavLink activeClassName="active" to='/user/cruxalignment'>CRUX-Alignment</NavLink></li>
                  <li><NavLink activeClassName="active" to='/user/cruximpact'>CRUX-Impact</NavLink></li>
                  <li><NavLink activeClassName="active" to='/user/purchasedecisionalignment'>Purchase Decision</NavLink></li>
                  <li><NavLink activeClassName="active" to='/user/revenuescore'>Revenue</NavLink></li>
                  <li><NavLink activeClassName="active" to='/user/solutionriskscore'>Solution Risk</NavLink></li>
                  <li><NavLink activeClassName="active" to='/user/fundingscore'>Funding</NavLink></li>
                  <li><NavLink activeClassName="active" to='/user/marketingscore'>Marketing</NavLink></li>
                  <li><NavLink activeClassName="active" to='/user/pmcmalignment'>PMCM</NavLink></li>
                  <li><NavLink activeClassName="active" to='/user/demandpeak'>Demand Peak</NavLink></li>
                  <li><NavLink activeClassName="active" to='/user/results'>Final Result</NavLink></li> 
              </ul> 
            </div>
          </div>
        </div>    
      </div>
          
    </div>

    
  )
}


