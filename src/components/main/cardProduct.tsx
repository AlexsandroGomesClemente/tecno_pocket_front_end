import Logo from "../../assets/img/LogoTecnoPocket.png";
import Image from "next/image";

const CardProduct = () => {
  return (
    <div className=" w-full h-5/6 flex justify-center items-center gap-8">
      <div className="glass-effect w-2/12  h-5/6 product-off">
        <Image src={Logo} alt="img prod" width={190} height={180} />
      </div>
      <div className="glass-effect w-2/12  h-5/6 ">
        <Image
          src={Logo}
          alt="img prod"
          width={190}
          height={180}
          className="ml-2 my-8"
        />
        <div className="flex flex-col justify-center items-center gap-2">
          <span className="text-xl">Produto 2</span>
          <span className="text-center pl-2">
            Este é um produto muito importante para a marca
          </span>
          <span className="text-xl">R$30,00</span>
          <button className="rounded-2xl bg-black w-4/6 mt-3 ">
            Saiba Mais
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
