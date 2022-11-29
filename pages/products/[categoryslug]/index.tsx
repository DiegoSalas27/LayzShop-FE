/*
  AUTHOR: Diego Salas Noain
  FILENAME: index.tsx
  SPECIFICATION: 
    - Display products by category
  FOR: CS 5364 Information Retrieval Section 001 
*/

import { FC, useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { ThreeDots } from "react-loader-spinner";
import Carousel from "../../../components/common/carousel";
import GridCard from "../../../components/common/grid-card";
import Layout from "../../../components/layout/main-layout/main-layout";
import PageWithLayoutType from "../../../components/layout/types/page-with-layout-type";
import { IProduct } from "../../../interfaces";

/*
  NAME: CategoryProducts
  PARAMETERS: None
  PURPOSE: Functional component that renders products by category page
  PRECONDITION: None
  POSTCONDITION: A page is returned
*/

function CategoryProducts() {
  // here we set the state and define state variables
  const [updatedProducts, setUpdatedProducts] = useState<IProduct[]>([]);
  const [loadSpinner, setLoadSpinner] = useState<boolean>(true);

  // we get access to the router object
  const router = useRouter()

  // gets the products based on a category
  useEffect(() => {
    (async () => {
      if (router.query.categoryslug) {
        const result = await fetch(`/api/get_products_by_category?search=${router.query.categoryslug}`);
        const data = await result.json()
        setUpdatedProducts(data);
      }
    })();
  }, [router.query.categoryslug])

  // updates the spinner when products are loaded
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
