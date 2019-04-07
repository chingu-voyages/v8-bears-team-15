import express from 'express';

const router = express.Router();

// Messages
router.get('/', (req, res) => {
  res.status(200).send({ 
    message: 'Welcome to Jobbatical clone application API'
  });
});

// Default
router.get('/*', (req, res) => {
  res.status(200).send({ 
    message: 'The endpoint you have hit does not exist' 
  });
});

module.exports = router;
