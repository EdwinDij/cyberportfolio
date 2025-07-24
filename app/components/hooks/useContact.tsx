"use client";
import React, { useState } from "react";

export const useContact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [projectType, setProjectType] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [errorMessage, seterrorMessage] = useState<null | {
    type: "success" | "error" | "warning";
    text: string;
  }>(null);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !description || projectType.length === 0) {
      seterrorMessage({
        type: "warning",
        text: "Veuillez remplir tous les champs obligatoires.",
      });
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, projectType, description }),
      });
      if (res.ok) {
        seterrorMessage({
          type: "success",
          text: "Votre message a bien été envoyé ! Nous vous répondrons rapidement. Pensez à vérifier vos spams.",
        });
        setName("");
        setEmail("");
        setProjectType("");
        setDescription("");
      } else {
        seterrorMessage({
          type: "error",
          text: "Une erreur est survenue. Veuillez réessayer.",
        });
      }
    } catch (err) {
      seterrorMessage({
        type: "error",
        text: "Erreur de connexion. Réessayez plus tard.",
      });
    }
    setTimeout(() => seterrorMessage(null), 10000); // Disparition après 5 sec
  };

  return {
    description,
    email,
    projectType,
    name,
    setDescription,
    setEmail,
    setProjectType,
    setName,
    sendMessage,
    errorMessage,
  };
};
