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
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const participants_1 = require("../models/participants");
const participantsRouter = express.Router();
participantsRouter.get('/person/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const response = yield (0, participants_1.getParticipantsByStudentId)(id);
        res.status(200).send({
            success: true,
            message: `All instances for student with id ${id}`,
            payload: response,
        });
    }
    catch (error) {
        res.status(500).send({
            success: false,
            message: `${error.name}: ${error.message}`,
            status: 500,
        });
    }
}));
participantsRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const response = yield (0, participants_1.getParticipantByDbInstance)(id);
        res.status(200).send({
            success: true,
            message: `Participant at database instance ${id}`,
            payload: response,
        });
    }
    catch (error) {
        res.status(500).send({
            success: false,
            message: `${error.name}: ${error.message}`,
            status: 500,
        });
    }
}));
participantsRouter.get('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, participants_1.getAllParticipants)();
        res.status(200).send({
            success: true,
            message: 'All participants',
            payload: response,
        });
    }
    catch (error) {
        res.status(500).send({
            success: false,
            message: `${error.name}: ${error.message}`,
            status: 500,
        });
    }
}));
exports.default = participantsRouter;
//# sourceMappingURL=participants.js.map