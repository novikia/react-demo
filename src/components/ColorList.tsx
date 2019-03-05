import * as React from "react";
import Color from "../ShapeColor";

interface ShapeColorListProps { colors: Color[], selectedColor: Color, onChange : (color: Color) => void }

export default class ShapeColorList extends React.Component<ShapeColorListProps> {
    render(){
        const colors = this.props.colors;
        const onChange = this.props.onChange;
        return <fieldset><legend>Colors:</legend>
        {colors.map((color) => <div key={color}><input type="radio" name="colors" checked={this.props.selectedColor == color}
            onChange={(e)=> onChange(color)} value={color}/>{color}</div>)}
        </fieldset>
    }
}