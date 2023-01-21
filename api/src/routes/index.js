const { Router } = require('express');

// Importar todos los routers;
const health = require('./0-Health.js');
const routes1 = require('./1.js');
//__

const router = Router();

// Configurar los routers
router.use('/', health);
router.use('/vercel', routes1);

//__

module.exports = router;