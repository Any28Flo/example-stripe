"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
//Express instance
exports.app = express_1.default();
exports.app.use(express_1.default.json());
exports.app.use(cors_1.default({ origin: true }));
exports.app.post('/', (req, res) => {
    const { amount } = req.body;
    res.status(200).send({
        with_tax: amount * 7
    });
});
exports.app.get('/', (req, res) => {
    res.status(200);
});
//# sourceMappingURL=server.js.map