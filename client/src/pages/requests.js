const endpointURL = 'https://jiayu-portfolio-server.herokuapp.com/graphql';

async function loadResumeData() {
    const response = await fetch(endpointURL, {
        method: 'POST',
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            query: ` {
                experiences {
                    id
                    time
                    role
                    company
                    desc
                }
                languages {
                    id
                    content
                }
                illustrationsData {
                    id
                    name
                    type
                    time
                    desc
                    url
                }
                codingsData {
                    id
                    name
                    role
                    time
                    desc
                    url
                    demo
                    github
                }
                codingSkillset {
                    id
                    content
                }
                softwareSkillset {
                    id
                    content
                }
                education {
                    id
                    time
                    major
                    school
                    location
                    desc
                }
              }
            `
        })
    });

    const responseBody = await response.json();
    return responseBody.data;
}

async function loadCodingsData() {
    const response = await fetch(endpointURL, {
        method: 'POST',
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            query: ` {
                codingsData {
                  name
                  role
                  time
                  desc
                  url
                  demo
                  github
                }
              }
            `
        })
    });

    const responseBody = await response.json();
    return responseBody.data;
}

async function loadDesignData() {
    const response = await fetch(endpointURL, {
        method: 'POST',
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            query: ` {
                designsData {
                  name
                  time
                  id
                  role
                  desc
                  url
                }
              }
            `
        })
    });

    const responseBody = await response.json();
    return responseBody.data;
}

async function loadIllustrationData() {
    const response = await fetch(endpointURL, {
        method: 'POST',
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            query: ` {
                illustrationsData {
                  id
                  name
                  type
                  time
                  desc
                  url
                }
              }
            `
        })
    });

    const responseBody = await response.json();
    return responseBody.data;
}

exports { loadResumeData, loadCodingsData, loadDesignData, loadIllustrationData };
