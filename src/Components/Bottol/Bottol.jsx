
const Bottol = ({bottol, handleAdd}) => {
    const {id, name, image, price} = bottol;

    return (
        <div className="shadow-lg border-2 border-cyan-700 border-opacity-30 p-3 rounded-lg">
            <img className="mx-auto py-3" src={image} alt="" />
            <h1 className="text-xl"> Product :{id}</h1>
            <h2 className="text-xl font-medium my-1 ">Name : {name} </h2>
            <div className="flex justify-between items-center my-4">
                <h2 className="text-xl font-bold">Price : {price} </h2>
                <button onClick={()=> handleAdd(bottol)} className=" bg-blue-500 text-white py-1 px-4 rounded-lg mr-3">Buy Now</button>
                
            </div>
        </div>
    );
};

export default Bottol;