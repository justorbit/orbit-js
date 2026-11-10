// curl funtion
async function curl(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            return {
                error: `HTTP Error: ${response.status} ${response.statusText}`
            };
        }

        return await response.text();

    } catch (error) {
        return {
            error: error.message
        };
    }
}
