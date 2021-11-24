import React from 'react';

const Footer =()=>{
    return(
        <footer id="footer">
            <div className="container">
              <div className="section-title">
                <h3>VSK KALIDAS</h3>
                </div>
                <p>“All life is an experiment. The more experiments you make, the better.”</p>
                <div className="social-links">
                  <a href="https://www.facebook.com/VSKKalidas" className="facebook"><i className="bx bxl-facebook"></i></a>
                  <a href="https://www.linkedin.com/in/vsk-kalidas-36b14414/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
                <div className="copyright">
                  &copy; Copyright <strong><span>MyResume</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                  Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
            </div>
    </footer>
    )
}
export default Footer;