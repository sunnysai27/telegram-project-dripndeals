const ProductCard = ({ info }) => {
    return (
        <div className="m-4 p-2 flex flex-col justify-around hover:bg-gray-200 hover:shadow-xl rounded-lg min-h-[300px] max-h-[300px] shadow-lg">
            {/* Image Section */}
            <div className="h-full m-h-[50%] w-full mb-2 overflow-hidden rounded-lg">
                <img
                    className="w-full h-full object-cover object-center"
                    src={info.imagePath}
                    alt="product-image"
                />
            </div>

            {/* Title + Button */}
            <div className="flex flex-col justify-between h-[50%]">
                <h2 className="text-sm font-medium line-clamp-2 mb-2">
                    {info.title}
                </h2>
                <p className="my-auto ">{info.source}</p>

                
            </div>
            
                <a className="w-full px-4 py-2 text-center cursor-pointer rounded-xl bg-gray-300 font-bold text-md text-black hover:bg-black hover:text-white" href={info.url}>
                    Buy Now
                </a>
            
            
        </div>
    );
};

export default ProductCard;
