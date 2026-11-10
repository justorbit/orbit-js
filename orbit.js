async function curl(url) {
    curl.lastError = null;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        return await response.text();

    } catch (error) {
        curl.lastError = error.message;
        return undefined;
    }
}

curl.error = function() {
    return curl.lastError !== null;
};

curl.catch = function() {
    return curl.lastError;
};
