import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import axios from 'axios';



let CardStyled = styled.section`
    margin: 0 auto;
    min-width: 20vw;
    background-color: transparent;
    opacity: .8;
    &:hover {
        transform: scale(1.05);
        opacity: 1;
    }
`

let EditButtonsContainer = styled.div`
    visibility: ${({ visibility }) => visibility};
`
let ZeroMargin = styled.div`
    margin: 0;
`

class Card extends Component {
    
    deleteGoal = (id) => {
        console.log("deleteGoal() on" + id + "called")
        axios.delete(`/api/goal/${id}`).then((res) => {
            console.log("Deleted...? --> " + JSON.stringify(res.data))
            this.props.showGoals()
        })
        
    }


    render() {
        return (
            <div>
                {/* <CardStyled className="tile is-ancestor is-transparent"> */}
                    <CardStyled className="tile is-4 is-parent is-transparent">
                        
                        <ZeroMargin className="tile is-child box">
                            <p className="title"> {this.props.title} </p>
                            <p className="subtitle"> {this.props.description} </p>
                           
                            {/*  Edit Buttons */}
                            <EditButtonsContainer class="edit_button_container" >

                                <Link to={`/goal/${this.props.id}`} >
                                    <i style={{color:"grey", marginLeft:"6vw", marginBottom:"0vw"}} class="fas fa-edit fa-2x"></i>
                                </Link>
                                
                                <Link to={'/'} onClick={() => this.deleteGoal(this.props.id)} > 
                                    <i style={{color:"grey", marginLeft:"2vw", marginBottom:"0vw"}} class="fas fa-trash-alt fa-2x"></i>
                                </Link> 
                                        
                            </EditButtonsContainer>
                        </ZeroMargin>
                        
                    </CardStyled>

                {/* </CardStyled> */}
            </div>
        );
    }
}







export default Card;