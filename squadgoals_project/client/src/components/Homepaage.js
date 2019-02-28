import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
// import { Link } from "react-router-dom";






////////////// STYLING
let PageContainer = styled.div`
    // border: solid green;
    width: 100vw;
    background-color: ivory;
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr 3fr;
    grid-template-areas: "sidenavbar banner"
                         "sidenavbar imagegrid";
    
    padding-top: 3vw;
`

let BannerImageShape = styled.img`
    border-left: solid #222222 15vw;
    border-right: solid #222222 15vw;
    border-top: solid #222222 3vw;
    margin-left: -8vw;
    width: 80vw;
    // height: 70vh;
    grid-area: banner;
`


let PageText = styled.h1`   
    margin-top: 2vw;
    margin-bottom: 1vw;
    margin-left: 2vw;
    font-family: 'Titillium Web', sans-serif;
`




/////////////////////////// COMPONENT DEFINITION /////////////////////////
class Homepage extends Component {
    state = {
        goal_list: [{}],
    }

    

    showGoals = () => {
        axios.get('/api/').then((res) => {
            console.log("THE DATA I WANT TO PARSE --> " + JSON.stringify(res.data))
            this.setState({goal_list:res.data})
        }).then( () => {
            console.log("goal_list now looks like: " + this.state.goal_list)
        })
        
    }

    componentDidMount () {
        this.showGoals()
        
    }

    componentWillReceiveProps(nextProps) {
        
    }


    render() {

        // Functions 

        // console.log("image_objects IN PARENT are: " + JSON.stringify(this.state.image_objects))
        return (
            <div>
                
                
            </div>
        );
    }
}

export default Homepage;