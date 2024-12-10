const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
const port = 3000;

// Configuración de Swagger
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Hola Mundo API',
            version: '1.0.0',
            description: 'API de ejemplo para Hola Mundo con webhooks',
        },
        servers: [
            {
                url: `http://localhost:${port}`,
            },
        ],
    },
    apis: ['./index.js'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Middleware para parsear JSON
app.use(express.json());

/**
 * @swagger
 * /webhook:
 *   post:
 *     summary: Recibe un webhook
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               mensaje:
 *                 type: string
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 */
app.post('/webhook', (req, res) => {
    console.log('Webhook recibido:', req.body);
    res.send('Webhook recibido');
});

// Nueva ruta GET para mostrar "Hola Mundo" en el navegador
app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});