exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*', // Allow requests from any origin
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET'
  };

    const data = {
      X_MESSAGE: '42.389594', 
      Y_MESSAGE: '-72.526612', 
      VAR1: 'campuspond',
      VAR2: 'campus pond',
      LINK1: 'https://www.geeksforgeeks.org/print-longest-common-substring/',
      LINK2: 'https://bit.ly/lastVaultFlagUp',
      SECRET_WORD: 'wipuspocus',
      UNLOCK_CODE: 'puspo'
    };
  
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(data),
    };
  };