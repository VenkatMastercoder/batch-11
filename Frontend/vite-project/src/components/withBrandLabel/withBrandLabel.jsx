/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from "uuid";

// React are Function that take a Component and Return a New Enchaced Component

// Input - Component
// Output - New Enchaced Component

const withBrandLabel = (ProductCard) => {
  return function WithBrandLabelComponent(props) {
    const { title, brand, category, thumbnail, price, rating, reviews } =
      props.items;

    return (
      <>
        <div className="relative">
          {brand && (
            <div className="absolute top-0 left-0 mb-2 text-sm font-bold bg-black text-white rounded-lg p-2 m-2">
               {brand}
            </div>
          )}
          <ProductCard
            {...props}
            key={uuidv4()}
            data={title}
            brand={brand}
            category={category}
            thumbnail={thumbnail}
            price={price}
            rating={rating}
            reviews={reviews}
          />
        </div>
      </>
    );
  };
};

export default withBrandLabel;
