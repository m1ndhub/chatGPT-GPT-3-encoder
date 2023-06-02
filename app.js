const express = require('express');
const { encode } = require('gpt-3-encoder');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const app = express();
const port = 8080;

app.use(express.text({ limit: '500mb' }));

if (process.env.SWAGGER_UI_ENABLE === "true") {
  const swaggerDocument = YAML.load('./swagger.yaml');
  app.use('/swagger-ui', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

// API route for string length
app.post('/token/length', (req, res) => {
  const inputString = req.body
  const encoded = encode(inputString);
  const encodedLength = encoded.length;
  res.json({ text: req.body, encodedLength: encodedLength });


});

app.listen(port, () => {
  console.log(`Server start on port ${port}`);
});