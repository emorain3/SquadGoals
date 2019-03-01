import React, { Component } from 'react';
import styled from 'styled-components';



let CardStyled = styled.section`
    margin: 2vw;
    min-width: 20vw;
    background-color: transparent;
    opacity: .8;
    &:hover {
        transform: scale(1.05);
        opacity: 1;
    }
`


class Card extends Component {
    render() {
        return (
            <div>
                <CardStyled className="tile is-ancestor is-transparent">
                    <CardStyled className="tile is-4 is-parent is-transparent">
                        
                        <div className="tile is-child box">
                            <p className="title"> {this.props.title} </p>
                            <p className="subtitle"> {this.props.description} </p>
                        </div>
                        
                    </CardStyled>

                </CardStyled>
            </div>
        );
    }
}







export default Card;