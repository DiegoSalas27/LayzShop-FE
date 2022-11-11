import { FC, useState } from "react";
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

  return (
    <>
      <Carousel />
      {products && (
        <GridCard
          products={updatedProducts as any}
          setUpdatedProducts={setUpdatedProducts}
        />
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
