const fs = require('fs');
const path = require('path');

let jsFile = fs.readFileSync(path.resolve(__dirname, 'script.js'), 'utf8');

jsFile = jsFile.replace('X_MESSAGE_PLACEHOLDER', process.env.X_MESSAGE);
jsFile = jsFile.replace('Y_MESSAGE_PLACEHOLDER', process.env.Y_MESSAGE);
jsFile = jsFile.replace('SECRET_WORD_PLACEHOLDER', process.env.SECRET_WORD);
jsFile = jsFile.replace('UNLOCK_CODE_PLACEHOLDER', process.env.UNLOCK_CODE);

fs.writeFileSync(path.resolve(__dirname, 'script.js'), jsFile);
