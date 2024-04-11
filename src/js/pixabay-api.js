export function getInform(str = "") {
     
    const API_KEY = "43173775-fc7269b10cca3a5d436001063";

    const params = new URLSearchParams({
        key: API_KEY,
        q: str,
        image_typ: "photo",
        orientation: "horizontal",
        safesearch: true,
        per_page: 20,
    });
     fetch(`https://pixabay.com/api/?${params}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
         .then(data => list.insertAdjacentHTML("beforeend", createMarkup(data.hits)))
        .catch(error => alert(error))
    
}