import React, { useState, useEffect } from "react"
import "./Home.css"
import { Link, useLocation } from "react-router-dom"

const Home = () => {
  const [effect, setEffect] = useState("");
  
  useEffect(() => {
    setEffect(prev => "show")
  }, []);
  return (
    <main className="home">
      <section className={"hero home-section " + effect}>
        <h1>
          Deja de perder control sobre tus tareas.
        </h1>
        <p>
          Atlas es una herramienta pensada para organizar tareas y flujos de trabajo de
          forma clara, rápida y sin fricción.
        </p>
        <div className="hero-actions" >
          <Link 
            className="primary" 
            to="/signup"
          >
            Get started
          </Link>
          <Link className="secondary" to="/">Learn More</Link>
        </div>
      </section>
      
      <section className={"problem home-section " + effect}>
        <h2>Gestionar tareas no debería ser complicado.</h2>
        <p>Muchas herramientas prometen productividad, pero terminan creando más
        confusión.</p>
        
        <ul>
          <li>No sabes qué hacer primero</li>
          <li>Pierdes visión del proyecto</li>
          <li>Las herramientas estorban más de lo que ayudan</li>
        </ul>
      </section>
      
      <section className={"solution home-section " + effect}>
        <h2>Una forma más simple de trabajar.</h2>
        <p>Atlas carga con tus tareas y procesos en un solo lugar, ayudándote a
        mantener el control sin más complejidad.</p>
      </section>
      
      <section className={"benefits home-section " + effect}>
        <h2>Un sistema pensado para el orden.</h2>
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
          <li><strong>Crea</strong> tu cuenta</li>
          <li><strong>Organiza</strong> tus ideas</li>
          <li><strong>Ejecuta</strong> tu propio flujo</li>
        </ol>
      </section>
      
      <section className={"cta home-section " + effect}>
        <h2>Comienza a organizar tus ideas</h2>
        <Link 
          className="primary" 
          to="/signup"
        >
          Create free account
        </Link>
      </section>
    </main>
  )
}

export default Home