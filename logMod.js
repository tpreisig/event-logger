const { v4: uuid } = require('uuid');
const { format } = require('date-fns');

const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;

const logMod = async (message) => {
    const dateTime = `${format(new Date(), 'yyyy MMM dd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${message}\t${uuid()}\n`;

    console.log(dateTime);

    try {
        if (!fs.existsSync(path.join(__dirname, 'mod_logs'))) {
            await fsPromises.mkdir(path.join(__dirname, 'mod_logs'));
        }
        await fsPromises.appendFile(path.join(__dirname, 'mod_logs', 'logged.txt'), logItem);

    } catch (err) {
        console.log(`Let's print that bug on a new line:\n${err}`);
    }
};

module.exports = logMod;