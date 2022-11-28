import { FC, useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { ThreeDots } from "react-loader-spinner";
import Carousel from "../../../components/common/carousel";
import GridCard from "../../../components/common/grid-card";
import Layout from "../../../components/layout/main-layout/main-layout";
import PageWithLayoutType from "../../../components/layout/types/page-with-layout-type";
import { IProduct } from "../../../interfaces";

function CategoryProducts() {
  const [updatedProducts, setUpdatedProducts] = useState<IProduct[]>([]);
  const [loadSpinner, setLoadSpinner] = useState<boolean>(true);

  const router = useRouter()

  useEffect(() => {
    (async () => {
      if (router.query.categoryslug) {
        const result = await fetch(`/api/get_products_by_category?search=${router.query.categoryslug}`);
        const data = await result.json()
        setUpdatedProducts(data);
      }
    })();
  }, [router.query.categoryslug])

  useEffect(() => {
    if (updatedProducts.length > 0) setLoadSpinner(false);
  }, [updatedProducts]);

  return (
    <>
      <Carousel />
      {!loadSpinner && (
        <GridCard
          products={updatedProducts as any}
          setUpdatedProducts={setUpdatedProducts}
          setLoadSpinner={(setLoadSpinner)}
        />
      )}
      {loadSpinner && (
        <div style={{ margin: "auto", width: "5%", textAlign: "center" }}>
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            visible={true}
          />
        </div>
      )}
    </>
  );
}

const categoryProducts: FC = () => (
  <CategoryProducts />
);
(categoryProducts as PageWithLayoutType).layout = Layout;

export default categoryProducts;
