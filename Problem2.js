var theatre = /** @class */ (function () {
    function theatre(capacity) {
        this.seats = [];
        this.capacity = 0;
        this.capacity = capacity;
        for (var i = 0; i < capacity; i++) {
            this.seats.push({ id: i, taken: false });
        }
    }
    theatre.prototype.showSeats = function () {
        console.log("Available Seats:");
        for (var i = 0; i < this.capacity; i++) {
            if (this.seats[i].taken === false) {
                console.log(i + ",");
            }
        }
    };
    theatre.prototype.chooseSeat = function (id) {
        if (this.seats[id].taken === true) {
            console.log("Seat not available");
        }
        else {
            this.seats[id].taken = true;
            console.log("Seat booked successfully");
        }
    };
    return theatre;
}());
var pvr = new theatre(30);
console.log("Seats:");
pvr.showSeats();
console.log("Choose seat");
pvr.chooseSeat(23);
