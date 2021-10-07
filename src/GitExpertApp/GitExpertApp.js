import { useState } from "react"
import AddCategory from "../components/AddCategory"
import GiftGrid from "../components/GiftGrid"

const GitExpertApp = () => {
    const [categories, setCategories] = useState(['goku'])
    return (
        <>
          <h2>Giff Expert App</h2> 
          <AddCategory 
            setCategories={setCategories} 
          /> 
          <hr/>         
          <ul>
              {
                  categories.map((elemento, idx) => {
                     return (
                         <GiftGrid 
                         key={elemento}
                         category={elemento} />
                     )
                  })
              }
          </ul>
        </>
    )
}

export default GitExpertApp
