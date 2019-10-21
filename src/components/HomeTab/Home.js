import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import image from './smoke.png'

class Home extends Component {
    render() {
        return (
            <div>
                 <Container>
                  
                <div className="section-image d-flex justify-content-center">
                    <img src={image} alt="display" className="dis-image"/>
                </div>
               
                <div className="side-text">
                    <h6 >Eat,Sleep</h6>
                </div>

                <div className="right-text">
                    <h6>Code</h6>
                </div>
             
                </Container>
                
            </div>
        );
    }
}

export default Home;
