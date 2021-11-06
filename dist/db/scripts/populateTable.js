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
const past_meeting_participants_1 = require("../../lib/past-meeting-participants");
const db = require('../index');
const populateTable = () => __awaiter(void 0, void 0, void 0, function* () {
    const sqlQuery = `INSERT INTO participants (
    id,
    name,
    user_email
  ) VALUES (
    $1,
    $2,
    $3
  ) RETURNING *;`;
    const { participants } = past_meeting_participants_1.default;
    try {
        for (let i = 0; i < participants.length; i++) {
            const { id, name, user_email } = participants[i];
            const response = yield db.query(sqlQuery, [id, name, user_email]);
            console.log(response.rows[0]);
        }
    }
    catch (error) {
        console.log(`${error.name}: ${error.message}`);
    }
});
populateTable();
//# sourceMappingURL=populateTable.js.map