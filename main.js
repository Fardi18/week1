//implementasi algoritma menukar isi 2 gelas
var A = "kopi";
var B = "teh";
var C = "";

C = A;
A = B;
B = C;

console.log(A);
console.log(B);

//conditional
//switch case
let nomorRemote = 2;
switch (nomorRemote) {
  case 1: {
    console.log("Indosiar");
    break;
  }
  case 2: {
    console.log("Net Tv");
    break;
  }
  case 3: {
    console.log("ANTV");
    break;
  }
  default: {
    console.log("Nothing");
  }
}

//if else if else conditonal
let lampuMerah = "merah";
if (lampuMerah == "hijau") {
  console.log("Jalan");
} else if (lampuMerah == "kuning") {
  console.log("Pelankan Kendaraan");
} else {
  console.log("Berhenti");
}

//ternary operator
let isNowSale = false;
isNowSale ? console.log("Lets shopping now") : console.log("Shopping Later");

//looping
//for loop
for (i = 0; i <= 10; i++) {
  console.log(i);
}

//while loop
let angka = 1;
while (angka <= 10) {
  console.log(angka);
  angka++;
}

//do while loop
let nilai = 1;

do {
  console.log(nilai);
  nilai++;
} while (nilai <= 10);
