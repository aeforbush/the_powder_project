// res.render() can accept a second argument, an object, which includes all the data to be passed in
const router = require('express').Router();
const { Content } = require('../models');

router.get('/', (req, res) => {
  Content.findAll({
    
  }).then(dbContentData => {
    console.log(dbContentData[0].content);
    res.render('homepage', {
      // .content matches the model
      content: dbContentData[0].content,
      title: dbContentData[0].title
    });
  })
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

module.exports = router;