import { User } from "@/lib/types";

export async function signUp(data: User) {
  try {
    const res = await fetch(`${process.env.BACKEND_BASE__URL}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Erreur lors de la requête pour créer l'utilisateur.  ");
    }
    return await res.json();
  } catch (error) {
    console.log((error as Error).message);
    throw new Error(
      "Une erreur s'est produite lors de la création de l'utilisateur  "
    );
  }
}
