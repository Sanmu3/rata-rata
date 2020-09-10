var nilai = [5, 9, 6, 7, 9, 8, 10, 7, 8];

var total = 0;
var bnyNilai = nilai.length;

for (i = 0; i < bnyNilai; i++) {
    console.log(i)

    total += nilai[i]
} document.write(total/bnyNilai)