# Producto-Academico

## Descripción
Este proyecto es un blog personal de un estudiante de Ingeniería de Sistemas. La aplicación permite mostrar información sobre el autor, sus habilidades y los últimos artículos. Además, incluye una API que exporta las rutas de las imágenes en formato JSON.

Blog técnico desarrollado por un grupo de estudiantes de Ingeniería de Sistemas, que combina contenido estático (Jekyll) con una API dinámica construida en Node.js. El proyecto está contenerizado con Docker, probado con Jest y desplegado automáticamente en GitHub Pages y GHCR.

---

## 🚀 Características Principales

- 🌐 Sitio web estático generado con **Jekyll**
- 🔧 API RESTful en **Node.js + Express**
- 🗂️ Base de datos local con **SQLite**
- ✅ Pruebas automatizadas con **Jest + Supertest**
- 📦 Contenedor Docker publicado en **GitHub Container Registry**
- ⚙️ CI/CD con **GitHub Actions** para pruebas, build y despliegue

---

## Estructura del Proyecto
```
Producto-Academico
├── .github
│   └── workflows
│       └── static.yml
├── _data
│   └── images.json
├── data
│   └── images.json
├── tests
│   ├── fizzbuzz.test.js
│   └── api.test.js
├── assets
│   └── images
│       └── htb-crocodile
│           ├── answer-0.png
│           ├── answer-1.png
│           └── answer-2.png
├── database.sqlite
├── index.html
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

---

## 🛠️ Tecnologías Usadas

- **Jekyll** para generación del blog estático
- **Node.js** y **Express** para la API
- **SQLite** como base de datos embebida
- **Jest** y **Supertest** para pruebas unitarias y de integración
- **Docker** + **GHCR** para contenerización
- **GitHub Actions** para integración y despliegue continuo

---

## Requisitos
- Node.js
- npm
- SQLite
- Docker

## Instalación
1. Clona el repositorio:
   ```
   git clone https://github.com/Teffa-10/Producto-Academico.git
   ```
2. Navega al directorio del proyecto:
   ```
   cd Producto-Academico
   ```
3. Instala las dependencias:
   ```
   npm install
   ```

## Uso
1. Inicia el servidor:
   ```
   node index.js
   ```
2. Accede a la aplicación en tu navegador en `http://localhost:3000`.

## API
- **GET /export-json**: Exporta las rutas de las imágenes en formato JSON.

## Pruebas
Para ejecutar las pruebas, utiliza el siguiente comando:
```
npm test
```

## Despliegue
El proyecto incluye un flujo de trabajo de GitHub Actions para el despliegue automático. Asegúrate de tener configurado el archivo `.github/workflows/jekyll-gh-pages.yml` correctamente.

## Contribuciones
Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o un pull request.

## Licencia
Este proyecto está bajo la Licencia MIT.
