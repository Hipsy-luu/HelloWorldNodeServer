FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

# Se copian los archivos del repositorio
RUN git clone https://github.com/Hipsy-luu/HelloWorldNodeServer./

# Se lanza la app por el puerto 1111 del sistema dentro de la imagen
EXPOSE 1111
# Se ejecuta el el comando CMD para lanzar la app (ponerla en linea por el puerto 1111)
CMD [ "node", "server.js" ]