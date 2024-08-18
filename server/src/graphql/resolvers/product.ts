import Product from "../../database/models/Product";

const resolvers = {
    Query: {
        getProducts: async () => {
            try {
                const result = await Product.find({})
                return result
            } catch (error) {
                console.log("getProductsError: ", error)
            }
        },
        getProduct: async (_,{productId}) => {
            try {
                const result = await Product.findById(productId)
                return result
            } catch (error) {
                console.log("getProductsError: ", error)
            }
        },
    },
    Mutation:{
        createProduct: async (_,{body})=>{
            try {
                const result = await Product.create(body)
                return result;
            } catch (error) {
                console.log("createProductError: ", error)
            }
        },
        updateProduct: async (_,{body})=>{
            try {

                const result = await Product.findByIdAndUpdate(body.id, {name:body.name, color:body.color, price:body.price},{new:true})
                return result
            } catch (error) {
                console.log("updateProductError: ", error)
            }
        },
        deleteProduct: async (_,{productId})=>{
            try {
                console.log(productId)
                const result = await Product.findByIdAndDelete(productId)
                return result
            } catch (error) {
                console.log("deleteProductError: ", error)
            }
        }

    }
};

export default resolvers;