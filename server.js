const express = require('express'); // import = babel, typescript, etc.. require = common js ...

const app = express();

app.get('/', (req, res) =>
  res.json({ msg: 'Welcome to the ContactKeeper API...' })
);

const PORT = process.env.PORT | 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
