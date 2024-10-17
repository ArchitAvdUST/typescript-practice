type room = {
    id: number,
    capacity: number,
    ameneties: string[],
    price: number,
    isOccupied: boolean
}

class Hotel {
    rooms: room[] = [];


    sampleRooms() : void {
        this.rooms.push(
            {id:101, capacity:2, ameneties:["Hot Water", "King size bed"], price: 1000, isOccupied:false},
            {id:102, capacity:4, ameneties: ["King size bed", "Queen size bed", "Hot Water","Complementary Breakfast"],price: 2000,isOccupied:false},
            {id:103, capacity:2, ameneties:["King size bed"], price: 1000, isOccupied:false},
            {id:104, capacity:4, ameneties: ["King size bed", "Queen size bed", "Hot Water","Complementary Breakfast"],price: 2000,isOccupied:true},
        );
    }

    addRoom(room: room):void {
        this.rooms.push(room);
    }

    showAvailableRooms():room[] {
        let availRooms: room[] = [];
        this.rooms.forEach((room) => {
            if(room.isOccupied === false){
                availRooms.push(room);
            }
        });
        return availRooms;
    }
    

    bookRoom(id:number): void {
        let room = this.rooms.find((room) => room.id === id);
        if(typeof(room) == undefined){
            throw new console.error("Error");
        }
        else if(room?.isOccupied === false){
            console.log("Room booked successfully");
        }
        else if(room?.isOccupied === true){
            console.log("Room is already filled");
        }
        else{
            console.log("error");
        }
    }
}

let sheraton = new Hotel();
sheraton.sampleRooms();

sheraton.showAvailableRooms();
sheraton.bookRoom(102);
sheraton.showAvailableRooms();