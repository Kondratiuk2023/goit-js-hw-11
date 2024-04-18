export function searchImages(searchWord, myGallery) {
    const BASE_URL = "https://pixabay.com/api/";
    const params = new URLSearchParams({
        key: '43346019-e2cdab7ada109c45f6a1c5d2a',
        q: searchWord, 
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });

    return fetch(`${BASE_URL}?${params}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch images');
            }
            return response.json();
        })
        .catch(error => {
            throw new Error('Failed to fetch images');
        });
}