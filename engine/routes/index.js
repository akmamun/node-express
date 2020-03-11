const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  await res.send( { message: 'API home page' });
});

module.exports = router;
