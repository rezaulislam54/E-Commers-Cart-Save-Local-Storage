
const Addtocart = ({item,handleDelete}) => {
    const {name, image, price} = item;
    return (
        <div className="shadow-lg border-2 border-cyan-700 border-opacity-30 rounded-lg w-56 flex-col">
            <img className="mx-auto" src={image} alt="" />
            <h2 className=" font-medium my-1 px-2 ">Name : {name} </h2>
            <div className="flex justify-between items-center my-2 px-3">
                <h2 className="text-xl font-bold">Price : {price} </h2>
                <button onClick={() =>handleDelete(item.id)} className=" bg-blue-500 text-white px-4 rounded-lg mr-2">Delete</button>
                
            </div>
        </div>
    );
};

export default Addtocart;