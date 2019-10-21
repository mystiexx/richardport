import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import {FaTwitter, FaFacebook, FaGithub, FaLinkedin} from 'react-icons/fa'

class Bottom extends Component {
    render() {
        return (
            <div>
                <Container>
                    <div className="footer d-flex justify-content-between p-2">
                        <div className="icon-bar">
                            <FaTwitter className="icon"/>
                        </div>
                        <div className="icon">
                            <FaFacebook className="icon"/>
                        </div>
                        <div className="icon">
                            <FaGithub className="icon"/>
                        </div>
                        <div className="icon">
                            <FaLinkedin className="icon"/>
                        </div>
                    </div>

                </Container>
                
            </div>
        );
    }
}

export default Bottom;
