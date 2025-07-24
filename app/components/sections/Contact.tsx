import React from "react";
import { Button } from "../ui/Button";
import { useContact } from "../hooks";
import { Send } from "lucide-react";

export const Contact = () => {
  const {
    description,
    email,
    projectType,
    name,
    setDescription,
    setEmail,
    setProjectType,
    setName,
  } = useContact();
  return (
    <section
      id="contact"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 section-with-muted-bg"
    >
      <div className="container mx-auto px-10 sm:px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            <span className="text-cyan-400 uppercase">//</span> Ligne Sécurisée
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Prêt à transmettre un signal ? Connectons nos esprits.
          </p>
        </div>

        <form className="max-w-2xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-muted-foreground"
              >
                Nom / nom de l&apos;entreprise
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Neo Anderson"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-md border border-gray-300 bg-transparent px-4 py-2 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-muted-foreground"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="neo@matrix.org"
                className="mt-1 w-full rounded-md border border-gray-300 bg-transparent px-4 py-2 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="projectType"
              className="block text-sm font-medium text-muted-foreground"
            >
              Type de projet
            </label>
            <select
              id="projectType"
              name="projectType"
              required
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              className="mt-1 w-full appearance-none rounded-md border border-gray-300 bg-gray-900 text-white px-4 py-2 pr-10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
            >
              <option value="">-- Sélectionner --</option>
              <option value="creation">Création de site web</option>
              <option value="refonte">Refonte</option>
              <option value="maintenance">Maintenance</option>
              <option value="autre">Autre</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-white">
              ▼
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-muted-foreground"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Décrivez votre mission..."
              className="mt-1 w-full rounded-md border border-gray-300 bg-transparent px-4 py-2 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
            />
          </div>

          <div className="text-center pt-4 flex">
            <Button
              type="submit"
              className="w-full flex justify-center gap-6 bg-red-500 text-white "
            >
              Transmettre le signal <Send />
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
