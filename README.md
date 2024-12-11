# Urls
## Hello world:
localhost:3000
## Documentacion swagger:
localhost:3000/api-docs
# Run docker
docker run -it --rm -d -p 3000:3000 --name web byvoxel/webhook:latest

# Webhook
La aplicación expone un endpoint `/webhook` que acepta solicitudes POST con un cuerpo JSON. El cuerpo debe contener un campo `mensaje` de tipo string. Cuando se recibe un webhook, se registra en la consola y se responde con un mensaje de confirmación.

## Ejemplo de solicitud