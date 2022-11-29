/*
  AUTHOR: Diego Salas Noain
  FILENAME: [productslug].tsx
  SPECIFICATION: 
    - Display product comparison
  FOR: CS 5364 Information Retrieval Section 001 
*/

import { ThreeDots } from 'react-loader-spinner'
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import Layout from '../../../components/layout/main-layout/main-layout';
import PageWithLayoutType from '../../../components/layout/types/page-with-layout-type';
import { IProduct } from "../../../interfaces";

/*
  NAME: Product
  PARAMETERS: None
  PURPOSE: Functional component that renders the product detail page
  PRECONDITION: None
  POSTCONDITION: A page is returned
*/

function Product() {
  // here we set the state and define state variables
  const [walmartProduct, setWalmartProduct] = useState<IProduct>()
  const [targetProduct, setTargetProduct] = useState<IProduct>()

  // we get access to the router object
  const router = useRouter()

  // initializes the state for both walmart and target products
  useEffect(() => {
    (async () => {
      if (router.query.productslug) {
        const res1 = await fetch(`/api/get_product_by_slug?slug=${router.query.productslug}`)
        const walmartP = await res1.json()

        const res2 = await fetch(`/api/get_similar_products?name=${walmartP.name}`)
        const targetP = await res2.json()

        setWalmartProduct(walmartP)
        setTargetProduct(targetP)
      }
    })();
  }, [router.query.productslug]);

  // calculates the number of stars of each product
  function calcStars(product: IProduct) {
    return [1,2,3,4,5].map((num) => (
      <svg
          key={num}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 fill-current ${num <= product.rating! ? 'text-yellow-500' : 'text-gray-400'} `}
        >
          <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
        </svg>
    ))
  }

  return (
    <div className="flex flex-row justify-center mt-2">
      {!walmartProduct && (
        <ThreeDots 
        height="80" 
        width="80" 
        radius="9"
        color="#4fa94d" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        visible={true}
      />
      )}
      
      {walmartProduct && (
        <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
        <div
          className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
        >
          <div className="relative pb-48 overflow-hidden">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src={walmartProduct.thumbnail_image}
              alt=""
            />
          </div>
          <div className="p-4">
            <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
              Walmart
            </span>
            <h2 className="mt-2 mb-2  font-bold">{walmartProduct.name}</h2>
            <p className="text-sm desc">{walmartProduct.description}</p>
            <div className="mt-3 flex items-center">
              <span className="text-sm font-semibold">${walmartProduct.price}</span>&nbsp;
              <span className="text-sm font-semibold"></span>
            </div>
          </div>
          <div className="p-4 flex items-center text-sm text-gray-600">
            {calcStars(walmartProduct)}
            <span className="ml-2">{walmartProduct.rating} rating</span>
          </div>
        </div>
      </div>
      )}
      {targetProduct && (
        <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
        <div
          className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
        >
          <div className="relative pb-48 overflow-hidden">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src={targetProduct.thumbnail_image}
              alt=""
            />
          </div>
          <div className="p-4">
            <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
              Target
            </span>
            <h2 className="mt-2 mb-2  font-bold">{targetProduct.name}</h2>
            <p className="text-sm desc">{targetProduct.description}</p>
            <div className="mt-3 flex items-center">
              <span className="text-sm font-semibold">${targetProduct.price}</span>&nbsp;
              <span className="text-sm font-semibold"></span>
            </div>
          </div>
          <div className="p-4 flex items-center text-sm text-gray-600">
            {calcStars(targetProduct)}
            <span className="ml-2">{targetProduct.rating} rating</span>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}

const product: any = () => <Product />;
(product as PageWithLayoutType).layout = Layout;
export default product;
