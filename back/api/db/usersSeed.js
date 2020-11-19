const User = require("../Models/User")

User.bulkCreate([
    { name: 'Seba', email: "seba.wetzel@gmail.com", password: "1234", company: "Motoneta veloz", accepted: false, role: "Cadete" },
    { name: 'Feli', email: "feli@gmail.com", password: "1234", company: "Motoneta veloz", accepted: false, role: "Cadete" },
    { name: 'Fran', email: "fran@gmail.com", password: "1234", company: "Motoneta veloz", accepted: false, role: "Cadete" },
    { name: 'Gus', email: "gus@gmail.com", password: "1234", company: "Motoneta veloz", accepted: false, role: "Cadete" },
    { name: 'Lucas', email: "lucas@gmail.com", password: "1234", company: "Motoneta veloz", accepted: false, role: "Cadete" },
    { name: 'Joaco', email: "joaco@gmail.com", password: "1234", company: "Motoneta veloz", accepted: true, role: "Cadete" },
    { name: 'Lara', email: "lara@gmail.com", password: "1234", company: "Motoneta veloz", accepted: false, role: "Cadete" },
    { name: 'Lucho', email: "lucho@gmail.com", password: "1234", company: "Motoneta veloz", accepted: false, role: "Cadete" },
    { name: 'Dani', email: "dani.gordoli@gmail.com", password: "1234", company: "Motoneta veloz", accepted: false, role: "Cadete" },
    { name: 'Vitto', email: "vitto@gmail.com", password: "1234", company: "Motoneta veloz", accepted: true, role: "Cadete" },
    { name: 'Vitto', email: "farma@gmail.com", password: "1234", company: "Farmacias del pueblo", accepted: true, role: "Empresa" },
], { individualHooks: true }).then(() => console.log("Seed complete"));