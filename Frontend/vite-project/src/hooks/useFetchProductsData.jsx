import { useEffect, useState } from "react";

const useFetchProductsData = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProductData();
  }, []);

  const fetchProductData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProductData(data.products);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { productData, isLoading };
};

export default useFetchProductsData