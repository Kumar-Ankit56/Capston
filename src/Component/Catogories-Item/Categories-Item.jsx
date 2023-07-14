const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <>
      {/* Category-container */}
      <div className="">
        {/* background image  */}
        {/* category-body-container */}
        <div className="">
          <img src={imageUrl} alt="No Image" />
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    </>
  );
};

export default CategoryItem;
