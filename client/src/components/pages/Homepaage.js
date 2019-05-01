import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link, Route } from "react-router-dom";
// import { Link } from "react-router-dom";
import AppBanner from '../elements/AppBanner'
import Navbar from '../elements/Navbar'
import Card from '../elements/Card';
import GoalForm from '../elements/GoalForm'
// import GoalPage from './GoalPage'
// import CalendarPage from './CalendarPage'


////////////// STYLING
let PageContainer = styled.div`
    // border: solid green;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    // align-items: flex-start;
    flex-wrap: wrap;

    margin-top: 2vw;

    height: auto;
`

let CardContainer = styled.div`
    // border: solid red;
    
    display: flex;
    justify-content: center;
    align-items: space-evenly;
    flex-wrap: wrap;
    
    // margin-top: 5vw;
    max-width: 75vw;
`

// let AddButton = styled.i`
//     margin-left: -15vw
//     margin-top: 5vw
// `


// let PageText = styled.h1`   
//     margin-top: 2vw;
//     margin-bottom: 1vw;
//     margin-left: 2vw;
//     font-family: 'Titillium Web', sans-serif;
// `




/////////////////////////// COMPONENT DEFINITION /////////////////////////
class Homepage extends Component {
    state = {
        goal_list: [{}],
    } 

    showGoals = () => {
        axios.get('/api/').then((res) => {
            // console.log("THE DATA I WANT TO PARSE --> " + JSON.stringify(res.data))
            this.setState({goal_list:res.data})
        }).then( () => {
            // console.log("goal_list now looks like: " + this.state.goal_list)
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
                <AppBanner/>
                <Navbar/>

                <PageContainer>
                    <GoalForm showGoals={this.showGoals}/>
                    <CardContainer>
                        {this.state.goal_list.map(goal => {
                            // Store the mapped list returned to a variable and render the variable here. THEN Access that list in the Route call.
                            return(
                                <Link to={{ pathname: `/goal/${goal._id}`, state:{title: goal.title,
                                                                                    description: goal.description,
                                                                                    id: goal._id,
                                                                                    showGoals: this.showGoals
                                                                                }}} key={goal._id}> 
                                    <Card
                                    title={goal.title}
                                    description={goal.description}
                                    id={goal._id}
                                    showGoals={this.showGoals}
                                    />
                                </Link>
                                )
                            })}
                    {/* <i style={{marginLeft: "-15vw", marginTop: "4vw"}} class="fas fa-plus-circle fa-7x"></i> */}
                    </CardContainer>
                </PageContainer>
                
                {/* <Route exact path="/goal/:goalId" component={ GoalPage } /> */}
                {/* <Route path="/calendar" component={CalendarPage} /> */}

            </div>
        );
    }
}

export default Homepage;