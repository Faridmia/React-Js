import React from "react";

const ScaleNames = {
    c: 'Celsius',
    f:'Fahrenheit',
}
export default function TemperatureInput ( { temperature, scale, onTemparatureChange } ) {

    return (
        <fieldset>
            <legend>Enter temperature in {ScaleNames[scale]} </legend>
            <input type="text" value={temperature} onChange={(e) => onTemparatureChange( e, scale )}/>
        </fieldset>
    );
   
}