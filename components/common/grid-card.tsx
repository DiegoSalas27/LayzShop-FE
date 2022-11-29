/*
  AUTHOR: Diego Salas Noain
  FILENAME: grid-card.tsx
  SPECIFICATION: 
    - We need to display products in a grid
  FOR: CS 5364 Information Retrieval Section 001 
*/

import { IProduct } from "../../interfaces";
import ProductCard from "./product-card";
import SearchNavBar from "./search-navbar";

interface IProps {
  products: IProduct []
  setUpdatedProducts: any
  setLoadSpinner: any
}

/*
  NAME: GridCard
  PARAMETERS: products, setUpdatedProducts, setLoadSpinner
  PURPOSE: Displays a the products in a grid with a Search navbar as a header
  PRECONDITION: None
  POSTCONDITION: A Grid of products is returned
*/

function GridCard({ products, setUpdatedProducts, setLoadSpinner }: IProps) {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12 px-20">
        <SearchNavBar setUpdatedProducts={setUpdatedProducts} setLoadSpinner={setLoadSpinner} />
        {products.map((product: IProduct, index: number) => {
          return (
            <ProductCard
              key={index}
              product={product}
            />
          )
        })}
      </div>
    </section>
  );
}

export default GridCard;
