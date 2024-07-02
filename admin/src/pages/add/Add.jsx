import {  useState } from "react";
import { assets } from "../../assets/assets";
import "./add.css";
import axios from 'axios'
import { toast } from "react-toastify";


const Add = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    category: "Salad",
    price: "",
  });

  const onChnageHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({ ...data, [name]: value });
  };


  const onSubmitHandler = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('name', data.name)
    formData.append('description', data.description)
    formData.append('category', data.category)
    formData.append('price', Number(data.price))
    formData.append('image', image)
    try {
      const response = await axios.post('http://localhost:4000/api/food/add', formData)
      if (response.data.success) {
        setData({
          name: "",
          description: "",
          category: "Salad",
          price: ""
        })
        setImage(false)
        toast.success(response.data.message)
      }

    } catch (error) {
      toast.error(error.response.data.message)
    }

  }

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-image-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            name=""
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input onChange={onChnageHandler} value={data.name} type="text" name="name" id="" />
        </div>
        <div className="add-product-description flex-col">
          <p>Description</p>
          <textarea
            onChange={onChnageHandler} value={data.description}
            name="description"
            id=""
            rows="6"
            placeholder="Write Content Here"
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select name="category" id="" onChange={onChnageHandler}>
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich ">Sandwich </option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-category-price flex-col">
            <p>Product Price</p>
            <input type="number" name="price" id="" onChange={onChnageHandler} value={data.price} />
          </div>
        </div>
        <button type="submit" className="add-btn">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
