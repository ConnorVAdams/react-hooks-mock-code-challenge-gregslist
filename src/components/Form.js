import { useState } from 'react'

const Form = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        description: '',
        image: '',
        location: '',
    })

    const handleFormChange = ({ target: { name, value } }) => {
        const newInput = {
            ...formData,   
            [name]: value
        }
        setFormData(newInput)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newListing = {...formData}
        onSubmit(newListing)
    }

  return (
    <form onSubmit={handleSubmit} >
        Add New Listing:<br/>
        <label>Description:
            <input onChange={handleFormChange} type='text' name='description' value={formData.description} />
        </label>
        <label>Location:
            <input onChange={handleFormChange} type='text' name='location' value={formData.location} />
        </label>
        <label>Image URL:
            <input onChange={handleFormChange} type='text' name='image' value={formData.image} />
        </label>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default Form