// Importa o módulo express para esse arquivo
const express = require("express");
const { url } = require("inspector");
const nodemailer = require('nodemailer');
const smtpTransport = require("nodemailer/lib/smtp-transport");

require("dotenv").config();

// Instancia uma referência do express no projeto
const app = express();
const port = process.env.PORT || 3000; // Const para armanezar a porta do servidor
app.set("view engine", "ejs");
const path = require("path");
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "assets")));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/video", (req, res) => {
    res.render("video");
});

app.post("/send", async (req,res) => {


app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
