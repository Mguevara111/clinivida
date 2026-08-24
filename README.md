# Clinivida — Plataforma de Gestión y Bloqueo de Citas Médicas

![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3+-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-v6+-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

[Español](#español) | [English](#english)

---

<a name="español"></a>
## 🇪🇸 Español

### 🏢 Contexto del Proyecto
En la red de centros de salud **Clinivida**, el agendamiento telefónico de citas médicas presentaba serios problemas de coordinación: sobreposiciones en las agendas de los especialistas y agendamientos que violaban los límites de cobertura de los seguros de los pacientes.

Este proyecto resuelve dicha problemática mediante una plataforma web interna en tiempo real diseñada para el personal de recepción. El sistema valida las reglas de negocio en tiempo real, bloquea conflictos de horario, calcula copagos según el plan de seguro y emite la Ficha Médica Digital oficial.

---

### 🛠️ Características Principales

* **Navegación Multi-ruta con Guardias Protegidas:**
  * `/agendar`: Panel de trabajo para seleccionar Paciente, Médico y Horario.
  * `/confirmacion`: Vista previa con desglose financiero de la consulta y generación de orden.
  * `/historial`: Registro centralizado de citas confirmadas.
  * **Bloqueo de Ruta:** Redirección automática desde `/confirmacion` hacia `/agendar` con mensaje de alerta si no hay un borrador válido o si se violan las reglas del seguro/agenda.
* **Lógica de Agendamiento y Validaciones Estrictas:**
  * **Cálculo de Copago:** Deducción automática del costo base (`consultationFee`) según el seguro:
    * `PLAN_BASICO`: Cobertura del 50%.
    * `PLAN_PREMIUM`: Cobertura del 80%.
    * `SIN_SEGURO`: Cobertura del 0% (Pago total).
  * **Límite de Cobertura Diaria:** Bloqueo automático para pacientes con `PLAN_BASICO` que intenten agendar una 3ª cita en el mismo día.
  * **Prevención de Traslapes:** Validación para evitar dos citas al mismo médico en el mismo bloque horario.
* **Persistencia del Borrador:** Sincronización en `localStorage` mediante `useReducer` para no perder la selección en `/agendar` ante recargas ($F5$) o cierres accidentales.
* **Documentación PDF:** Emisión e impresión de la Ficha Médica Digital en `/confirmacion` utilizando `@react-pdf/renderer`.

---

### 🚀 Tecnologías Utilizadas

* **Frontend:** React + TypeScript + Vite
* **Estilos:** Tailwind CSS
* **Enrutamiento:** `react-router-dom` (v6+)
* **Gestión de Estado:** `useReducer` + `Context API` + Sincronización en `localStorage`
* **Generación de Documentos:** `@react-pdf/renderer`

---

### 📦 Instalación y Ejecución

```bash
# 1. Clonar el repositorio
git clone [https://github.com/Mguevara111/clinivida.git](https://github.com/Mguevara111/clinivida.git)

# 2. Entrar al directorio
cd clinivida

# 3. Instalar dependencias
npm install

# 4. Iniciar servidor de desarrollo
npm run dev


🇬🇧 English🏢 Project OverviewAt Clinivida healthcare network, telephone appointment scheduling faced major coordination issues: overlapping specialist schedules and bookings that exceeded patient insurance coverage limits.This project solves this problem through a real-time internal web platform built for front-desk personnel. The system validates business rules dynamically, blocks schedule conflicts, calculates copays based on insurance plans, and issues the official Digital Medical Order.🛠️ Key FeaturesMulti-Route Navigation with Protected Guards:/agendar: Interactive dashboard to select Patient, Specialist, and Timeslot./confirmacion: Preview page with financial breakdown and order generation./historial: Centralized registry of successfully confirmed appointments.Route Blocking: Automatic redirection from /confirmacion to /agendar with clear alert messages if there is no valid draft or if insurance/schedule rules are violated.Strict Scheduling Rules & Validations:Copay Calculation: Automatic discount from base cost (consultationFee) based on plan:PLAN_BASICO: 50% coverage.PLAN_PREMIUM: 80% coverage.SIN_SEGURO: 0% coverage (Full payment).Daily Coverage Limit: Automatic restriction for PLAN_BASICO patients attempting to book a 3rd appointment on the same day.Overlap Prevention: Validation preventing a specialist from taking two appointments at the exact same hour.Draft Persistence: Seamless sync with localStorage via useReducer so active drafts on /agendar survive page refreshes ($F5$) or browser crashes.PDF Documentation: Official Digital Medical Order generation on /confirmacion built with @react-pdf/renderer.🚀 Tech StackFrontend: React + TypeScript + ViteStyling: Tailwind CSSRouting: react-router-dom (v6+)State Management: useReducer + Context API + localStorage persistencePDF Generation: @react-pdf/renderer📦 Installation & Setup

# 1. Clone the repository
git clone [https://github.com/Mguevara111/clinivida.git](https://github.com/Mguevara111/clinivida.git)

# 2. Navigate to the project directory
cd clinivida

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev