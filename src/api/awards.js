import axios from "axios";

// src/api/awards.js
export async function fetchAwards() {
  const res = await fetch("https://prefertile-intergradational-elane.ngrok-free.dev/awards"); // без /api
  if (!res.ok) {
    throw new Error(`Failed to fetch awards: ${res.status}`);
  }
  return res.json();
}
