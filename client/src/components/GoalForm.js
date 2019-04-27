import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import '../App.css';


let FormStyled = styled.div`
    // position: fixed;
    background-color: transparent;
    
    margin-top: 2vw;
    margin-left: 2vw;
    margin-right: 2vw;
    
    padding: 2vw;

    width: 20vw;
    box-shadow: 4px 10px 30px #001f3f;
`
let InputStyled = styled.input`
    background-color: none;
`

class GoalForm extends Component {

    state = {
        title: '',
        description: '',
        image_url: '',
      };

      onChange = (e) => {
        /*
          Because we named the inputs to match their
          corresponding values in state, it's
          super easy to update the state
        */
        this.setState({ [e.target.name]: e.target.value });
      }


      handleSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const { title, description, image_url } = this.state;

        axios.post('/api/goal', { title, description, image_url  } )
          .then((result) => {
            console.log("successful delivery!")
            this.props.showGoals()
          });
      }


    render() {
        const { title, description, image_url } = this.state;
        return (
            <FormStyled>
                <form onSubmit={this.handleSubmit} method="post">
                        <div className="field">
                            <label className="label" for=" title"> Title: </label>
                            <input onChange={this.onChange} value={title} className="input" name="title" id="i_name" placeholder="What is the name of this item?"/>
                        </div>

                        <div className="field">
                            <label className="label" for="description"> Description: </label>
                            <input onChange={this.onChange} value={description} className="input" name="description" id="i_name" placeholder="describe this item..."/>
                        </div>

                        <div className="field">
                            <label className="label" for="image_url"> Image URL:  </label>
                            <input onChange={this.onChange} value={image_url} className="input" name="image_url" id="i_image" placeholder="What is the name of this item?"/>
                        </div>
                        
                    
                        <div className="field">
                            <button className="button is-link" onClick={this.handleSubmit}>Submit </button>
                        </div>
                    </form>
            </FormStyled>
        );
    }
}

export default GoalForm;