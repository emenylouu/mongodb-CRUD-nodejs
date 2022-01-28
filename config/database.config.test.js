const database_config = require("./database.config")
// @ponicode
describe("database_config.default", () => {
    test("0", async () => {
        await database_config.default()
    })
})
