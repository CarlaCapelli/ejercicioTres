let letra = prompt("ingrese nueve");

function tabla(i: number) {
  let mult: number;
  for (i = 0; i <= 10; i++) {
    mult = i * 9;
    console.log("9 *", i, " =", mult);
  }
}

while (letra !== "nueve") {
  letra = prompt("ingrese nueve");
}

tabla();
