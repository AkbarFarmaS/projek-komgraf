let angle;
//AkbarFarmaSanto-S1TIS210408-KOMGRAF
function setup() {
  createCanvas(800, 600);
  colorMode(HSB);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  // Hitung sudut berdasarkan posisi mouse, maksimal 90 derajat
  angle = (mouseX / width) * 90;
  angle = min(angle, 90);

  // Mulai pohon dari bagian bawah layar
  translate(width / 2, height);

  // Gambarlah garis 120 piksel
  stroke(0, 255, 255);
  line(0, 0, 0, -120);

  // Pindah ke akhir baris
  translate(0, -120);

  // Start the recursive branching (percabangan)
  branch(120, 0);
}

function branch(h, level) {

  // Atur rona berdasarkan tingkat rekursi
  stroke(level * 25, 255, 255);

  // Setiap cabang akan berukuran 2/3 dari ukuran cabang sebelumnya
  h *= 0.66;

  // Gambarlah jika panjang cabang > 2, jika tidak, hentikan rekursi
  if (h > 2) {

    // Gambarkan cabang kanan
    push();

    // Putar berdasarkan sudut
    rotate(angle);

    // gambar garis cabang
    line(0, 0, 0, -h);

    // Pindah ke akhir cabang
    translate(0, -h);

    // Panggil cabang/branch () recursively
    branch(h, level + 1);

    // Memulihkan sistem koordinat yang tersimpan
    pop();

    // Gambar cabang kiri
    push();
    rotate(-angle);
    line(0, 0, 0, -h);
    translate(0, -h);
    branch(h, level + 1);
    pop();
  }
  //mulai pohon cabang dari kiri lalu ke kanan atau sebaliknya
}