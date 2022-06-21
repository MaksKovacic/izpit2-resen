# Osnove informacijskih sistemov 2021/2022

## 2. pisni izpit OIS

### Vzpostavitev okolja

Vsak študent ima na voljo svoj lasten repozitorij, v katerega neposredno rešuje nalogo - gre za **enostavno aplikacijo za pregled kulturnih dediščin po mestnih občinah v Sloveniji**. Najprej si na svoj računalnik prenesite vsebino oddaljenega repozitorija z naslednjimi ukazi:

```bash
$ git clone https://github.com/ois-2021-2022/Izpit2-{github-uporabniško-ime}
$ cd Izpit2-{github-uporabniško-ime}
```

Nato namestite knjižnice in poženite aplikacijo.

```bash
$ npm install
$ npm start
```

### Opis

Na voljo imamo **aplikacijo za pregled kulturnih dediščin po mestnih občinah v Sloveniji**. Vse podatke o kulturnih dediščinah, ki jih aplikacija prikazuje, so na voljo preko oddaljene spletne storitve [**Teaching API**](https://teaching.lavbic.net/api/docs/). **Aplikacija** nato na podlagi teh podatkov **omogoča všečkanje (+1)** in **izražanje nestrinjanja (-1)** za izbrano kulturno dediščino. Podatke o priljubljenosti (število všečkov in nestrinjanj po kulturni dediščini) shranjuje vaš strežnik v preprosti datoteki `priljubljenost.json`.

Spodnja slika prikazuje razredni diagram aplikacije, kjer je prikazano tudi kje (odjemalec ali strežnik) se posamezni razredi nahajajo. V okviru dopolnitve funkcionalnosti se osredotočite zgolj na obstoječe razrede (implementirane v datotekah), ki so označeni z modrim ozadjem, novih datotek ne kreirajte.

![](https://teaching.lavbic.net/plantuml/svg/bLPBSzis4BxpLs3eWvNOaftCP2R3qMXYErOInwxKqBsqqmD8hYH88C01GAfowx_MM_zNboy3r6jY7onYkTzYTxzzy9CsL9ayvUG7VLAG24OIHkUAffvUCP5HV28nfrgJlpr28Xglvahc8hcHN2goNZ03fLog15GjE_amllvuUuDIgfHSryA88z9xTenQKt6bOHGL6b-1CDw29K1Yfc8EtcbrI26DG6dlbCFC42E9OlE5GLyLn8P9uPrQovm9C9iCY5Hc8JslLA5Ype7ueL7mtx-2hNmC1psygIBp2PagnfTvn9SWf3O4HLHl2uT3z8sPpMX4Jk3ZxCCihd92o1cv3Jy7XA7dzJ7ZkNRFAHDMy6mlBjrvGc_kGZGUIs6Kv3lM-oHJCWQj1o2AmNJouz6QxXFTc0Z8xL-PGgqNZEjxi1LBhTHltFjo-nW4IahJUnEGhuyFzwwyQsYAaVNQQ57xBfpyCecMcE73c8So-jU2ZkXZq0ii5ZRT3pWdHLd8LTGrlf0iQP25EeZRlkYvKo3tT2Dpy_KwR6h3deV3Wi7QqkRGYypGjDQ9oagdQhTuJh2sjH5q4iLCq81eu6sW9sILSvCh0PyXOHhVGu0bNtJPEqOG2KYK6uFziKztYnXNkGhUAK__NMd09xAVP_rHTVHtQseBODM7lvrTNhw_7Brj7zfVtoR9SvCy_AUVoBNeEw_H9RUL9yaIKegvwhHok58iC_HuGxMPMpE1bmoak9SqwRc5SbOLofTCVvSusP0N0mybIr2n1BqkPNNnuFy__dJGtxUvwt5gcWhbOdwm6LvHegMwe3Z2YrStGxUwGyFuJTZMTdlQLzcMecEaoduvfvj2GQEDnIx-RQdNwjH_lYNGAmcl7Nm46Y-Oc5zDltKxgUHpMAsF05VMPhGm9jF1nOLf00DEYuZ50zm75pHZ5rv3VZDnX4nBQbaQ0bNnefT9zbH04fLTQ1JYpubCOOahhjYR_iRCJfD-qoigbd0lLpHcIxg7ztEYw5D2-P8sHsr-fmcObUpSTAKmAfi79AePyWrHxMauv2nIDYTDa9nf0mB3KbtsNmpMesal5lSmRlHUdGV4OI6Sasg_Wi55x6PYnwnVapaEMrBHrV6HcsWoPXp2ZOXxCtomsGSHowIwlvQyQHygu5eXCmUGPU_ZjdQ0NHUNl-QWDdS7dLh19izwCUMy_4u9o2mNrNV6lbZ7UDVL6ZJMYksXBQ5pZGLUuyf5_sXsrw9SoN68lQaZSa6U7OQxlUgJ_iiST_eBGTj3lvxZjRB_yfNHLNCrobdjlYNatKwZ-rWFdhSz2wflkahFxsGYiFx_xA-_OxpPMtudNzxFZZDdwtMPFMh1GUuQRKlGypvXh-4d-Fy0)

Navodila za reševanje naloge so na voljo v času trajanja pisnega izpita v okviru [kviza na spletni učilnici](https://ucilnica.fri.uni-lj.si/mod/quiz/view.php?id=49609).