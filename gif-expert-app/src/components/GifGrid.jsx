import { GifItem } from "./GifItem";
import { useFetchGif } from "../hooks/useFetchGif";

export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGif(category);

    return (
        <>
            {isLoading ? (
                <h1>Cargando...</h1>
            ) : (
                <>
                    <h3>{category}</h3>
                    <div className="card-grid ">
                        {images.map((image, index) => (
                            <GifItem key={image.id + index} {...image} />
                        ))}
                    </div>
                </>
            )}
        </>
    );
};
