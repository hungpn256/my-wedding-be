import cors from "cors";
import express from "express";
import morgan from "morgan";
const app = express();
app.use(morgan("combined"));

app.use((req, res, next) => {
  const origin = req.get("origin");
  res.header("Access-Control-Expose-Headers", "total-record");
  res.header("Access-Control-Allow-Origin", origin);
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,POST,HEAD,OPTIONS,PUT,PATCH,DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma, Access-Control-Request-Method, Access-Control-Allow-Headers, Access-Control-Request-Headers"
  );

  if (req.method === "OPTIONS") {
    res.sendStatus(204);
  } else {
    next();
  }
});

app.get("/api/hello-word", function (_: any, res: any) {
  res.send("Hello World");
});

app.get("/api", function (_: any, res: any) {
  res.send("OKE");
});

const corsOption = {
  // origin: [process.env.FRONTEND_BASE_URL],  TODO: open comment after have a FE
  origin: "*",
  methods: "GET,POST,HEAD,OPTIONS,PUT,PATCH,DELETE",
  credentials: true,
};

app.use(cors(corsOption));
const port = 3000;
app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
});
