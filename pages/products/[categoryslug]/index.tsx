import { FC, useEffect, useState } from "react";
import { useRouter } from 'next/router'
import Carousel from "../../../components/common/carousel";
import GridCard from "../../../components/common/grid-card";
import Layout from "../../../components/layout/main-layout/main-layout";
import PageWithLayoutType from "../../../components/layout/types/page-with-layout-type";
import { IProduct } from "../../../interfaces";

function CategoryProducts() {
  const [updatedProducts, setUpdatedProducts] = useState<IProduct[]>([]);

  const router = useRouter()

  useEffect(() => {
    (async () => {
      const result = await fetch(`/api/get_products_by_category?search=${router.query.categoryslug}`);
      const data = await result.json()
      setUpdatedProducts(data);
    })();
  }, [router.query.categoryslug])

  return (
    <>
      <Carousel />
      {updatedProducts && (
        <GridCard
          products={updatedProducts as any}
          setUpdatedProducts={setUpdatedProducts}
        />
      )}
    </>
  );
}

const categoryProducts: FC = () => (
  <CategoryProducts />
);
(categoryProducts as PageWithLayoutType).layout = Layout;

export default categoryProducts;
