import CategoryItem from "../Catogories-Item/Categories-Item";
import './Direactory-style.scss'

const Directory = ({categories})=>{
    return (
        // Directory-container
        <div  className="categories-container">
            {categories.map((category)=>(
             <CategoryItem key={category.id} category={category}/>
            ))}
        </div>
    )
}

export default Directory