class Ship {
    constructor(length){
        this.length = length;
        this.hits = 0;
        this.sunk = false;
    }
    

    hit(){
        this.hits++;
        this.length--;
        console.log(this.hits)
    }

    isSunk(){
        
        if(this.hits === this.length) {
            console.log("the ship has been hit too many times its sunk");
            this.isSunk = true
        } 
        console.log("the ship can take more hits it isnt sunk yet");
        this.isSunk = false;
    }
}

export {Ship};