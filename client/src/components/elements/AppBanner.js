import React, { Component } from 'react';
import styled from 'styled-components';




let BoxShadow = styled.section`
    box-shadow: 0 8px 6px -6px black;
`


let PageText = styled.h1`   
    font-family: 'Titillium Web', sans-serif;
    font-size: 6rem;
`


class AppBanner extends Component {
    render() {
        return (
            <div>
                <BoxShadow className="hero is-medium is-primary is-bold">
                    <div className="hero-body">
                        <div className="container">
                        <PageText className="title">
                            {this.props.title}
                        </PageText>
                        <h2 className="subtitle">
                            {this.props.description}
                        </h2>
                        </div>
                    </div>
                </BoxShadow>
            </div>
        );
    }
}






export default AppBanner;