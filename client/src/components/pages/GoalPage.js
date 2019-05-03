import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
// import { Link, Route } from "react-router-dom";
import Navbar from '../elements/Navbar'
import GoalCard from '../elements/GoalCard';
import GoalForm from '../elements/GoalForm'
import AppBanner from '../elements/AppBanner';


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

// TODO: iterate over subgoals and make API calls to get ALL SUBGOAL Info and populate the subgoal_list variable

class GoalPage extends Component {
    
    state = {
        subgoal_list: [{}],
    }

    getUpdatedGoal = () => {
        axios.get(`/api/goal/${this.props.location.state.id}`).then((res) => {
            console.log("This goal's data --> " + JSON.stringify(res.data))
            this.setState({subgoal_list: res.data.subgoals})
        }).then( () => {
            // console.log("goal_list now looks like: " + this.state.goal_list)
        })
        
    }

    componentDidMount () {
        this.getUpdatedGoal()
        
    }


    render() {
        return (
            <div>
            {/* BANNER */}
                <AppBanner 
                    title={this.props.location.state.title} 
                    description={this.props.location.state.description} 
                />

            {/* NAVBAR */}
                <Navbar/>

            {/* FORM */}
                <PageContainer>
                    <GoalForm showGoals={this.getUpdatedGoal} post_path={`/api/goal/${this.props.location.state.id}/subgoal`} />
               
            {/* SUBGOALS */}
                    <CardContainer>
                        {this.state.subgoal_list.map(goal => {
                            // Displays the subgoals in a card format
                            return(
                                    <GoalCard
                                        title={goal.title}
                                        description={goal.description}
                                        id={goal._id}
                                        key={goal._id}
                                        // showGoals={this.showGoals}
                                    />
                                )
                            })}
                    {/* <i style={{marginLeft: "-15vw", marginTop: "4vw"}} class="fas fa-plus-circle fa-7x"></i> */}
                    </CardContainer>
                </PageContainer>
            </div>
        );
    }
}






export default GoalPage;