import CategoryItem from "../Catogories-Item/Categories-Item";

const Directory = ({categories})=>{
    return (
        // Directory-container
        <div  className="">
            {categories.map((category)=>(
             <CategoryItem key={category.id} category={category}/>
            ))}
        </div>
    )
}

export default Directory