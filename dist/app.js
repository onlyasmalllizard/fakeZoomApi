"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const participants_1 = require("./routes/participants");
const app = express();
app.use('/', express.json());
app.use('/participants', participants_1.default);
app.get('/', (req, res) => res.send({ success: true, message: 'Hello world!' }));
exports.default = app;
//# sourceMappingURL=app.js.map