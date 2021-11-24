import React from 'react';

import Chart from './Chart'

const Portfolio = () => {
return(

    <section className="portfolio" id="portfolio">  
        <div className="container" data-aos="fade-up">

                <div className="section-title">
                <h2>Portfolio</h2>
                </div>
                <div className="col-md-6">
                    <Chart></Chart>
                </div>    
                <div className="col-md-6">
                </div>    

        </div>
    </section>
       
)
}

export default Portfolio;