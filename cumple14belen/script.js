/*
  PERSONALIZA LOS DATOS DE LA INVITACIÓN EN ESTE BLOQUE.
  WhatsApp: escribe el número con código de país, solo dígitos.
  Nicaragua: 505XXXXXXXX (no uses +, espacios ni guiones).
*/
const INVITATION = {
  honoreeName: "Ana Belén Díaz Acosta",
  eventDate: "Domingo, 25 de octubre de 2026",
  eventTime: "6:00 p. m.",
  venueName: "Restaurante PIKNIC",
  venueAddress: "Consulta la ubicación exacta en Google Maps",
  hostName: "Ana Belén y Familia",
  whatsappNumber: "50589093624",
  mapQuery: "Restaurante PIKNIC, Nicaragua",
  mapsUrl: "https://maps.app.goo.gl/skHjuUveX5sZrCNr5"
}

document.getElementById("honoree-name").textContent = INVITATION.honoreeName;
document.getElementById("event-date").textContent = INVITATION.eventDate;
document.getElementById("event-time").textContent = INVITATION.eventTime;
document.getElementById("venue-name").textContent = INVITATION.venueName;
document.getElementById("venue-address").textContent = INVITATION.venueAddress;
document.getElementById("host-name").textContent = INVITATION.hostName;

const encodedLocation = encodeURIComponent(INVITATION.mapQuery);
document.getElementById("map-embed").src =
  `https://maps.google.com/maps?q=${encodedLocation}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
document.getElementById("maps-link").href = INVITATION.mapsUrl;

const attendanceInputs = document.querySelectorAll('input[name="attendance"]');
const mealFieldset = document.getElementById("meal-fieldset");
const message = document.getElementById("form-message");

function updateMealAvailability() {
  const attendance = document.querySelector('input[name="attendance"]:checked')?.value;
  const attending = attendance === "¡Sí, ahí estaré!";
  mealInputs.forEach(input => {
    input.disabled = !attending;
    if (!attending) input.checked = false;
  });
  mealFieldset.style.opacity = attending ? "1" : ".58";
}
attendanceInputs.forEach(input => input.addEventListener("change", updateMealAvailability));
updateMealAvailability();

document.getElementById("rsvp-form").addEventListener("submit", function(event) {
  event.preventDefault();
  message.style.display = "none";

  const guestName = document.getElementById("guest-name").value.trim();
  const attendance = document.querySelector('input[name="attendance"]:checked')?.value;
  const guestNote = document.getElementById("guest-note").value.trim();

  if (!guestName || !attendance) {
    showMessage("Por favor, escribe tu nombre y selecciona si asistirás.");
    return;
  }
  if (!/^\d{8,15}$/.test(INVITATION.whatsappNumber) || INVITATION.whatsappNumber.includes("X")) {
    showMessage("Antes de usar el formulario, configura el número de WhatsApp en script.js. Incluye el código de país y escribe solo números.");
    return;
  }

  const text = [
    "🎉 *Confirmación de cumpleaños*",
    `*Invitado/a:* ${guestName}`,
    `*Asistencia:* ${attendance}`,
    ...(attendance === "¡Sí, ahí estaré!" ?),
    `*Celebración:* ${INVITATION.honoreeName}`,
    `*Fecha:* ${INVITATION.eventDate}, ${INVITATION.eventTime}`,
    `*Lugar:* ${INVITATION.venueName} — ${INVITATION.venueAddress}`,
    ...(guestNote ? [`*Mensaje:* ${guestNote}`] : [])
  ].join("\n");

  const url = `https://wa.me/${INVITATION.whatsappNumber}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});

function showMessage(text) {
  message.textContent = text;
  message.style.display = "block";
  message.scrollIntoView({ behavior: "smooth", block: "nearest" });
}
