import { useEffect, useState } from "react";

const useFetchProductDetails = (product_id) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchProductData();
  }, [product_id]);

  const fetchProductData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`https://dummyjson.com/products/${product_id}`);
      const data = await res.json();
      setData(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data };
};

export default useFetchProductDetails