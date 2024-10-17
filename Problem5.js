var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
        this.members = [];
    }
    Library.prototype.addMember = function (newMember) {
        this.members.push(newMember);
    };
    Library.prototype.addBook = function (newBook) {
        this.books.push(newBook);
    };
    Library.prototype.addBookToMember = function (addThisBook, forThisMember) {
        this.members.forEach(function (member) {
            if (forThisMember.membershipId === member.membershipId) {
                member.books.push(addThisBook);
            }
            else {
                throw new console.error("Member not found");
            }
        });
    };
    Library.prototype.sampleBookData = function () {
        this.books.push({ bookName: "My Life", author: "Gururaj", isbn: "BK01" });
        this.books.push({ bookName: "Maths", author: "Math Legend", isbn: "BK02" });
    };
    Library.prototype.sampleMemberData = function () {
        this.members.push({ membershipId: 1001, name: "Archit", books: [] });
    };
    return Library;
}());
var lib = new Library();
lib.sampleBookData();
lib.sampleMemberData();
console.log(lib.members[0]);
var testMember = { membershipId: 1001, name: "Archit", books: [] };
var testBook = { bookName: "My Life", author: "Gururaj", isbn: "BK01" };
lib.addBookToMember(testBook, testMember);
console.log(lib.members[0]);
