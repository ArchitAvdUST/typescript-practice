type book = {
    bookName: string,
    author: string,
    isbn : string
}

type member = {
    membershipId: number,
    name : string,
    books: book[]
}

class Library {
    books: book[] = [];
    members: member[] = [];

    addMember(newMember: member): void {
        this.members.push(newMember)
    }

    addBook(newBook: book): void {
        this.books.push(newBook);
    }

    addBookToMember(addThisBook: book, forThisMember: member): void {
        this.members.forEach((member) => {
            if(forThisMember.membershipId === member.membershipId){
                member.books.push(addThisBook);
            }
            else{
                throw new console.error("Member not found");
            }
        })
    }

    sampleBookData() : void {
        this.books.push({bookName:"My Life", author:"Gururaj",isbn:"BK01"});
        this.books.push({bookName:"Maths", author:"Math Legend", isbn:"BK02"});
    }

    sampleMemberData(): void {
        this.members.push({membershipId: 1001, name:"Archit", books: []});
    }

}

const lib = new Library();
lib.sampleBookData();
lib.sampleMemberData();

console.log(lib.members[0]);

const testMember: member =  {membershipId: 1001, name:"Archit", books: []};
const testBook : book = {bookName:"My Life", author:"Gururaj",isbn:"BK01"};

lib.addBookToMember(testBook,testMember);

console.log(lib.members[0]);



