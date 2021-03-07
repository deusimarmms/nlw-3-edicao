const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

/* Create Map */
const map = L.map("mapid", options).setView([-27.2198295, -49.6513157], 15);
/* Criate and add title layer */
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(
  map
);

/* Create Icon */

const icon = L.icon({
  iconUrl: "./public/img/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

/* createpopup overlay */

L.marker([-27.2198295, -49.6513157], { icon }).addTo(map);

function selectImage(event) {
  const button = event.currentTarget;

  const buttons = document.querySelectorAll(".images button");

  buttons.forEach((button) => {
    button.classList.remove("active");
  });
  button.classList.add("active")

  const image = button.children[0]
  const imageContainer = document.querySelector(".orphanage-details > img")
  imageContainer.src = image.src
}
