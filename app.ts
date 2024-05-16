import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import register from "./routes/register";
import auth from "./routes/auth";
import catalogo from "./routes/catalogo";
import hacerPedido from "./routes/hacerPedido";
import misPedidos from "./routes/misPedidos";
import actualizarPedido from "./routes/actualizarPedido";

dotenv.config();
const app = express().use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use('/register', register);
app.use('/auth', auth)
app.use('/catalogo', catalogo)
app.use('/hacerPedido', hacerPedido)
app.use('/misPedidos', misPedidos)
app.use('/uppdate', actualizarPedido)

const PORT = process.env.PORT || 10101;
app.listen(PORT, () => {
    console.log("Servidor ejecutandose en pueto: ", PORT);
}).on("error", (error) => {
    throw new Error(error.message);
});