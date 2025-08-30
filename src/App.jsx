import React, { useState } from 'react';
import './App.css';

const TransporteFlete = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    origen: '',
    destino: '',
    tipoCarga: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    alert('¡Gracias por tu consulta! Nos pondremos en contacto contigo pronto.');
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      origen: '',
      destino: '',
      tipoCarga: '',
      mensaje: ''
    });
  };

  return (
    <div className="transporte-container">
      {/* Header y Navegación */}
      <header className="header">
        <div className="logo">
          <h1>TransporteGlobal</h1>
          <p>Soluciones en flete a larga distancia</p>
        </div>
        <nav className="navigation">
          <ul>
            <li><a href="#inicio" onClick={() => setActiveSection('inicio')} className={activeSection === 'inicio' ? 'active' : ''}>Inicio</a></li>
            <li><a href="#servicios" onClick={() => setActiveSection('servicios')} className={activeSection === 'servicios' ? 'active' : ''}>Servicios</a></li>
            <li><a href="#flota" onClick={() => setActiveSection('flota')} className={activeSection === 'flota' ? 'active' : ''}>Flota</a></li>
            <li><a href="#cotizador" onClick={() => setActiveSection('cotizador')} className={activeSection === 'cotizador' ? 'active' : ''}>Cotizador</a></li>
            <li><a href="#contacto" onClick={() => setActiveSection('contacto')} className={activeSection === 'contacto' ? 'active' : ''}>Contacto</a></li>
          </ul>
        </nav>
      </header>

      {/* Sección Hero */}
      <section id="inicio" className="hero">
        <div className="hero-content">
          <h2>Transporte Confiable a Larga Distancia</h2>
          <p>Ofrecemos servicios de flete seguro y eficiente para todo tipo de carga en todo el país.</p>
          <button className="cta-button" onClick={() => setActiveSection('cotizador')}>Solicitar Cotización</button>
        </div>
      </section>

      {/* Sección de Servicios */}
      <section id="servicios" className="services">
        <h2>Nuestros Servicios</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🚛</div>
            <h3>Transporte de Carga General</h3>
            <p>Manejo y transporte de mercancías diversas con los más altos estándares de seguridad.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">📦</div>
            <h3>Flete Express</h3>
            <p>Servicio prioritario para envíos urgentes con entrega garantizada.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🌡️</div>
            <h3>Carga Refrigerada</h3>
            <p>Transporte especializado para productos que requieren control de temperatura.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🔒</div>
            <h3>Transporte de Valores</h3>
            <p>Servicio seguro para mercancías de alto valor con seguimiento en tiempo real.</p>
          </div>
        </div>
      </section>

      {/* Sección de Flota */}
      <section id="flota" className="fleet">
        <h2>Nuestra Flota</h2>
        <div className="fleet-grid">
          <div className="vehicle-card">
            <div className="vehicle-image camion1"></div>
            <h3>Camiones de 48'</h3>
            <p>Capacidad de hasta 24 palets. Ideales para carga general.</p>
          </div>
          <div className="vehicle-card">
            <div className="vehicle-image camion2"></div>
            <h3>Camiones Refrigerados</h3>
            <p>Control de temperatura desde -20°C hasta 20°C.</p>
          </div>
          <div className="vehicle-card">
            <div className="vehicle-image camion3"></div>
            <h3>Camiones Plancha</h3>
            <p>Perfectos para carga de maquinaria pesada y proyectos especiales.</p>
          </div>
        </div>
      </section>

      {/* Sección de Cotizador */}
      <section id="cotizador" className="quote">
        <h2>Solicita tu Cotización</h2>
        <form onSubmit={handleSubmit} className="quote-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nombre">Nombre completo</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="tipoCarga">Tipo de carga</label>
              <select
                id="tipoCarga"
                name="tipoCarga"
                value={formData.tipoCarga}
                onChange={handleChange}
                required
              >
                <option value="">Seleccione...</option>
                <option value="general">Carga General</option>
                <option value="refrigerada">Carga Refrigerada</option>
                <option value="peligrosa">Materiales Peligrosos</option>
                <option value="maquinaria">Maquinaria Pesada</option>
                <option value="otros">Otros</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="origen">Origen</label>
              <input
                type="text"
                id="origen"
                name="origen"
                value={formData.origen}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="destino">Destino</label>
              <input
                type="text"
                id="destino"
                name="destino"
                value={formData.destino}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group full-width">
            <label htmlFor="mensaje">Información adicional</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows="4"
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Enviar Solicitud</button>
        </form>
      </section>

      {/* Sección de Contacto */}
      <section id="contacto" className="contact">
        <h2>Contacto</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Información de Contacto</h3>
            <p><strong>Dirección:</strong> Av. Principal #123, Ciudad</p>
            <p><strong>Teléfono:</strong> (123) 456-7890</p>
            <p><strong>Email:</strong> info@transporteglobal.com</p>
            <p><strong>Horario:</strong> Lunes a Viernes: 8:00 am - 6:00 pm</p>
          </div>
          <div className="map">
            <h3>Nuestra Ubicación</h3>
            <div className="map-placeholder">
              {/* Aquí iría un componente de mapa real como Google Maps */}
              <p>Mapa de ubicación</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>TransporteGlobal</h3>
            <p>Tu socio confiable en transporte y flete a larga distancia.</p>
          </div>
          <div className="footer-section">
            <h3>Enlaces Rápidos</h3>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#flota">Flota</a></li>
              <li><a href="#cotizador">Cotizador</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Legal</h3>
            <ul>
              <li><a href="#">Términos y Condiciones</a></li>
              <li><a href="#">Política de Privacidad</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 TransporteGlobal. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default TransporteFlete;