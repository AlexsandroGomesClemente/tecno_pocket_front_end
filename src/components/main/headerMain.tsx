//@ts-nocheck
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/img/LogoTecnoPocket.png";
import { GrMailOption, GrPhone, GrLocation, GrSearch } from "react-icons/gr";
import { HeaderMain  as HeaderMainInterface} from "@/src/interfaces/main";
import AddProduct from "./addProduct";

const HeaderMain = (props: HeaderMainInterface) => {
  const searchProduct = (value: string) => {
    const getProducts = JSON.parse(localStorage.getItem("produtos") as string);
    if (value !== "") {
      const newResult = getProducts.filter(
        (item: any) =>
          item.titulo.toUpperCase().includes(value.toUpperCase()) ||
          item.marca.toUpperCase().includes(value.toUpperCase()) ||
          item.categoria.toUpperCase().includes(value.toUpperCase())
      );

      localStorage.setItem("searchProduct", JSON.stringify(newResult));
    } else {
      localStorage.setItem("searchProduct", JSON.stringify(getProducts));
    }
  };

  return (
    <section className="bg-[#25335C] w-5/6 h-32 my-8 flex gap-10">
      <div className="w-40 relative left-[1.5%] mt-2">
        <Image src={Logo} alt="Logo" />
      </div>

      <div className="w-full h-full bg-[#fff]  text-white">
        <nav className="border-2 border-[#25335C] w-full h-2/6 py-8 px-4">
          <ul className="flex gap-10">
            <li className="flex items-center gap-2 text-[#25335C] ">
              <GrPhone color="#F58F0B" size={20} />
              (19) 983728297
            </li>
            <li className="flex items-center gap-2 text-[#25335C]  ">
              {" "}
              <GrMailOption color="#F58F0B" size={20} />
              alexsandro.gomes.clemente@hotmail.com
            </li>
            <li className="flex items-center gap-2 text-[#25335C]  ">
              <GrLocation color="#F58F0B" size={20} />
              Campinas-SP
            </li>
          </ul>
        </nav>
        <nav className="w-full border-2  border-[#25335C] h-[3.8rem] py-4 px-4">
          <ul className="flex flex-row  gap-10 ">
            <li className="flex items-center gap-2 cursor-pointer text-[#25335C]	">
              <Link href={"/main/productsShop"}>Produtos</Link>
            </li>
            <li className="flex items-center gap-2  cursor-pointer text-[#25335C]	 ">
              <Link href={"/main/manager"}>Gerenciamento</Link>
            </li>
            {props.typePage === "manager" && (
              <AddProduct onChangeModal={props.onChangeModal} typeForm="new" />
            )}
            <li className="absolute right-36 flex gap-2">
              <input
                onChange={(e) => searchProduct(e.target.value)}
                type="text"
                placeholder="Pesquise um produto"
                className="rounded-2xl pl-2 outline text-black"
              />
              <GrSearch color="#25335C" size={20} />
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default HeaderMain;
