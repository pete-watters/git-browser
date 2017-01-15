module.exports = function(app) {
  app.post('/token', function(req, res) {
    res.setHeader('Content-Type', 'application/json');

    if (req.body.grant_type === 'password') {

      console.log('Adding your token: ' +  JSON.stringify(req.body));
      // Double Check token syntax
      var regExPattern = new RegExp("^([a-z0-9]{40})$"); // verify alphanumeric and at least 40 long
      if (regExPattern.test(req.body.username)) {
        res.send({ access_token: req.body.username });
      } else {
        res.status(400).send({ error: 'invalid_grant' });
      }
    } else {
      res.status(400).send({ error: 'unsupported_grant_type' });
    }
  });

  app.post('/revoke', function(req, res) {
    if (req.body.token_type_hint === 'access_token' || req.body.token_type_hint === 'refresh_token') {
      res.send('');
    } else {
      res.status(400).send({ error: 'unsupported_token_type' });
    }
  })
};
