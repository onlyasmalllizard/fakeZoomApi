"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const port = process.env.PORT || 3000;
app_1.default.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map