import React from "react"
import "./About.css"

const About = () => {
  return (
    <main className="home about">
      <section className="home-section">
        <h2>¿Qué es esta app?</h2>
        <p>
          Esta aplicación es un dashboard experimental enfocado en practicar
          arquitectura frontend moderna con React.
        </p>
      </section>

      <section className="home-section">
        <h2>¿Por qué la construí?</h2>
        <p>
          La desarrollé como parte de mi crecimiento como programador,
          enfocándome en rutas protegidas, estado global y escalabilidad.
        </p>
      </section>

      <section className="home-section">
        <h2>Sobre mí</h2>
        <p>
          Soy Cristhian Borges, un desarrollador apasionado por crear software limpio,
          eficiente y con visión a largo plazo.
        </p>
      </section>

      <section className="home-section technologies">
        <h2>Tecnologías usadas</h2>
        <ul>
          <li>React + Vite</li>
          <li>React Router</li>

          <li>LocalStorage</li>
        </ul>
      </section>
    </main>
  )
}

export default About