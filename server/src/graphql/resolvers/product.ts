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
};

export default resolvers;