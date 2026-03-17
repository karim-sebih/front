export const getRecentUploads = async (userId) => {
  const token = localStorage.getItem("token");
  if (!token || !userId) throw new Error("Non connecté ou ID manquant");

  const response = await fetch(`https://prefertile-intergradational-elane.ngrok-free.dev/profile/${userId}/recent`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Erreur ${response.status}`);
  }

  return response.json();
};