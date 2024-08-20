"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)("combined"));
app.use((req, res, next) => {
    const origin = req.get("origin");
    res.header("Access-Control-Expose-Headers", "total-record");
    res.header("Access-Control-Allow-Origin", origin);
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET,POST,HEAD,OPTIONS,PUT,PATCH,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma, Access-Control-Request-Method, Access-Control-Allow-Headers, Access-Control-Request-Headers");
    if (req.method === "OPTIONS") {
        res.sendStatus(204);
    }
    else {
        next();
    }
});
app.get("/hello-word", function (_, res) {
    res.send("Hello World");
});
app.get("/", function (_, res) {
    res.send("OKE");
});
const corsOption = {
    // origin: [process.env.FRONTEND_BASE_URL],  TODO: open comment after have a FE
    origin: "*",
    methods: "GET,POST,HEAD,OPTIONS,PUT,PATCH,DELETE",
    credentials: true,
};
app.use((0, cors_1.default)(corsOption));
const port = 3000;
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Example app listening on port ${port}`);
}));
