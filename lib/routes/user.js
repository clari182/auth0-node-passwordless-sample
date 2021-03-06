'use strict';

const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
const express = require('express');

const router = express.Router();

const env = {
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
  AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
  AUTH0_CALLBACK_URL: process.env.AUTH0_CALLBACK_URL
};

/* GET user profile. */
router.get('/', ensureLoggedIn, (req, res) => {
  res.render('user', { 
    user: req.user._json,
    env
  });
});

module.exports = router;