"use client";

import { useState } from "react";

export default function Page() {
    const [contactInfo, setContactInfo] = useState({
        email: "",
        message: "",
        name: "",
        telefono : ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setContactInfo(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if(contactInfo.name.trim() === "" || contactInfo.email.trim() === "") {
            return;
        }
        const message = `Nombre: ${contactInfo.name}\nEmail: ${contactInfo.email}\nTeléfono: ${contactInfo.telefono}\nMensaje: ${contactInfo.message}`
        const response = await fetch("/api/notification", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({message}),
        });
        if (response.ok) {
            setContactInfo({
                name: "",
                email: "",
                message: "",
                telefono:""
            });
        }
    }
  return (
    <main className="contact-page mt-8">
      <section className="hero">
        <h1>Contacto</h1>
        <p>
          ¿Tenés alguna consulta o querés más información?
          <br />
          Completá el formulario y te respondemos a la brevedad.
        </p>
      </section>

      <section className="content">
        <form className="form">
          <div className="field">
            <label>Nombre</label>
            <input onChange={handleChange} value={contactInfo.name} type="text" placeholder="Tu nombre" name="name"/>
          </div>

          <div className="field">
            <label>Email</label>
            <input value={contactInfo.email} type="email" placeholder="correo@ejemplo.com" onChange={handleChange} name="email" />
          </div>

          <div className="field">
            <label>Teléfono</label>
            <input value={contactInfo.telefono} type="tel" placeholder="Tu número de teléfono" onChange={handleChange} name="telefono" />
          </div>

          <div className="field">
            <label>Mensaje</label>
            <textarea value={contactInfo.message} rows={5} placeholder="Escribí tu mensaje..." onChange={handleChange} name="message" />
          </div>

          <button onClick={handleSubmit} type="submit">Enviar mensaje</button>
        </form>

        <aside className="info">
          <h3>Información de contacto</h3>

          <p>
            <strong>Email:</strong>
            <br />
            davidazul.4life@gmail.com
          </p>

          <p>
            <strong>WhatsApp:</strong>
            <br />
            +54 9 2616 65-7453
          </p>

          <p>
            <strong>Ubicación:</strong>
            <br />
            Argentina
          </p>
        </aside>
      </section>

      <style jsx>{`
        .contact-page {
          min-height: 100vh;
          background: #f8fafc;
        }

        .hero {
          text-align: center;
          padding: 4rem 1rem;
          color: white;
          background: linear-gradient(
            120deg,
            #1e40af,
            #2563eb,
            #38bdf8,
            #1e40af
          );
          background-size: 300% 300%;
          animation: gradientMove 12s ease infinite;
        }

        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }


        .hero h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .hero p {
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto;
          opacity: 0.95;
        }

        .content {
          max-width: 1100px;
          margin: -3rem auto 0;
          padding: 2rem;
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 2rem;
        }

        .form {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }

        .field {
          display: flex;
          flex-direction: column;
          margin-bottom: 1.2rem;
        }

        .field label {
          font-weight: 600;
          margin-bottom: 0.4rem;
          color: #334155;
        }

        .field input,
        .field textarea {
          padding: 0.75rem;
          border-radius: 10px;
          border: 1px solid #e2e8f0;
          font-size: 1rem;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .field input:focus,
        .field textarea:focus {
          outline: none;
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
        }

        button {
          width: 100%;
          padding: 0.85rem;
          border: none;
          border-radius: 10px;
          background: #2563eb;
          color: white;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s, transform 0.1s, box-shadow 0.1s;
        }

        button:hover {
          background: #1e40af;
          transform: translateY(-1px);
          box-shadow: 0 6px 14px rgba(30, 64, 175, 0.25);
        }

        button:active {
          transform: translateY(0);
          box-shadow: none;
        }

        .info {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }

        .info h3 {
          margin-bottom: 1rem;
          color: #1e40af;
          font-weight: 700;
        }

        .info p {
          margin-bottom: 1rem;
          line-height: 1.6;
          color: #334155;
        }

        @media (max-width: 900px) {
          .content {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

    </main>
  );
}
