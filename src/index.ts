let letra = prompt("ingrese A,B,C o D");

function tabla(i: number) {
  let mult: number;
  for (i = 0; i <= 10; i++) {
    mult = i * 9;
    console.log("9 *", i, " =", mult);
  }
}

while (letra !== "A" && letra !== "B" && letra !== "C" && letra !== "D") {
  letra = prompt("ingrese A,B,C o D");
}

tabla();
