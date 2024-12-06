const fetchApiKey = () => {
    let promise = new Promise(async (resolve, reject) => {
        try {
            let response = await fetch(apiUrl + '/keys', {
                method: 'POST'
            })
            response = await response.json() // convert response to json
            resolve(response.key)
        } catch {
            reject()
        }
    });
    return promise
}

const fetchPlanetData = (apiKey) => {
    let promise = new Promise(async (resolve, reject) => {
        try {
            let response = await fetch(apiUrl + '/bodies', {
                method: 'GET',
                headers: { 'x-zocom': apiKey }
            })
            response = await response.json() // convert response to json
            resolve(response.bodies)
        } catch {
            reject()
        }
    });
    return promise
}