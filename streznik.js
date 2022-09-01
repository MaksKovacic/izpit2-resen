if (!process.env.PORT) process.env.PORT = 8080;

/**
 * Priprava strežnika
 */
const express = require("express");
const streznik = express();
streznik.set("view engine", "hbs");
streznik.use(express.static("public"));

/**
 * Naloži priljubljenost iz datoteke
 */
const fs = require("fs");
let priljubljenost = JSON.parse(fs.readFileSync("priljubljenost.json", "utf8"));

/**
 * Prikaz začetne strani
 */
streznik.get("/", (zahteva, odgovor) => {
  odgovor.render("seznam");
});

// Shrani priljubljenost
streznik.get("/priljubljenost/plus/:ESD", (zahteva, odgovor) => {
  let ESD = zahteva.params.ESD;
  shraniPriljubljenost(ESD, 1);
  odgovor.status(200).send(vrniPriljubljenost(ESD));
});

streznik.get("/priljubljenost/minus/:ESD", (zahteva, odgovor) => {
  let ESD = zahteva.params.ESD;
  shraniPriljubljenost(ESD, -1);
  odgovor.status(200).send(vrniPriljubljenost(ESD));
});

// Vrni priljubljenost
streznik.get("/priljubljenost/:ESD", (zahteva, odgovor) => {
  let ESD = zahteva.params.ESD;
  odgovor.status(200).send(vrniPriljubljenost(ESD));
});

// Zagon strežnika
streznik.listen(process.env.PORT, () => {
  console.log(`Strežnik je pognan na vratih ${process.env.PORT}!`);
});

/**
 * Shrani priljubljenost kulturne dediščine v datoteko
 *
 * @param {int} ESD enolični identifikator kulturne dediščine
 * @param {int} vrednost sprememba (1 za plus ali -1 za minus)
 */
let shraniPriljubljenost = (ESD, vrednost) => {
  let smer = vrednost > 0 ? "plus" : "minus";
  if (priljubljenost[ESD]) {
    if (priljubljenost[ESD][smer]) priljubljenost[ESD][smer]++;
    else priljubljenost[ESD][smer] = 1;
  } else {
    priljubljenost[ESD] = {};
    priljubljenost[ESD][smer] = 1;
  }
  fs.writeFileSync(
    "priljubljenost.json",
    JSON.stringify(priljubljenost, null, 2)
  );
  vrniPriljubljenost(ESD)
};

/**
 * Vrni priljubljenost kulturne dediščine
 *
 * @param {int} ESD enoličini identifikator kulturne dediščine
 * @returns { plus: int, minus: int }
 */
let vrniPriljubljenost = (ESD) => {
  if(priljubljenost[ESD]){
    return{
      plus: priljubljenost[ESD].plus ? priljubljenost[ESD].plus : 0,
      minus: priljubljenost[ESD].minus ? priljubljenost[ESD].minus : 0,
    }
  }else{
    return{
      plus: 0,
      minus: 0,
    };
  }
};
