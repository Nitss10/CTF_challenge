exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*', // Allow requests from any origin
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET'
  };

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
      headers,
      body: JSON.stringify(data),
    };
  };