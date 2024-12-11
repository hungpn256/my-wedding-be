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
exports.prisma = void 0;
const client_1 = require("@prisma/client");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = __importDefault(require("./routes"));
exports.prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('combined'));
app.use(body_parser_1.default.json());
app.use((req, res, next) => {
    const origin = req.get('origin');
    res.header('Access-Control-Expose-Headers', 'total-record');
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,POST,HEAD,OPTIONS,PUT,PATCH,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma, Access-Control-Request-Method, Access-Control-Allow-Headers, Access-Control-Request-Headers');
    if (req.method === 'OPTIONS') {
        const optionStatus = 204;
        res.sendStatus(optionStatus);
    }
    else {
        next();
    }
});
app.use('/api/', routes_1.default);
const corsOption = {
    origin: ['hungpn256.click', 'localhost:5173'],
    methods: 'GET,POST,HEAD,OPTIONS,PUT,PATCH,DELETE',
    credentials: true,
};
app.use((0, cors_1.default)(corsOption));
const port = 3333;
const connect = () => __awaiter(void 0, void 0, void 0, function* () {
    yield exports.prisma.$connect();
    app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
        // eslint-disable-next-line no-console
        console.log(`Example app listening on port ${port}`);
    }));
});
connect();
