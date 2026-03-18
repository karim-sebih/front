/**
 * Constantes globales de l'application MarsAI
 *
 * UPLOAD_BASE : URL de base pour accéder aux fichiers uploadés (affiches, vidéos).
 * En développement, pointe vers le serveur local.
 * En production, définir la variable d'environnement VITE_UPLOAD_BASE dans .env.production
 *
 * Exemple .env.production :
 *   VITE_UPLOAD_BASE=https://mondomaine.com/uploads
 */
export const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3000";
export const UPLOAD_BASE =
  import.meta.env.VITE_UPLOAD_BASE || `${API_BASE}/uploads`;