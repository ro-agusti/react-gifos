import { useState } from 'react'
import PropTypes from 'prop-types'


const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('')
    //modifica el input
    const handleOnChange = (e) => {
        const value = e.target.value
        setInputValue(value)
    }
    //modifica el useCategories y agrega un li de acuerdo a lo q pongamos en el input
    const handleSubmit = (e) => {
        e.preventDefault();

        //vacia el input al clickear ENTER
        if (inputValue.trim().length) {
            setInputValue('')
        }

        //tomo el estado previo y le agrego el input value
       setCategories(oldState => [inputValue, ...oldState ])

       //otra opcion es usar el props de categories
       //setCategories( [...categories, inputValue])
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={inputValue}
                onChange={handleOnChange}
                placeholder= 'Agrega un valor...'
            />
        </form>
    )
}

AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
