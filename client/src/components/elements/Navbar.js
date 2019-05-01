import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";



let TransparentNav = styled.div`
    background-color: transparent;
    box-shadow: 0 8px 6px -6px black;
`


let NavText = styled.p`   
    font-family: 'Titillium Web', sans-serif;
    font-size: 1.75rem;
    margin-right: 3vw;
`

class Navbar extends Component {
    render() {
        return (
            
            <TransparentNav class="navbar is-transparent">
                

                <div className="navbar-menu">
                    <div className="navbar-end">
                        <Link className="navbar-item" to="/profile">
                            <NavText>
                                Profile
                            </NavText>
                        </Link>

                        <Link className="navbar-item" to="/calendar">
                            <NavText>
                                Calendar
                            </NavText>
                        </Link>
                   
                    </div>

                </div>
            </TransparentNav>
        );
    }
}

export default Navbar;