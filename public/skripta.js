/**
 * Ko se stran naloži, se izvedejo ukazi spodnje funkcije.
 */
window.addEventListener("load", async (event) => {
  /**
   * Izbira mestne občine iz seznama
   */
  $("#mestnaObcina").change(async function () {
    let izbranaMestnaObcina = this.value;
    if (izbranaMestnaObcina == 0) {
      $("#kulturneDediscine").html("Ni kulturnih dediščin!");
    } else {
      let koordinate = await vrniGpsKoordinateMestneObcine(izbranaMestnaObcina);
      let kulturneDediscine = await vrniKulturneDediscine(
        koordinate[1],
        koordinate[0]
      );
      $("#kulturneDediscine").html("<ul class='list-group'>");
      kulturneDediscine.forEach(async (kulturnaDediscina, i) => {
        let priljubljenost = await vrniPriljubljenost(kulturnaDediscina.ESD);
        $("#kulturneDediscine").append(
          "<li class='list-group-item'><b>" +
            kulturnaDediscina.Ime +
            "</b><br><small>(" +
            "?" +
            ")</small><br>" +
            "<button class='btn btn-sm btn-danger me-1' onclick='nastaviPriljubljenost(" +
            kulturnaDediscina.ESD +
            ", -1)'><span id='minus_" +
            kulturnaDediscina.ESD +
            "'>" +
            "?" +
            "</span><i class='fa-solid fa-caret-down ms-1'></i></button>" +
            "<button class='btn btn-sm btn-success' onclick='nastaviPriljubljenost(" +
            kulturnaDediscina.ESD +
            ", 1)'><i class='fa-solid fa-caret-up me-1'></i><span id='plus_" +
            kulturnaDediscina.ESD +
            "'>" +
            "?" +
            "</span></button></li>"
        );
      });
      $("#kulturneDediscine").append("</ul>");
    }
  });
});

/**
 * Vrni GPS koordinate mestne občine (npr. [15.2616828, 46.2293889])
 *
 * @param {string} mestnaObcina naziv mestne občine (npr. "Celje")
 */
let vrniGpsKoordinateMestneObcine = async (mestnaObcina) => {
  return [15.2616828, 46.2293889];
};

/**
 * Vrni največ 5 kulturnih dediščin na podani lokaciji v radiju 20 km
 *
 * @param {int} lat zemljepisna širina
 * @param {int} lng zemljepisna dolžina
 * @returns seznam kulturnih dediščin
 */
let vrniKulturneDediscine = async (lat, lng) => {
  let odgovor = await $.getJSON(
    "https://teaching.lavbic.net/api/kulturneDediscine/iskanje/lokacija?lat=" +
      lat +
      "&lng=" +
      lng +
      "&razdalja=20&stZadetkov=5"
  );
  return odgovor;
};

/**
 * Vrni priljubljenost na strežniku
 *
 * @param {int} ESD enolični identifikator kulturne dediščine
 * @returns { plus: int, minus: int }
 */
let vrniPriljubljenost = async (ESD) => {
  return await $.getJSON("http://localhost:8080/priljubljenost/" + ESD);
};

/**
 * Nastavi priljubljenost na strežniku
 *
 * @param {int} ESD enolični identifikator kulturne dediščine
 * @param {int} vrednost sprememba (1 za plus ali -1 za minus)
 */
let nastaviPriljubljenost = async (ESD, vrednost) => {
  let priljubljenost = {plus: 0, minus: 0};
  $("#plus_" + ESD).html(priljubljenost.plus);
  $("#minus_" + ESD).html(priljubljenost.minus);
};
