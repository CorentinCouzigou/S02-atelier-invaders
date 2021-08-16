//Etape 1
//modifier l'adresse du script dans HTML
console.log('test 1...2...1...2');
//Etape 2
const hercule = {
    name: 'Hercule',
    job: 'Demi-dieu',
    age: 35,
    department: 75,
    arm: 60.5,
    inRelatationship: 'Oui il est en couple',
};
base.fillProfil(hercule);
//Etape 3
const friendsHercule = ['Jupiter', 'Junon', 'Alcmène', 'Déjanire'];
base.printFriends(friendsHercule);
base.setBestFriend(friendsHercule[0]);
//Etape 4
const title = document.createElement('h1');
title.classList.add = 'banner_title';
title.textContent = 'Vous consultez le profil de Hercule'
const headerBanner = document.getElementById('header-banner');
headerBanner.appendChild(title);
//Etape 5
for (let i = 0; i < 11; i++) {
    base.displayWork(i);
};

//Etape 6
const disponible = document.getElementById('availability');

if (base.getHour < 8 && base.getHour > 20) {
    disponible.textContent = 'Disponible';
}
else { disponible.classList.add('off') };

//Etape 7
const pseudo = function (prenom, departement) {
    identite = (prenom + '-du-' + departement);
    return identite;
};
console.log(pseudo('hercule', 75));
const nameProfil = document.getElementById('profil-name');
nameProfil.textContent = (pseudo(hercule.name, hercule.department));
//Etape 8 
const click = document.getElementById('menu-toggler');
const handleClick = function (event) {
    bannerHeader = document.getElementById('header-banner');
    bannerHeader.classList.toggle('banner--open');
};
click.addEventListener('click', handleClick)
//Etape 9
const form = document.getElementById('contact');
const handleSubmit = function (event) {
    event.preventDefault();
    alert('Hercule ne souhaite pas être dérangé');
};
form.addEventListener('submit', handleSubmit);
//etape 10
const calculer = function (nbrRelatif, nbrTotal) {
    pourcentage = (nbrRelatif / nbrTotal) * 100;
    return pourcentage;
};
const pourcentageH = document.getElementById('trends-hercule');
pourcentageH.textContent = ('Hercule ' + (Math.round(calculer(120, 173))) + '%');
const pourcentageC = document.getElementById('trends-cesar');
pourcentageC.textContent = ('César ' + (Math.round(calculer(53, 173))) + '%');

