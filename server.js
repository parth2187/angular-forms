const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/signup', (req, res) => {
  const { email, password } = req.body;
  const users = router.db.get('users').value();
  const user = users.find(u => u.email === email);
  if (user) {
    res.status(409).json({ message: 'Email already exists' });
  } else {
    const id = users.length + 1;
    router.db.get('users').push({ id, email, password }).write();
    res.status(201).json({ id, email });
  }
});

server.post('/login', (req, res) => {
  const { email, password } = req.body;
  const users = router.db.get('users').value();
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    res.status(200).json({ token: 'my-token' });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

server.use(router);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});