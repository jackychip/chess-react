import "./Square.css"

export default function Square(props: { colour: boolean, pieceSrc: string }) {
    if (props.colour) {
        return <div className="square white_square"><img src={props.pieceSrc}/></div>
    }
    else {
        return <div className="square dark_square"><img src={props.pieceSrc}/></div>
    }
}