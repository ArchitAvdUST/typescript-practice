"use strict";
class theatre {
    constructor(capacity) {
        this.seats = [];
        this.capacity = 0;
        this.capacity = capacity;
        for (let i = 0; i < capacity; i++) {
            this.seats.push({ id: i, taken: false });
        }
    }
    showSeats() {
        console.log("Available Seats:");
        for (let i = 0; i < this.capacity; i++) {
            if (this.seats[i].taken === false) {
                console.log(i + ",");
            }
        }
    }
    chooseSeat(id) {
        if (this.seats[id].taken === false) {
            console.log("Seat not available");
        }
        else {
            this.seats[id].taken = true;
            console.log("Seat booked successfully");
        }
    }
}
const pvr = new theatre(30);
console.log("Seats:");
pvr.showSeats();
console.log("Choose seat");