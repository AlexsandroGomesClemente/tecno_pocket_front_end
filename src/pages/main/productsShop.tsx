import HeaderMain from "@/src/components/main/headerMain";
import ProductsMain from "@/src/components/main/productMain";

const ProductShop = () => {
  return (
    <main className="w-full h-screen flex flex-col items-center bg-shop">
      <HeaderMain />
      <ProductsMain />
    </main>
  );
};

export default ProductShop;
