/* Create Map */
const map = L.map('mapid').setView([-27.2198295,-49.6513157], 15);
/* Criate and add title layer */
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);


/* Create Icon */


const icon = L.icon({
    iconUrl:"./public/img/map-marker.svg",
    iconSize:[58,68],
    iconAnchor:[29,68],
    popupAnchor:[170,2]
})

/* createpopup overlay */

const popup =L.popup({
    closeButton:false,
    className:'map-popup',
    minWidth:240,
    minHeight:240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-oprhanage"><img src="./public/img/arrow-white.svg"></a> ')

L.marker([-27.2198295,-49.6513157],{icon})
.addTo(map)
    .bindPopup(popup)
