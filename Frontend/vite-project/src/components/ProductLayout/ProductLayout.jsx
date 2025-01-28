import ProductCard from "../ProductCard/ProductCard";
import { ShimmerPostList } from "react-shimmer-effects";
import useFetchProductsData from "../../hooks/useFetchProductsData";
import withBrandLabel from "../withBrandLabel/withBrandLabel";

const ProductCardWithBrand = withBrandLabel(ProductCard)

const ProductLayout = () => {
  const { productData, isLoading } = useFetchProductsData();

  if (isLoading) {
    return (
      <>
        <div className="2xl:container mx-auto">
          <div className="w-[90%] mx-auto h-screen">
            <ShimmerPostList postStyle="STYLE_FOUR" col={4} row={2} gap={30} />;
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="2xl:container mx-auto">
          <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-5">
            {productData.map((items) => {
              return (
                <>
                  <ProductCardWithBrand
                    id={items.id}
                    items={items}
                  />
                </>
              );
            })}
          </div>
        </div>
      </>
    );
  }
};

export default ProductLayout;
