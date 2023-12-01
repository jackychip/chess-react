import Square from "../Square/Square";
import "./Board.css"

interface Piece {
    x: number
    y: number
    image: string
}

const pieces: Piece[] = []

function addPieces() {
    //white pawns
    for (let i = 0; i < 8; i++) {
        pieces.push({x: i, y: 6, image: "src/images/WhitePawn.svg" })
    }

    //black pawns
    for (let i = 0; i < 8; i++) {
        pieces.push({x: i, y: 1, image: "src/images/BlackPawn.svg" })
    }

    let pieceRow = 7

    //white pieces
    pieces.push({x: 0, y: pieceRow, image: "src/images/WhiteRook.svg"})
    pieces.push({x: 1, y: pieceRow, image: "src/images/WhiteKnight.svg"})
    pieces.push({x: 2, y: pieceRow, image: "src/images/WhiteBishop.svg"})
    pieces.push({x: 3, y: pieceRow, image: "src/images/WhiteQueen.svg"})
    pieces.push({x: 4, y: pieceRow, image: "src/images/WhiteKing.svg"})
    pieces.push({x: 5, y: pieceRow, image: "src/images/WhiteBishop.svg"})
    pieces.push({x: 6, y: pieceRow, image: "src/images/WhiteKnight.svg"})
    pieces.push({x: 7, y: pieceRow, image: "src/images/WhiteRook.svg"})

    pieceRow = 0

    //black pieces
    pieces.push({x: 0, y: pieceRow, image: "src/images/BlackRook.svg"})
    pieces.push({x: 1, y: pieceRow, image: "src/images/BlackKnight.svg"})
    pieces.push({x: 2, y: pieceRow, image: "src/images/BlackBishop.svg"})
    pieces.push({x: 3, y: pieceRow, image: "src/images/BlackQueen.svg"})
    pieces.push({x: 4, y: pieceRow, image: "src/images/BlackKing.svg"})
    pieces.push({x: 5, y: pieceRow, image: "src/images/BlackBishop.svg"})
    pieces.push({x: 6, y: pieceRow, image: "src/images/BlackKnight.svg"})
    pieces.push({x: 7, y: pieceRow, image: "src/images/BlackRook.svg"})
}

export default function Board() {
    let board = []
    addPieces()

    for (let column = 0; column < 8; column++) {
        for (let row = 0; row < 8; row++) {
            let isLightSquare = (column + row) % 2 == 0;
            let image = ""

            pieces.forEach((piece) => {
                if (piece.x == row && piece.y == column) {
                    image = piece.image
                }
            })

            board.push(
                <Square colour={isLightSquare} pieceSrc={image}/>
            )
        }
    }
    
    return <div id="board">{board}</div>
}