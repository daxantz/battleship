class Gameboard {

    initializeBoard(size) {
        const board = [];
        for (let row = 0; row < size; row++) {
          board[row] = [];
          for (let col = 0; col < size; col++) {
            board[row][col] = '0'; // 'O' represents an empty cell
          }
        }
        return board;
      }
    constructor(size){
        this.ships = [];
        this.size = size;
        this.board = this.initializeBoard(size)
        this.missedAttacks = [];

        
    }

    isValidPlacement(ship,row,col,direction){
        if((direction === "horizontal" && col + ship.length > this.size) 
        || (direction === "vertical" && row + ship.length > this.size)){
            return false;
        }

        return true;
    }

    placeShip(ship, row, col, direction){
        if(!this.isValidPlacement(ship, row, col, direction)){
            return console.log("invlaid placement")
        }

        if(direction === "horizontal"){
            for(let i = 0; i< ship.length; i++){
                this.board[row][col + i] = ship.id;
                
            }
        } else if(direction === "vertical"){
            for(let i = 0; i< ship.length; i++){
                this.board[row + i][col] = ship.id;
                
            }
        }
        this.ships.push(ship);
        
    }

    recieveAttack(row,col, ship){
        if(this.board[row][col] === ship.id){
            ship.hit()
            this.board[row][col] = 'H' //part of ship that is hit
        } else if(this.board[row][col] === '0'){
            this.board[row][col] = "X"; // coordinate that didnt have ship
            console.log("Missed ship");
        }else{
            alert("cell already attacked");
        }

    }

    missedAttacks(row, col){
        
        this.missedAttacks.push({row, col});
        
        
        console.log("These are the missed attacks", this.missedAttacks)
    }

    shipsSunk(){
        console.log("All ships have been sunk");
        return this.ships.every(ship => ship.isSunk());
    }
   
}

export {Gameboard};