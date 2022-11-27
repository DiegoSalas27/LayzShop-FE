import { IProduct } from "../../interfaces";
import ProductCard from "./product-card";
import SearchNavBar from "./search-navbar";

interface IProps {
  products: IProduct []
  setUpdatedProducts: any
}

function GridCard({ products, setUpdatedProducts }: IProps) {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12 px-20">
        <SearchNavBar setUpdatedProducts={setUpdatedProducts} />
        {products.map((product: IProduct) => {
          return (
            <ProductCard
              key={product.name}
              product={product}
              setUpdatedProducts={setUpdatedProducts}
            />
          )
        })}
      </div>
    </section>
  );
}

export default GridCard;
