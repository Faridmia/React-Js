import React from "react";

export default class Calculator extends React.Component {
    state = {
        temperature: '',
    };

    onTemparatureChange = (e) => {
        this.setState({
            temperature: e.target.value,
        })
    }

    render() {
        const {temperature} = this.state;

        return (
            <fieldset>
                <legend>Enter temperature in celcius</legend>
                <input type="text" value={temperature} onChange={this.onTemparatureChange}/>
            </fieldset>
        );
    }
}