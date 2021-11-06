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
exports.getParticipantByDbInstance = exports.getParticipantsByStudentId = exports.getAllParticipants = void 0;
const db = require('../db');
const getAllParticipants = () => __awaiter(void 0, void 0, void 0, function* () {
    const sqlQuery = 'SELECT * FROM participants;';
    const data = yield db.query(sqlQuery);
    return packageResponse(data.rows);
});
exports.getAllParticipants = getAllParticipants;
const getParticipantsByStudentId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const sqlQuery = `SELECT * FROM participants WHERE id=$1;`;
    const data = yield db.query(sqlQuery, [id]);
    return packageResponse(data.rows);
});
exports.getParticipantsByStudentId = getParticipantsByStudentId;
const getParticipantByDbInstance = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const sqlQuery = 'SELECT * FROM participants WHERE db_id=$1;';
    const data = yield db.query(sqlQuery, [id]);
    return packageResponse(data.rows);
});
exports.getParticipantByDbInstance = getParticipantByDbInstance;
const packageResponse = (response) => {
    const recordsNumber = response.length;
    return {
        page_count: 1,
        page_size: 300,
        total_records: recordsNumber,
        next_page_token: '',
        participants: response,
    };
};
//# sourceMappingURL=participants.js.map