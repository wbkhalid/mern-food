import { useEffect, useState } from 'react'
import './list.css'
import { toast } from 'react-toastify'
import axios from 'axios'

const List = () => {
  const [list, setList] = useState([])

  const allFoodItems = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/food/list')
      if (response.data.success) {
        setList(response.data.data)
          ;
      }
    } catch (error) {
      toast.error('Error')
    }

  }

  const handleRemove = async (id) => {
    try {
      const response = await axios.post('http://localhost:4000/api/food/remove', {id})
      await allFoodItems()
      if (response.data.success) {
        toast.success(response.data.message)
      }
    } catch (error) {
      toast.error('Error')
      console.log(error);
    }
  }

  useEffect(() => {
    allFoodItems()
  }, [])


  return (
    <div className="list add flex-col">
      <p>All food List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {
          list?.map((item, index) => {
            return (
              <div className="list-table-format" key={index}>
                <img src={`http://localhost:4000/images/${item.image}`} alt="" />
                <p>{item?.name}</p>
                <p>{item?.category}</p>
                <p>{item?.price}</p>
                <p style={{ pointer: 'cursor' }} onClick={() => handleRemove(item._id)}>x</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default List