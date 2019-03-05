import * as React from "react";
import ShapeType from "../ShapeType";
import ShapeColor from "../ShapeColor";
import styled from "styled-components";

interface FigureProps {color: ShapeColor, type: ShapeType;}

const StyledDiv = styled.div`
background-color: ${props => props.color};
border-color: ${props => props.color};
margin-top: 25px;
margin-left: 25px;
height: 100px;
width: 100px;
`

const StyledSquare = styled(StyledDiv)``;

const StyledCircle = styled(StyledDiv)`
border-radius: 50%;
`
const StyledTrianagle = styled(StyledDiv)`
border-color: transparent transparent ${props => props.color} transparent;;
`

export class Figure extends React.Component<FigureProps> {
    render() {
        switch(this.props.type){
            case ShapeType.Square: return <StyledSquare {...this.props} />;
            case ShapeType.Circle: return <StyledCircle {...this.props} />;
            default: return null;
        }
    }
}