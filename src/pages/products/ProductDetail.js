import { getProduct } from "../../api/products"

const ProductDetail = {
    render: async (id)=> {
        const response = await getProduct(id);
        const {data} = response;
        console.log(data);
        return `
            <div>
                ID: ${data.id}
            </div>
            <div>
                Name: ${data.name}
            </div>
            <div>
                description: ${data.description}
            </div>
            <div>
                price: ${data.price}
            </div>
            <div>
                status: ${data.status}
            </div>`
    }
}
export default ProductDetail;