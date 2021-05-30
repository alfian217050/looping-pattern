var batas = prompt("Masukkan nilai :");
// Pola ke-1
var s = "";
for (var i = 1; i <= batas; i++) {
  for (var j = 1; j <= batas; j++) {
    s = s + "*";
  }
  s += "\n";
}
alert("Pola ke-1 \n" + s);

// Pola ke-2
var space2 = "";
for (var i = 1; i <= batas; i++) {
  for (var j = 1; j <= i; j++) {
    space2 = space2 + "*";
  }
  space2 = space2 + "\n";
}
alert("Pola ke-2 \n" + space2);

// Pola ke-3
var space3 = "";
for (var i = batas; i >= 1; i--) {
  for (var j = 1; j <= i; j++) {
    space3 += "*";
  }
  space3 += "\n";
}
alert("Pola ke-3 \n" + space3);

// Pola ke-4
var space4 = "";
for (var i = batas; i >= 1; i--) {
  for (var j = 1; j < i; j++) {
    space4 += "-";
  }
  for (var k = i; k <= batas; k++) {
    space4 += "*";
  }
  space4 += "\n";
}
alert("Pola ke-4 \n" + space4);

// Pola ke-5
var space5 = "";
for (var i = 1; i <= 5; i++) {
  for (var j = 2; j <= i; j++) {
    space5 += "-";
  }
  for (var k = batas; k >= i; k--) {
    space5 += "*";
  }
  space5 += "\n";
}
alert("Pola ke-5 \n" + space5);
