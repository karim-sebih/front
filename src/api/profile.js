import instance  from "./config";

async function getProfile() {
  return await instance.get("profile");
  // https://prefertile-intergradational-elane.ngrok-free.dev/profile; fetch method GET
}

async function createProfile(newUser) {
  return await instance.post("profile", newUser);
  // https://prefertile-intergradational-elane.ngrok-free.dev/profile; fetch method POST
}


async function updateProfile(id, updatedUser) {
  return await instance.put(`profile/${id}`, updatedUser);
  // https://prefertile-intergradational-elane.ngrok-free.dev/profile/1; fetch method PUT
}

async function deleteProfile(id) {
  return await instance.delete(`profile/${id}`);
  // https://prefertile-intergradational-elane.ngrok-free.dev/profile/1; fetch method DELETE
}

async function getProfileById(id) {
  return await instance.get(`profile/${id}`);
  // https://prefertile-intergradational-elane.ngrok-free.dev/profile/1; fetch method GET
}

async function getRoles() {
  return await instance.get("profile/roles");
  // https://prefertile-intergradational-elane.ngrok-free.dev/profile/roles; fetch method GET
}

export { getProfile, createProfile, updateProfile, deleteProfile, getProfileById, getRoles };
