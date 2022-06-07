import { createProduct } from "../../api/products";

const ProductAdd = {
    render: () => {
        return (
            ` <div>
                    <form>
                        <div class="form-group">
                            <label>Ten</label>
                            <input class = 'form-control'id='name' />
                        </div>
                        <div class="form-group">
                            <label>description</label>
                            <input class = 'form-control' id='description' />
                        </div>
                        <div class="form-group">
                            <label>prie</label>
                            <input class = 'form-control' id='price' />
                        </div>
                        <label for="cars">chon status:</label>

                        <select id="cars">
                        <option value="true">true</option>
                        <option value="false" selected>false</option>
                        </select>
                        <div class="form-group">
                            <button type="button" class ='btn btn-success'>Tao moi</button>
                        </div>
                    </form>            
                </div>`
        )
    },

    afterRender: () => {
        const submitBtn = document.querySelector('.btn');
        submitBtn.addEventListener('click', async () => {
            const name = document.querySelector('#name').value;
            const price = document.querySelector('#price').value;
            const description = document.querySelector('#description').value;
            const status = document.querySelector('#cars').value;
            // const submitData = {
            //     name: name,
            //     msv: msv,
            //     avatar : avt
            // }
            //cach 2
            const submitData = { name, price, description,status };
            console.log(submitData);
            await createProduct(submitData);
            window.location.replace('/products');
        })
    }
}


export default ProductAdd;