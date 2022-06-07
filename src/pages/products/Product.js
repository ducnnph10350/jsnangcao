import {deleteProduct, getProducts} from '../../api/products';
import  {reRender} from '../../helpers/reRender'

const Product = {
    render: async () => {
        const response = await getProducts();
        const {data} =response;
        console.log(data);
        
        return  `<div>
        ${
            data.map((student) => (
                `<div>
                <a href="/products/add"
                <button>Create</button>
            </a>
                    <div>ID: ${student.id}</div>
                    <div>Name: ${student.name}</div>
                    <div>price: ${student.price} dong</div>
                    <div>status: ${student.status}</div>
                    <div>description: ${student.description}</div>
                    <div>
                        <a href="/product/detail/${student.id}"
                            <button>chi tiet</button>
                        </a>
                    </div>
                    <div>
                       
                            <button class='btn btn-danger' data-name="${student.name}" data-id="${student.id}" ">Xoa</button>
                        </a>
                    </div>
                </div>`
            )).join('')
        }
    </div>`
    },
    afterRender: () => {

        const deleteBtns =document.querySelectorAll('.btn-danger');
        deleteBtns.forEach((btn) => {
            // const data=btn.dataset;
            btn.addEventListener('click', async () => {
                const btnId = btn.dataset.id;
                //thuc hien xoa
                console.log(btnId);
                await deleteProduct(btnId);
                await reRender(Product);
                
            })
        })
    }
}
export default Product;