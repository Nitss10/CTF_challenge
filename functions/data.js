// functions/data.js
exports.handler = async () => {
    const data = {
      X_MESSAGE: 'SGF2ZSBhIGdyZWF0IGRheQ==', // Base64 encoded string: "Have a great day"
      Y_MESSAGE: 'bXVkaGmNdHNANHBt', // Base64 encoded string: "mudhuts@4pm"
      VAR1: 'mudhuts',
      VAR2: 'mudhuts@4pm',
      LINK1: 'https://example.com/level1',
      LINK2: 'https://example.com/level2',
      SECRET_WORD: 'supersecret',
      UNLOCK_CODE: 'unlockme'
    };
  
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
  };