import express from "express";
import cors from "cors";
import * as bodyParser from "body-parser";
import Express from 'express';
import session from 'express-session';
import { Routers } from "./Routers/routes";
import passport from "passport"
import { createServer} from 'http';

const app: express.Application = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  session({
    secret: "sadfwsddyu8wehdyewgqdyugebyufwergh",
    resave: true,
    rolling: true,
    cookie: {
      maxAge: 360000,
      secure: false
    }
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/", Routers);
const port = process.env.PORT || 8080;
const server = createServer(app);


server.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});
