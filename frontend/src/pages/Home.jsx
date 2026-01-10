import React, { useState, useEffect } from "react"
import "../styles/Home.css"
import { useLocation } from "react-router-dom"

const Home = () => {
  const [effect, setEffect] = useState("");
  
  useEffect(() => {
    setEffect(prev => "show")
  }, []);
  return (
    <main className="home">
      <section className={"hero home-section " + effect}>
        <h1>
          Organiza tus tareas. Controla tu flujo. Avanza sin caos.
        </h1>
        <p>
          Atlas es una pensada para organizar tareas y flujos de trabajo de
          forma clara, rápida y sin fricción.
        </p>
        <div className="hero-actions" >
          <button className="primary">Get Started</button>
          <button className="secondary">Learn More</button>
        </div>
      </section>
      
      <section className={"problem home-section " + effect}>
        <h2>Gestionar tareas no debería ser complicado.</h2>
        <p>Muchas herramientas promente productividad, pero terminan creando más
        confusión.</p>
        
        <ul>
          <li>Demasiadas opciones innecesarias</li>
          <li>Flujos difíciles de entender</li>
          <li>Falta de una visión clara del progreso</li>
          <li>Pérdida de foco en lo importante</li>
        </ul>
      </section>
      
      <section className={"solution home-section " + effect}>
        <h2>Una forma más simple de trabajar.</h2>
        <p>Atlas carga con tus tareas y procesos en un solo lugar, ayudándote a
        mantener el control sin más complejidad.</p>
      </section>
      
      <section className={"benefits home-section " + effect}>
        <h2>Diseñado para avanzar, no para estorbar.</h2>
        <div className="benefit-cards">
          <div className="card">
            <h3>Claridad</h3>
            <p>Visualiza lo que importa, cuando importa.</p>
          </div>
          
          <div className="card">
            <h3>Simplicidad</h3>
            <p>Sin curvas de aprendizaje innecesarias.</p>
          </div>
          
          <div className="card">
            <h3>Productividad</h3>
            <p>Menos fricción, más ejecución.</p>
          </div>
        </div>
      </section>
      
      <section className={"how-it-works home-section " + effect}>
        <h2>Empieza en minutos</h2>
        <ol>
          <li>Crea tu cuenta</li>
          <li>Organiza tus ideas</li>
          <li>Ejecuta tu propi flujo</li>
        </ol>
      </section>
      
      <section className={"cta home-section " + effect}>
        <h2>Comienza a organizar tus ideas</h2>
        <button className="primary">Create free account</button>
      </section>
    </main>
  )
}

export default Home