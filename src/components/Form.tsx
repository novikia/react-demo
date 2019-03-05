import * as React from "react";
import ShapeTypeList from "./ShapeTypeList";
import ShapeType from "../ShapeType";
import ShapeColorList from "./ColorList";
import ShapeColor from "../ShapeColor";
import { Figure } from "./Figure";

interface FormState {color: ShapeColor, type: ShapeType;}

export class Form extends React.Component<{}, FormState> {
    constructor(props: {}){
        super(props);
        this.state = {color: ShapeColor.Dark, type: ShapeType.Square};
    }

    render() {
        return <form>
            <ShapeTypeList types={[ShapeType.Circle, ShapeType.Square]} selectedType={this.state.type} onChange={type =>this.setState({type})}/>
            <ShapeColorList colors={[ShapeColor.Blue, ShapeColor.Red, ShapeColor.Dark]} selectedColor={this.state.color}
                onChange={color => this.setState({color})} />
            <Figure type={this.state.type} color={this.state.color} />
        </form>;
    }
}