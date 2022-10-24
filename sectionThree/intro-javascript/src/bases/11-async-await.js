/// Async y await
const getImagePromise = async () => {
    try {
        const apiKey = "eMtTQMYJGb6UPZCR4ihuC14y9NgDam8U";
        const res = await fetch(
            `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
        );
        const { data } = await res.json();

        const { url } = data.images.original;
        const img = document.createElement("img");
        img.src = url;

        document.body.append(img);
    } catch (err) {
        console.error(err);
    }
};

getImagePromise();
