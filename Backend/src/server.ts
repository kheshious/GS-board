import * as express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello, from generic switch board server!!!")
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
     console.log(`Server is running in http://localhost:${PORT}`);
});
