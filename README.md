# Producto-Academico

## Descripción
Este proyecto es un blog personal de un estudiante de Ingeniería de Sistemas. La aplicación permite mostrar información sobre el autor, sus habilidades y los últimos artículos. Además, incluye una API que exporta las rutas de las imágenes en formato JSON.

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

## Requisitos
- Node.js
- npm
- SQLite

## Instalación
1. Clona el repositorio:
   ```
   git clone <URL_DEL_REPOSITORIO>
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
El proyecto incluye un flujo de trabajo de GitHub Actions para el despliegue automático. Asegúrate de tener configurado el archivo `.github/workflows/static.yml` correctamente.

## Contribuciones
Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o un pull request.

## Licencia
Este proyecto está bajo la Licencia MIT.