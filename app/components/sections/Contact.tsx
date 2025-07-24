import React from "react";
import { Button } from "../ui/Button";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
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
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Neo Anderson"
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
                placeholder="neo@matrix.org"
                className="mt-1 w-full rounded-md border border-gray-300 bg-transparent px-4 py-2 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
              />
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
              placeholder="Décrivez votre mission..."
              className="mt-1 w-full rounded-md border border-gray-300 bg-transparent px-4 py-2 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
            />
          </div>

          <div className="text-center pt-4">
            <Button
              type="submit">
              Transmettre le signal
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
