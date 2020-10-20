const express = require('express');

const app = express();

app.get('/', (req, res) => res.send({ msg: 'Welcome to the Wavio Sampler API' }));

// Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/kits', require('./routes/kits'));
app.use('/api/regions', require('./routes/regions'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));