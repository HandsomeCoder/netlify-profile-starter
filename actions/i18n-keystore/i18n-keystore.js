// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {

  const translations = [{
        "key": "social",
        "translations": {
            "en": "Social"
        }
    },
    {
        "key": "professional",
        "translations": {
            "en": "Professional"
        }
    },
    {
        "key": "male",
        "translations": {
            "en": "Male"
        }
    },
    {
        "key": "he_him",
        "translations": {
            "en": "(He/Him)"
        }
    },
    {
        "key": "languages",
        "translations": {
            "en": "Languages"
        }
    },
    {
        "key": "technologies",
        "translations": {
            "en": "Technologies"
        }
    },
    {
        "key": "devops",
        "translations": {
            "en": "DevOps"
        }
    },
    {
        "key": "cloud_technologies",
        "translations": {
            "en": "Cloud Technologies"
        }
    }]

  try {
    const subject = event.queryStringParameters.name || 'World'
    return {
      statusCode: 200,
      body: JSON.stringify(translations),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
