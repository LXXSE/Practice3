let letName = "теЙп";
let letSurname = "нОсОк";

Name = letName.toLowerCase();
Name1 = Name.substring(1);
Name = Name.substring(0,1);
Name = Name.toUpperCase();
Name2 = Name + Name1

Surname = letSurname.toLowerCase();
Surname1 = Surname.substring(1);
Surname = Surname.substring(0,1);
Surname = Surname.toUpperCase();
Surname2 = Surname + Surname1

x = letName == Name2 && Surname2 == letSurname ? console.log("Имя и фамилия остались без изменений ") : console.log("Имя и/или фамилия преобразованы")


//if (letName == Name2 && Surname2 == letSurname){
//    console.log("Имя и фамилия остались без изменений ")
//}
//else{
//    console.log("Имя или фамилия преобразованы")
//}
console.log(Name2 + " " + Surname2)

// ok, thats all 
//