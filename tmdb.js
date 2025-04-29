const fetch = require('node-fetch');

exports.handler = async (event) => {
  const imdbId = event.queryStringParameters.id;
  const url = `https://api.themoviedb.org/3/find/${imdbId}?api_key=b9deee9852a2757e915ce1360a62de73&external_source=imdb_id`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};