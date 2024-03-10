import Logo from "../../assets/img/LogoTecnoPocket.png";
import Image from "next/image";
import Link from "next/link";
import { GrMailOption, GrPhone, GrLocation, GrSearch } from "react-icons/gr";

const ProductShop = () => {
  return (
    <main className="w-full h-screen flex flex-col items-center bg-shop">
      <section className="bg-[#212124] w-5/6 h-32 my-8 flex gap-10">
        <div className="w-1/6 mt-2 ml-4">
          <Image src={Logo} alt="Logo" />
        </div>

        <div className="w-full h-full bg-[#1A1A1C]  text-white">
          <nav className="border-b-4 border-[#212124] w-full h-2/6 py-8 px-4">
            <ul className="flex gap-10">
              <li className="flex items-center gap-2 text-[#907487] ">
                <GrPhone color="#F2737C" size={20} />
                (19) 983728297
              </li>
              <li className="flex items-center gap-2 text-[#907487]  ">
                {" "}
                <GrMailOption color="#F2737C" size={20} />
                alexsandro.gomes.clemente@hotmail.com
              </li>
              <li className="flex items-center gap-2 text-[#907487]  ">
                <GrLocation color="#F2737C" size={20} />
                Campinas-SP
              </li>
            </ul>
          </nav>
          <nav className="w-full h-4/6 py-4 px-4">
            <ul className="flex flex-row  gap-10 ">
              <li className="flex items-center gap-2 cursor-pointer	">
                <Link href={"/main/productsShop"}>Produtos</Link>
              </li>
              <li className="flex items-center gap-2  cursor-pointer	 ">
                <Link href={"/main/manager"}>Gerenciamento</Link>
              </li>
              <li className="absolute right-36 flex gap-2">
                <input
                  type="text"
                  placeholder="Pesquise um produto"
                  className="rounded-2xl pl-2 outline text-black"
                />
                <GrSearch color="white" size={20} />
              </li>
            </ul>
          </nav>
        </div>
      </section>

      <section className="w-5/6 h-full  text-white">
        <div className="flex justify-between items-center text-xl tracking-wide mb-10">
          <h4>Produtos</h4>
          <h4>Main / Produtos</h4>
        </div>

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
      </section>
    </main>
  );
};

export default ProductShop;
