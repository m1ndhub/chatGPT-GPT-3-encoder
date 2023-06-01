const express = require('express');
const { encode } = require('gpt-3-encoder');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const app = express();
const port = 3001;

app.use(express.text());

const swaggerDocument = YAML.load('./swagger.yaml');
app.use('/swagger-ui', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// API route for string length
app.post('/token/length', (req, res) => {
    const inputString  = req.body
    const encoded = encode(inputString);
    const encodedLength = encoded.length;
    res.json({ text:req.body , encodedString: encoded, encodedLength: encodedLength });
  });

app.listen(port, () => {
  console.log(`Server start on port ${port}`);
});