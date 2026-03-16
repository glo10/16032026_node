const firstname = "Glodie"
const lastname = 'Tshimini'
// Concaténation classique
const fullname = firstname + ' ' + lastname

// Concaténation depuis ES6+
// ALT GR + 7 (pas le chiffre) +  Espace `
const fullnameEs6 = `Mon prénom est ${firstname} et mon nom est ${lastname}`
console.log('fullname before ES6', fullname, 'fullname after ES6', fullnameEs6)