import React from "react";
import TemperatureInput from "./TemperatureInput";
import Boilingverdict from "./Boilingverdict";
import { convert, toCelsius, toFarenheit } from "../lib/converter";

export default class Calculator extends React.Component {
    
    state = {temperature: '', scale: 'c' };
    handleChange = ( e, scale ) => {
        this.setState({
            temperature: e.target.value,
            scale
        });
    }
    render() {
        const { temperature, scale } = this.state;
        const celsius = scale == 'f' ? convert(temperature, toCelsius ) : temperature;
        const farenheit = scale == 'c' ? convert(temperature, toFarenheit ) : temperature;
        return (
            <div>
                <TemperatureInput scale="c" temperature={celsius} onTemparatureChange={this.handleChange}/>
                <TemperatureInput scale="f" temperature={farenheit} onTemparatureChange={this.handleChange}/>
                <Boilingverdict celsius={parseFloat(temperature)}/>
            </div>
        );
    }
}