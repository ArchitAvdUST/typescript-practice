type seat = {
    id: number,
    taken: boolean
};

class theatre {
    seats: seat[] = [];
    capacity: number = 0;

    constructor(capacity: number){
        this.capacity = capacity;
        for(let i = 0; i < capacity ; i++){
            this.seats.push({id: i , taken: false});
        }
    }

    showSeats(): void {
        console.log("Available Seats:");
        for(let i = 0; i < this.capacity ; i++){
            if(this.seats[i].taken === false){
                console.log(i + ",");
            }
        }
    }

    chooseSeat(id: number): void {
        if(this.seats[id].taken === false){
            console.log("Seat not available");
        }
        else{
            this.seats[id].taken = true;
            console.log("Seat booked successfully");
        }
    }

}

const pvr = new theatre(30);
console.log("Seats:")
pvr.showSeats();

console.log("Choose seat");



