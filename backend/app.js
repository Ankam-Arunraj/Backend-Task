const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const protectedRoutes = require('./routes/protected');

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/protected', protectedRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});