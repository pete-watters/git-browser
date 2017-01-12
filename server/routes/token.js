module.exports = function(app) {
  app.post('/token', function(req, res) {
    res.setHeader('Content-Type', 'application/json');

    if (req.body.grant_type === 'password') {

      console.log('here we are now' + req.body.grant_type + JSON.stringify(req.body));
      if (req.body.username === 'letme') { // fixme add token validation here
        res.send({ access_token: '26fff6cc69a115716d980d9909a03c82b280a761' });
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
