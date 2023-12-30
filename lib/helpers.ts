

export const getURL = () => {
    let url =
        process?.env?.NEXT_PUBLIC_SITE_URL!
    url = url.includes("http://") ? url : `http://${url}`
    url = url.charAt(url.length - 1) === "/" ? url : `${url}/`;
    return url;
}

export const getSiteName = () => {
    return process?.env?.NEXT_PUBLIC_SITE_NAME!;
}