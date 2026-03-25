# Portafolio Personal - Alexander Vasquez Montes

Este repositorio contiene mi portafolio web personal, desarrollado como parte del curso **Desarrollo de Aplicaciones Web Avanzado** en **Tecsup** (Arequipa, Perú). 

El proyecto demuestra la implementación de un servidor local HTTP en **Node.js** para entregar archivos estáticos (HTML, CSS, JavaScript) siguiendo una arquitectura One-Page con un diseño moderno, responsivo y de estilo oscuro (Dark Mode, Blanco y Negro).

---

## 🚀 Características del Proyecto

*   **Servidor Backend (Node.js):** Construido de forma nativa utilizando los módulos `http`, `fs` y `path` sin depender de frameworks adicionales (como Express).
*   **Diseño One-Page:** Navegación fluida ("smooth scroll") mediante un único archivo `index.html`.
*   **Interfaz Moderna:** Uso de CSS puro y [Bootstrap 5](https://getbootstrap.com/) para garantizar un diseño 100% *responsive*.
*   **Animaciones y Lógica:** Barras de habilidades dinámicas, contadores progresivos y detección de *scroll* construidos en JavaScript puro (`script.js`).
*   **Formulario de Contacto:** Lógica implementada para capturar mensajes y enrutar inteligentemente a una página de `/confirmacion.html`.

---

## 📁 Estructura del Directorio

El proyecto sigue una estructura limpia separando la lógica del servidor de los archivos públicos:

```text
📦 Semana 02
 ┣ 📂 public
 ┃ ┣ 📂 images            # Imágenes y recursos gráficos
 ┃ ┣ 📜 index.html        # Estructura de la página (Página Principal)
 ┃ ┣ 📜 confirmacion.html # Página de éxito al enviar contacto
 ┃ ┣ 📜 style.css         # Hoja de estilos (Tema monocromático)
 ┃ ┗ 📜 script.js         # Lógica frontend (ScrollSpy, barras, animaciones)
 ┣ 📜 server.js           # Lógica del Servidor HTTP Node.js
 ┣ 📜 .gitignore          # Exclusiones de control de versiones
 ┗ 📜 README.md           # Este archivo
```

---

## ⚙️ Instalación y Ejecución Local

Sigue estos pasos para probar el proyecto en tu entorno local:

1. **Requisitos previos:** Asegúrate de tener instalado [Node.js](https://nodejs.org/) en tu equipo.
2. **Clonar/Descargar** los archivos de este directorio.
3. Abrir la terminal en la raíz del proyecto (donde se encuentra `server.js`).
4. **Ejecutar el servidor:**

   ```bash
   node server.js
   ```

5. **Visualizar el portafolio:** Abre tu navegador preferido e ingresa a:
   👉 **http://localhost:3000**

---

## 🛠️ Tecnologías Utilizadas

*   **Backend:** Node.js (Módulos `http`, `fs`, `path`)
*   **Estructura:** HTML5
*   **Estilos:** CSS3, Bootstrap 5.3, Bootstrap Icons
*   **Interactividad:** JavaScript (ES6+)

---

## 🧑‍💻 Autor

**Alexander Cristopher Vasquez Montes**  
*Estudiante de Desarrollo de Software*  
📍 Tecsup - Arequipa, Perú  
📧 alexander.vasquezmontes@gmail.com
