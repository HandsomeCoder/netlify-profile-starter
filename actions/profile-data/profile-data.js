// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {

  const profile = {
      "basic_info": {
          "image": "profile-pic.jpg",
          "name": {
              "first_name": "Harsh",
              "middle_name": "M.",
              "last_name": "Shah",
              "order": [
                  "first_name",
                  "middle_name",
                  "last_name"
              ]
          },
          "pronouns": {
              "value": "he_him",
              "emoji": "&#128102;"
          }
      },
      "contact_info": {
          "phone_no": {
              "value": "+1 (902) 412-8065",
              "emoji": "&#128222;"
          },
          "email_id": {
              "value": "harshshah1295@gmail.com",
              "emoji": "&#128232;",
              "emoji_style": {
                  "font-size": "20px"
              }
          },
          "websites": [
              {
                  "name": "professional",
                  "labelKey": "professional",
                  "data": [
                      {
                          "name": "LinkedIn",
                          "url": "https://www.linkedin.com/in/handsomecoder/",
                          "icon": "linkedin.svg"
                      },
                      {
                          "name": "GitHub",
                          "url": "https://github.com/HandsomeCoder",
                          "icon": "github.svg"
                      },
                      {
                          "name": "Wordpress",
                          "url": "https://harshshah1295.wordpress.com/",
                          "icon": "wordpress.svg"
                      },
                      {
                          "name": "Codechef",
                          "url": "https://www.codechef.com/users/handsome_coder",
                          "icon": "codechef.svg"
                      },
                      {
                          "name": "Hackerrank",
                          "url": "https://www.hackerrank.com/handsome_coder?hr_r=1",
                          "icon": "hackerrank.svg"
                      }
                  ]
              },
              {
                  "name": "social",
                  "labelKey": "social",
                  "data": [
                      {
                          "name": "YouTube",
                          "url": "https://www.youtube.com/channel/UCH9Nrh24y__GkstE4tl2QGw?view_as=subscriber",
                          "icon": "youtube.svg"
                      },
                      {
                          "name": "Instagram",
                          "url": "https://www.instagram.com/harsh_1295/",
                          "icon": "instagram.svg"
                      },
                      {
                          "name": "Twitter",
                          "url": "https://twitter.com/harshshah1295",
                          "icon": "twitter.svg"
                      },
                      {
                          "name": "Facebook",
                          "url": "https://www.facebook.com/HandsomeCoder",
                          "icon": "facebook.svg"
                      }
                  ]
              }
          ]
      },
      "skills_info": [
          {
              "title": "languages",
              "labelKey": "languages",
              "skills": [
                  {
                      "name": "HTML5",
                      "icon": "html5.svg",
                      "percentage": 85,
                      "size": "sm"
                  },
                  {
                      "name": "CSS3",
                      "icon": "css3.svg",
                      "percentage": 85,
                      "size": "sm"
                  },
                  {
                      "name": "Angular",
                      "icon": "angular.svg",
                      "percentage": 80,
                      "size": "sm"
                  },
                  {
                      "name": "Javascript",
                      "icon": "javascript.svg",
                      "percentage": 85,
                      "size": "sm"
                  },
                  {
                      "name": "Typescript",
                      "icon": "typescript.svg",
                      "percentage": 80,
                      "size": "sm"
                  },
                  {
                      "name": "NodeJS",
                      "icon": "nodejs.svg",
                      "percentage": 80,
                      "size": "sm"
                  }
              ]
          },
          {
              "title": "cloud_technologies",
              "labelKey": "cloud_technologies",
              "skills": [
                  {
                      "name": "Google Cloud",
                      "icon": "gcp.svg",
                      "percentage": 40,
                      "size": "sm"
                  }
              ]
          }
      ],
      "bio_info":{
          "details": ["Prod: I am a backbencher who has accomplished a few things so far!",
          "I have 3.5 years of product development and engineering experience.",
          "I have worked as Facilitator of Google's Applied CS Skills in 2017, Lead of Google Developer Student Club in 2017 and Student Coordinator at CHARUSAT in 2017",
          "Playing basketball and chess is my hobby. I have represented my previous Organization (TCS) in Inter-Organization Basketball Tournament and my undergrad University (CHARUSAT) twice in the All India University Basketball Tournament"]
      }
  }

  try {
    return {
      statusCode: 200,
      body: JSON.stringify(profile),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }