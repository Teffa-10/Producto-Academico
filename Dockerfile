FROM nginx:alpine

# Elimina contenido por defecto
RUN rm -rf /usr/share/nginx/html/*

# Copia el sitio generado por Jekyll al contenedor
COPY _site /usr/share/nginx/html

EXPOSE 80
