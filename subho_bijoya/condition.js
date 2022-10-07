function valid() {
    let name = document.forms["myForm"]["fname"].value;
    let age = document.forms["myForm"]["age"].value;
    let myAge = 19;
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
    else {
        
        if (age > myAge) {
            alert("Subho Bijoya " + name + ", pronam neben");
            return false;
        }
        else if(age == myAge) {
            alert("Subho Bijoya " + name );
            return false;
        }
        else {
            alert("Subho Bijoya " + name + ", valobasa nis");
            return false;
        }
    }
}
