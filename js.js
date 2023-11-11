fetch("https://cbu.uz/uz/arkhiv-kursov-valyut/json/")
  .then((res) => res.json())
  .then((data) => {
    const dollorKursi = data[0].Rate;
    console.log(200 * dollorKursi);
  });
