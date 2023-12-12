const productService = require('./Service');

const getAllRank = async() =>{
    try {
        return await productService.getAllRank();
    } catch (error) {
        console.log(error);
    }
}

const getAllUser = async () => {
    try {
        return await productService.getAllUsers();
    } catch (error) {
        console.log(error);
    }
}




const deleteProductByID = async(id)=>{
    try {
        return await productService.deleteProductByID(id);
    } catch (error) {
        console.log(error);
    }
}


const addProduct = async (id,name,man,diem,coin,roll)=>{
    try {
        return await productService.addProduct(id,name,man,diem,coin,roll);
    } catch (error) {
        console.log(error);
    }
}


const Savepoint = async (name,diem,coin)=>{
    try {
        return await productService.Savepoint(name,diem,coin);
    } catch (error) {
        console.log(error);
    }
}



const getProductById = async (id) =>{
    try{
        return await productService.getProductById(id);
    }catch(error){
        console.log(error);
    }
}

const updateProductById = async (id,name,man, diem, coin) =>{

}
module.exports = {getAllRank,updateProductById,deleteProductByID,addProduct,getProductById,Savepoint,getAllUser};