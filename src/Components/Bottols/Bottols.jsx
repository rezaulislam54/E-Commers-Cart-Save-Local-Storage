import { useEffect } from "react";
import { useState } from "react";
import Bottol from "../Bottol/Bottol";
import Addtocart from "../AddTo Cart Bottol/Addtocart";
import { AddToStorage, geteStorCart } from "../../utilitics/LocalStorage";

const Bottols = () => {

    const [Bottols, setBottols] = useState([]);

    const [addcart, setaddcart]=useState([]);

    useEffect (() => {
        if(Bottols.length > 0){
             const savcart = geteStorCart();
             const cart = [];
             for(const id of savcart){
                const bottol = Bottols.find(bottol => bottol.id === id);
                if(bottol){
                    cart.push(bottol);
                }
             }
             setaddcart(cart);
        }
    
    },[Bottols])

    function handleAdd (bottol){
        const newaddcart = addcart.find(p => p.id == bottol.id);
        if(!newaddcart){
            AddToStorage(bottol.id);
            setaddcart([...addcart,bottol]);
            
        }
        else{
            alert('allready exite')
        }

    }


    const handleDelete = (id) =>{
        console.log(id)
      const newcart = addcart.filter(d => d.id != id);
      setaddcart(newcart)
    }
    

    useEffect(()=> {
        fetch('private.json')
        .then( rev => rev.json())
        .then(data => setBottols(data))
    },[])

    return (
        <div>

            <h1 className="text-3xl font-extrabold text-center">My Cart List</h1>
            <h2 className="text xl font-bold ml-6">Total Cart : {addcart.length}</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 my-4 mx-6">
                 {
                    addcart.map(item => <Addtocart 
                        key={item.id}
                         item={item}
                         handleDelete={handleDelete}
                         ></Addtocart>)
                 }
           </div>
            <h1 className="text-center text-4xl font-bold my-4 ">All Bottols Heare</h1>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 my-4">
                 {
                    Bottols.map(bottol => <Bottol
                         key={ bottol.id}
                         bottol={bottol}
                         handleAdd={handleAdd}
                         ></Bottol>)
                 }
           </div>
        </div>
    );
};

export default Bottols;