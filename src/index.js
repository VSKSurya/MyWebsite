import React from 'react';
import ReactDOM from 'react-dom';


//import Objective from './Components/Objective';
import HeaderVSK from './Components/Header';
import SelfImage from './Components/SelfImage';
import Resume from './Components/Resume';

import AboutMe from './Components/AboutMe';

import Portfolio from './Components/Portfoli'

import Contactus from './Components/contactus';

import Footer from './Components/Footer';


class App extends React.Component{

    render()
    {
        return(
            <div>
                <HeaderVSK></HeaderVSK>
          
                <SelfImage></SelfImage>
                <main id="main">
                    <AboutMe></AboutMe>
                    
                    <Resume></Resume>

                    <Portfolio></Portfolio>

                    <Contactus></Contactus>

                </main>
                <Footer></Footer>
            </div>
        )
    }
}
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)