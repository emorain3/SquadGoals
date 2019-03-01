import React, { Component } from 'react';
import styled from 'styled-components';



let CardStyled = styled.section`
    margin: 2vw;
    background-color: transparent;
`


class Card extends Component {
    render() {
        return (
            <div>
                <div className="tile is-ancestor">
                    <CardStyled className="tile is-4 is-parent">
                        
                        <div className="tile is-child box">
                            <p className="title">One</p>
                            <p className="subtitle">Subtitle</p>
                        </div>
                        
                    </CardStyled>

                </div>
            </div>
        );
    }
}







export default Card;