/*jslint vars: true, devel:true, nomen: true, node: true, indent: 4, maxerr: 50*/
var text;
text = "Hello World";
var i;

for (i = 0; i < 10; i++) {
    if (i === 3) {
        console.log("Orphan Black");
    } else {
        console.log(text);

    }
}

function testfunction(text) {
    for (i = 0; i < 10; i++) {
        if (i === 3) {
            console.log("Orphan Black");
        } else {
            console.log(text);

        }
    }

}
testfunction("Sherlock");

function Clone(cloneName, cloneDescription, gender, good) {
    this.cloneName = cloneName;
    this.cloneDescription = cloneDescription;
    this.gender = gender;
    this.good = good;

}


var sarah = new Clone("Sarah", "Wild", "Female", true);

console.log(sarah);