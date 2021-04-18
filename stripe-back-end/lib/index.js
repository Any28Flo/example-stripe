"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripe = void 0;
const dotenv_1 = require("dotenv");
if (process.env.NODE_ENV !== 'production') {
    dotenv_1.config();
}
//Initialize Stripe
const stripe_1 = __importDefault(require("stripe"));
exports.stripe = new stripe_1.default(process.env.STRIPE_KEY, {
    apiVersion: "2020-08-27"
});
//Initialize the API with express
const server_1 = require("./server");
const port = process.env.PORT || 3333;
server_1.app.listen(port, () => { console.log(`Server running`); });
//# sourceMappingURL=index.js.map