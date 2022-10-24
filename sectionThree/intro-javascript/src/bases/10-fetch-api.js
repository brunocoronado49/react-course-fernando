/// Fetch API
const apiKey = "eMtTQMYJGb6UPZCR4ihuC14y9NgDam8U";

const res = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

/// Promesas en cadena
res.then((response) => response.json())
    .then(({ data }) => {
        const { url } = data.images.original;
        const img = document.createElement("img");
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn);
