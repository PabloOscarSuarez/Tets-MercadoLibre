import express from "express";
import routes from "./routes";
import bodyParser from "body-parser";
import morgan from "morgan";
import compression from "compression";
import cors from "cors";

//crear el servidor
const app = express();

//habilitar Cors
const domainAllowed = "http://localhost:3000";
const corsOptions = {
  origin: (origin, callback) => {
    if (domainAllowed === origin) callback(null, true);
    else callback(new Error("No Permitido por Cors"));
  }
};

//habilitar cors
app.use(cors());

//habilitar middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());

//habilitar routing
app.use("/api", routes());

app.listen(4000, () => {
  console.log("servidor funcionando");
});
