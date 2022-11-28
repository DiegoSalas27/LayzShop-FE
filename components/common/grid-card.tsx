import { IProduct } from "../../interfaces";
import ProductCard from "./product-card";
import SearchNavBar from "./search-navbar";

interface IProps {
  products: IProduct []
  setUpdatedProducts: any
  setLoadSpinner: any
}

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
