import * as React from "react";
import ShapeType from "../ShapeType";

interface ShapeTypeListProps { types: ShapeType[], selectedType: ShapeType, onChange : (type: ShapeType) => void  }

export default class ShapeTypeList extends React.Component<ShapeTypeListProps> {
    render(){
        const types = this.props.types;
        return <fieldset><legend>Types:</legend>{types.map((type) => <div key={type}>
            <input checked={this.props.selectedType == type} type="radio" name="types"
            value={type} onChange={()=>this.props.onChange(type)} />{type}</div>)}
        </fieldset>
    }
}