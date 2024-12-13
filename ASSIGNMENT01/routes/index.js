var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

/* GET About page */
router.get('/about', (req, res) => {
  res.render('about', { title: 'About Me' });
});

/* GET Projects Page */
router.get('/projects', (req, res) => {
  res.render('projects', { title: 'Projects' });
});

/* GET Contact */
router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Me' });
});

/* Handle 404 errors */
router.use((req, res) => {
  res.status(404).render('error', { title: '404 - Page Not Found' });
});

module.exports = router;