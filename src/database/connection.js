const createPool = require('mysql2/promise').createPool;

const pool = createPool({
    host:'enhafa.com',
    user: 'hzmmwmac_Ed',
    password: 'Edsghot321&&',
    database: "hzmmwmac_IntranetEnhafa",
    port: 3306
})

module.exports = { pool };