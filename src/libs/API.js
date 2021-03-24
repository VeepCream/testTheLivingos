import { httpClient } from './HttpAPI'

export const endpoint = {
    "getPhotos": { baseURL: "https://jsonplaceholder.typicode.com/", url: "photos", method: "GET" }
}

async function API(name, opt) {
    const requireEndpoint = endpoint[name]

    config = {
        method: requireEndpoint.method,
        baseURL: requireEndpoint.baseURL,
        redirect: true,
        url: setURLApi(requireEndpoint, opt),
        headers: {
            "Content-Type": "application/json",
        },
        data: opt?.data || null
    }
    if (requireEndpoint.method === "GET") {
        config["params"] = opt?.params
    }

    return await httpClient(config);


}

function setURLApi(requireEndpoint, opt) {
    let url = requireEndpoint.url
    if (opt?.path) {
        requireEndpoint.paths.forEach((v, i) => {
            url = url.replace(":" + v, opt?.path[v]);
        })
    }

    return url
}

export default API