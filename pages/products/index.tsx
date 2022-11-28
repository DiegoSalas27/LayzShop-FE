import { FC, useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import Carousel from "../../components/common/carousel";
import GridCard from "../../components/common/grid-card";
import Layout from "../../components/layout/main-layout/main-layout";
import PageWithLayoutType from "../../components/layout/types/page-with-layout-type";
import { IProduct } from "../../interfaces";
import get_products from "../api/get_products";

interface IProps {
  products: IProduct[];
}

function Products({ products }: IProps) {
  const [updatedProducts, setUpdatedProducts] = useState<IProduct[]>(products);
  const [loadSpinner, setLoadSpinner] = useState<boolean>(true);

  useEffect(() => {
    if (products) setLoadSpinner(false);
  }, [products]);

  return (
   <>
      <Carousel />
      {!loadSpinner && (
        <GridCard
          products={updatedProducts as any}
          setUpdatedProducts={setUpdatedProducts}
          setLoadSpinner={setLoadSpinner}
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

export async function getServerSideProps() {
  // can also be used to make sure your page always updates the data, not necessarily the req or res

  // Fetch data from internal API
  let data = (await get_products()) as IProduct[];

  data = Object.values(JSON.parse(JSON.stringify(data)));

  if (!data) {
    return {
      redirect: {
        destination: "/no-data", // redirect to a specific page when there is no data
      },
    };
  }

  if (data.length === 0) {
    return { notFound: true }; // returns 404 page when no content is available
  }

  return {
    props: {
      products: data,
    },
  };
}

const products: FC<IProps> = (props: IProps) => (
  <Products products={props.products} />
);
(products as PageWithLayoutType).layout = Layout;

export default products;
