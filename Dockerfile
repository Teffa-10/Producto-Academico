# Imagen base oficial de Node.js
FROM node:18-alpine

# Crear directorio de la aplicación dentro del contenedor
WORKDIR /app

# Copiar archivos necesarios
COPY package*.json ./

# Instalar dependencias
RUN npm ci --only=production

# Copiar el resto del código
COPY . .

# Exponer el puerto que usa tu app (ajusta si usas otro)
EXPOSE 3000

# Comando por defecto al iniciar el contenedor
CMD ["node", "index.js"]

#FN