var Hotel = /** @class */ (function () {
    function Hotel() {
        this.rooms = [];
    }
    Hotel.prototype.sampleRooms = function () {
        this.rooms.push({ id: 101, capacity: 2, ameneties: ["Hot Water", "King size bed"], price: 1000, isOccupied: false }, { id: 102, capacity: 4, ameneties: ["King size bed", "Queen size bed", "Hot Water", "Complementary Breakfast"], price: 2000, isOccupied: false }, { id: 103, capacity: 2, ameneties: ["King size bed"], price: 1000, isOccupied: false }, { id: 104, capacity: 4, ameneties: ["King size bed", "Queen size bed", "Hot Water", "Complementary Breakfast"], price: 2000, isOccupied: true });
    };
    Hotel.prototype.addRoom = function (room) {
        this.rooms.push(room);
    };
    Hotel.prototype.showAvailableRooms = function () {
        var availRooms = [];
        this.rooms.forEach(function (room) {
            if (room.isOccupied === false) {
                availRooms.push(room);
            }
        });
        return availRooms;
    };
    Hotel.prototype.bookRoom = function (id) {
        var room = this.rooms.find(function (room) { return room.id === id; });
        if (typeof (room) == undefined) {
            throw new console.error("Error");
        }
        else if ((room === null || room === void 0 ? void 0 : room.isOccupied) === false) {
            console.log("Room booked successfully");
        }
        else if ((room === null || room === void 0 ? void 0 : room.isOccupied) === true) {
            console.log("Room is already filled");
        }
        else {
            console.log("error");
        }
    };
    return Hotel;
}());
var sheraton = new Hotel();
sheraton.sampleRooms();
sheraton.showAvailableRooms();
sheraton.bookRoom(102);
sheraton.showAvailableRooms();
