import express, { Application, Request, Response } from "express";
import config from "../config/default";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import * as swaggerOptions from "../swaggerOptions.json";
import log from "./logger";
import connect from "./db/connect";
import { usersRouter } from "./routes";

const port = config.port as number;
const host = config.host as string;

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get("/", (req: Request, res: Response) => res.sendStatus(200));
app.use("/users", usersRouter);

app.listen(port, host, () => {
  log.info(`server started at http://${host}:${port}`);
  connect();
});
