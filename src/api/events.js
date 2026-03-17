import instance from "./config.js";



async function getEvents() {
  return await instance.get("events");
  // https://prefertile-intergradational-elane.ngrok-free.dev/events; fetch method GET
}

async function createEvent(newEvent) {
  return await instance.post("events", newEvent);
  // https://prefertile-intergradational-elane.ngrok-free.dev/events; fetch method POST
}

async function updateEvent(id, updatedEvent) {
  return await instance.put(`events/${id}`, updatedEvent);
  // https://prefertile-intergradational-elane.ngrok-free.dev/events/1; fetch method PUT
}

async function deleteEvent(id) {
  return await instance.delete(`events/${id}`);
  // https://prefertile-intergradational-elane.ngrok-free.dev/events/1; fetch method DELETE
}

async function getEventById(id) {
  return await instance.get(`events/${id}`);
  // https://prefertile-intergradational-elane.ngrok-free.dev/events/1; fetch method GET
}

async function getTypes() {
  return await instance.get("events/types");
  // https://prefertile-intergradational-elane.ngrok-free.dev/events/types; fetch method GET
}

export { getEvents, createEvent, updateEvent, deleteEvent, getEventById, getTypes };