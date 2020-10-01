import Link from 'next/link';
import axios from 'axios';

let state = {
    NameProduct: '',
    Description: '',
    Category: '',
    ProductQuantity: 0
};

let updateState = false;
let idUpdate = '';

const nameProduct = e => { state.NameProduct = e.target.value; };
const description = e => { state.Description = e.target.value; };
const category = e => { state.Category = e.target.value; };
const productQuantity = e => { state.ProductQuantity = e.target.value; };


const createProduct = async (e) => {
    e.preventDefault();

    const { NameProduct, Description, Category, ProductQuantity } = state;

    if (NameProduct === '' || Description === '' || Category === '' || ProductQuantity === '') {
        return;
    }


    let url = `http://localhost:3001/product/create`;
    await axios.post(url,{
        NameProduct,
        Description,
        Category,
        ProductQuantity,
        Status: true
    })
    .then(function (response){
        console.log(response);
    })
    .catch(function (error){
        console.log(error);
    });
    window.location = "/";
};




const updateProduct = async (e, product) => {
    e.preventDefault();

    updateState = true;
    idUpdate = product._id;

    // state.NameProduct = product.NameProduct;
    // state.Description = product.Description;
    // state.Category = product.Category;
    // state.ProductQuantity= product.ProductQuantity;
    // const { NameProduct, Description, Category, ProductQuantity } = state;

    // if (NameProduct === '' || Description === '' || Category === '' || ProductQuantity === '') {
    //     return;
    // }


    // let url = `http://localhost:3001/product/update/${product._id}`;
    // await axios.post(url,{
    //     NameProduct,
    //     Description,
    //     Category,
    //     ProductQuantity,
    //     Status: true
    // })
    // .then(function (response){
    //     console.log(response);
    // })
    // .catch(function (error){
    //     console.log(error);
    // });
    // window.location = "/";
};



const deleteProduct = async (e, product) => {
    e.preventDefault();

    let url = `http://localhost:3001/product/delete/${product._id}`;
    console.log('url :', url);
    await axios.delete(url)
    .then(function (response){
        console.log(response);
    })
    .catch(function (error){
        console.log(error)
    });
    window.location = "/";
};

const DataRow = (props) => {

    return (
        <div className="row">
            <div className="col-xs-12 col-md-4 col-lg-4 col-xl-4">
                <form onSubmit={createProduct}>
                    <div className="form-group">
                        <label for="nameProduct"><span class="text-danger">*</span> Product Name: </label>
                        <input class="form-control" id="nameProduct" onChange={nameProduct}  type="text" required />
                    </div>
                    <div className="form-group">
                        <label for="description"><span class="text-danger">*</span> Description: </label>
                        <input class="form-control" id="description" onChange={description} type="text" required />
                    </div>
                    <div className="form-group">
                        <label for="category"><span class="text-danger">*</span> Category: </label>
                        <select class="form-control" name="category" id="category" onChange={category} required>
                            <option value="">--Please choose an option--</option>
                            <option value="Bebidas">Bebidas</option>
                            <option value="Limpieza">Limpieza</option>
                            <option value="Botanas">Botanas</option>
                            <option value="Cremeria">Cremeria</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="productQuantity"><span class="text-danger">*</span> Product Quantity: </label>
                        <input class="form-control" id="productQuantity" onChange={productQuantity} type="number" required />
                    </div>
                    <button type="submit" class="btn btn-success">Add</button>
                </form>
            </div>
            <div className="col-xs-12 col-md-8 col-lg-8 col-xl-8">

                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Product Quantity</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.products.length > 0 ? props.products.map(product => (
                                <tr>
                                    <td>{product.NameProduct}</td>
                                    <td>{product.Description}</td>
                                    <td>{product.Category}</td>
                                    <td>{product.ProductQuantity}</td>
                                    <td>
                                        <button type="button" onClick={e => updateProduct(e, product)} class="btn btn-primary">Update</button>
                                    </td>
                                    <td>
                                        <button type="button" onClick={e => deleteProduct(e, product)} class="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                                
                            )) : (
                                <tr>
                                    <td>
                                        <p class="text-danger">Stock is empty</p>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataRow;