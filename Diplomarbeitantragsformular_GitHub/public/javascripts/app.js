let vue = new Vue({
  el: "#app",
  data: {
    titel: "Diplomarbeitantragsformular",
    klassen: [],
    alleLehrer: [],
    gewählteLehrer: [],
    sehen1: false,
    sehen2: false,
    sehen3: false,
    sehen4: false,
    ausgangssituation: "",
    beschreibungDerIdee: "",
    mussZiele: "",
    nichtZiele: "",
    schueler: [
      {
        vorname: "",
        nachname: "",
        kürzel: "",
        email: "",
        klasse: "",
        funktionUndAufgabenstellung: "",
      },
      {
        vorname: "",
        nachname: "",
        kürzel: "",
        email: "",
        klasse: "",
        funktionUndAufgabenstellung: "",
      },
      {
        vorname: "",
        nachname: "",
        kürzel: "",
        email: "",
        klasse: "",
        funktionUndAufgabenstellung: "",
      },
      {
        vorname: "",
        nachname: "",
        kürzel: "",
        email: "",
        klasse: "",
        funktionUndAufgabenstellung: "",
      },
    ],
    // Umweltanalyse
    ua_id: 0,
    ua_bezeichnung: "",
    ua_beschreibung: "",
    ua_bewertung: "",
    umweltanalyse: [],
    // Risikoanalyse
    ra_id: 0,
    ra_bezeichnung: "",
    ra_beschreibung: "",
    ra_p: 0,
    ra_a: 0,
    ra_risikofaktor: 0,
    risikoanalyse: [],
  },
  methods: {
    async getLehrer() {
      let res = await axios.get("http://localhost:3000/lehrer");
      this.alleLehrer = res.data;
    },
    async getKlassen() {
      let res = await axios.get("http://localhost:3000/klassen");
      this.klassen = res.data;
    },
    risikoHinzufügen() {
      if (
        this.ra_bezeichnung == "" ||
        this.ra_beschreibung == "" ||
        this.ra_p == 0 ||
        this.ra_a == 0
      ) {
        alert("Bitte das Risiko vollständig ausfüllen!");
      } else {
        this.ra_id = this.risikoanalyse.length + 1;
        let obj = {
          id: this.ra_id,
          bezeichnung: this.ra_bezeichnung,
          beschreibung: this.ra_beschreibung,
          p: this.ra_p,
          a: this.ra_a,
          risikofaktor: this.ra_p * this.ra_a,
        };
        this.risikoanalyse.push(obj);
      }
      this.ra_bezeichnung = "";
      this.ra_beschreibung = "";
      this.ra_a = 0;
      this.ra_p = 0;
    },
    umweltHinzufügen() {
      if (
        this.ua_beschreibung == "" ||
        this.ua_bezeichnung == "" ||
        this.ua_bewertung == ""
      ) {
        alert("Bitte die Umwelt vollständig ausfüllen!");
      } else {
        this.ua_id = this.umweltanalyse.length + 1;
        let obj = {
          id: this.ua_id,
          bezeichnung: this.ua_bezeichnung,
          beschreibung: this.ua_beschreibung,
          bewertung: this.ua_bewertung,
        };
        this.umweltanalyse.push(obj);
        this.ua_bezeichnung = "";
        this.ua_beschreibung = "";
        this.ua_bewertung = "";
      }
    },
    risikoEntfernen(id) {
      this.risikoanalyse = this.risikoanalyse.filter((elm) => elm.id != id);
      for (let i = 0; i < this.risikoanalyse.length; i++) {
        this.risikoanalyse[i].id = i + 1;
      }
    },
    umweltEntfernen(id) {
      this.umweltanalyse = this.umweltanalyse.filter((elm) => elm.id != id);
      for (let i = 0; i < this.umweltanalyse.length; i++) {
        this.umweltanalyse[i].id = i + 1;
      }
    },
    schueleranzeigen1() {
      this.sehen1 = true;
      this.sehen2 = false;
      this.sehen3 = false;
      this.sehen4 = false;
    },
    schueleranzeigen2() {
      this.sehen1 = true;
      this.sehen2 = true;
      this.sehen3 = false;
      this.sehen4 = false;
    },
    schueleranzeigen3() {
      this.sehen1 = true;
      this.sehen2 = true;
      this.sehen3 = true;
      this.sehen4 = false;
    },
    schueleranzeigen4() {
      this.sehen1 = true;
      this.sehen2 = true;
      this.sehen3 = true;
      this.sehen4 = true;
    },
  },
  created() {
    this.getLehrer();
    this.getKlassen();
  },
});
