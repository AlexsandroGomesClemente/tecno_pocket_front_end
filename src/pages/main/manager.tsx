import Logo from "../../assets/img/LogoTecnoPocket.png";
import Image from "next/image";
import {
  GrMailOption,
  GrPhone,
  GrLocation,
  GrSearch,
  GrAddCircle,
  GrClose,
} from "react-icons/gr";
import Link from "next/link";

const Gerenciamento = () => {
  return (
    <main className="w-full h-screen flex flex-col items-center bg-shop overflow-hidden">
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
              <li className="absolute right-96 flex items-center gap-2 mr-5 cursor-pointer	hover:text-red-700">
                <GrAddCircle color="white" size={20} /> Adicionar Produto
              </li>
              <li className="absolute right-36 flex items-center gap-2">
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
          <h4>Gerenciamento</h4>
          <h4>Main / Gerenciamento</h4>
        </div>

        <div className=" w-full h-4/6 flex justify-center items-center gap-8  ">
          <div className="glass-effect w-full  h-5/6 flex justify-start rounded-t-2xl overflow-auto	max-h-full ">
            <table border={1} className="w-full tabela ">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Nome</th>
                  <th>Marca</th>
                  <th>Quantidade</th>
                  <th>Descrição</th>
                  <th>Data de Criação</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Teste</td>
                  <td>Nike</td>
                  <td>20</td>
                  <td>Um produto bom</td>
                  <td>09/03/2024</td>
                  <td className="flex gap-2">
                    <button>Editar</button>
                    <button>Excluir</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Teste</td>
                  <td>Nike</td>
                  <td>20</td>
                  <td>Um produto bom</td>
                  <td>09/03/2024</td>
                  <td className="flex gap-2">
                    <button>Editar</button>
                    <button>Excluir</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Teste</td>
                  <td>Nike</td>
                  <td>20</td>
                  <td>Um produto bom</td>
                  <td>09/03/2024</td>
                  <td className="flex gap-2">
                    <button>Editar</button>
                    <button>Excluir</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Teste</td>
                  <td>Nike</td>
                  <td>20</td>
                  <td>Um produto bom</td>
                  <td>09/03/2024</td>
                  <td className="flex gap-2">
                    <button>Editar</button>
                    <button>Excluir</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Teste</td>
                  <td>Nike</td>
                  <td>20</td>
                  <td>Um produto bom</td>
                  <td>09/03/2024</td>
                  <td className="flex gap-2">
                    <button>Editar</button>
                    <button>Excluir</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Teste</td>
                  <td>Nike</td>
                  <td>20</td>
                  <td>Um produto bom</td>
                  <td>09/03/2024</td>
                  <td className="flex gap-2">
                    <button>Editar</button>
                    <button>Excluir</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Teste</td>
                  <td>Nike</td>
                  <td>20</td>
                  <td>Um produto bom</td>
                  <td>09/03/2024</td>
                  <td className="flex gap-2">
                    <button>Editar</button>
                    <button>Excluir</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Teste</td>
                  <td>Nike</td>
                  <td>20</td>
                  <td>Um produto bom</td>
                  <td>09/03/2024</td>
                  <td className="flex gap-2">
                    <button>Editar</button>
                    <button>Excluir</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Teste</td>
                  <td>Nike</td>
                  <td>20</td>
                  <td>Um produto bom</td>
                  <td>09/03/2024</td>
                  <td className="flex gap-2">
                    <button>Editar</button>
                    <button>Excluir</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Teste</td>
                  <td>Nike</td>
                  <td>20</td>
                  <td>Um produto bom</td>
                  <td>09/03/2024</td>
                  <td className="flex gap-2">
                    <button>Editar</button>
                    <button>Excluir</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="bg-black text-white h-screen w-2/6 z-1 absolute right-0 flex  flex-col justify-center items-center">
        <GrClose
          className="self-end mr-6 mt-2 text-white transition  ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  cursor-pointer duration-300 hover:opacity-90"
          color="white"
          size={30}
        />
        <h1 className="text-4xl mb-2">Cadastrar Produto</h1>
        <form className=" w-full h-4/6 flex flex-col justify-center items-center">
          <div className="flex flex-row justify-start items-center w-5/6 h-2/6 mb-5  border-b-2 border-red-600	 ">
            <GrMailOption size={30} color="#B91202" className="mx-4" />
            <input
              className="text-lg w-5/6  placeholder:text-[#B91202]  text-[#B91202] bg-transparent focus:no-underline pl-1 outline-none"
              type="email"
              placeholder="Digite seu email"
              name="email"
              title="e-mail"
            />
          </div>
          <div className="flex flex-row justify-start items-center w-5/6 h-2/6 mb-5  border-b-2 border-red-600	 ">
            <GrMailOption size={30} color="#B91202" className="mx-4" />
            <input
              className="text-lg w-5/6  placeholder:text-[#B91202]  text-[#B91202] bg-transparent focus:no-underline pl-1 outline-none"
              type="email"
              placeholder="Digite seu email"
              name="email"
              title="e-mail"
            />
          </div>
          <div className="flex flex-row justify-start items-center w-5/6 h-2/6 mb-5  border-b-2 border-red-600	 ">
            <GrMailOption size={30} color="#B91202" className="mx-4" />
            <input
              className="text-lg w-5/6  placeholder:text-[#B91202]  text-[#B91202] bg-transparent focus:no-underline pl-1 outline-none"
              type="email"
              placeholder="Digite seu email"
              name="email"
              title="e-mail"
            />
          </div>
          <div className="flex flex-row justify-start items-center w-5/6 h-2/6 mb-5  border-b-2 border-red-600	 ">
            <GrMailOption size={30} color="#B91202" className="mx-4" />
            <input
              className="text-lg w-5/6  placeholder:text-[#B91202]  text-[#B91202] bg-transparent focus:no-underline pl-1 outline-none"
              type="email"
              placeholder="Digite seu email"
              name="email"
              title="e-mail"
            />
          </div>
          <div className="flex flex-row justify-start items-center w-5/6 h-2/6 mb-5  border-b-2 border-red-600	 ">
            <GrMailOption size={30} color="#B91202" className="mx-4" />
            <input
              className="text-lg w-5/6  placeholder:text-[#B91202]  text-[#B91202] bg-transparent focus:no-underline pl-1 outline-none"
              type="email"
              placeholder="Digite seu email"
              name="email"
              title="e-mail"
            />
          </div>
          <div className="flex flex-row justify-start items-center w-5/6 h-2/6 mb-5  border-b-2 border-red-600	 ">
            <GrMailOption size={30} color="#B91202" className="mx-4" />
            <input
              className="text-lg w-5/6  placeholder:text-[#B91202]  text-[#B91202] bg-transparent focus:no-underline pl-1 outline-none"
              type="email"
              placeholder="Digite seu email"
              name="email"
              title="e-mail"
            />
          </div>
          <div className="flex flex-row justify-start items-center w-5/6 h-2/6 mb-5  border-b-2 border-red-600	 ">
            <GrMailOption size={30} color="#B91202" className="mx-4" />
            <input
              className="text-lg w-5/6  placeholder:text-[#B91202]  text-[#B91202] bg-transparent focus:no-underline pl-1 outline-none"
              type="email"
              placeholder="Digite seu email"
              name="email"
              title="e-mail"
            />
          </div>
          <div className="flex flex-row justify-start items-center w-5/6 h-2/6   border-b-2 border-red-600	 ">
            <GrMailOption size={30} color="#B91202" className="mx-4" />
            <input
              className="text-lg w-5/6  placeholder:text-[#B91202]  text-[#B91202] bg-transparent focus:no-underline pl-1 outline-none"
              type="email"
              placeholder="Digite seu email"
              name="email"
              title="e-mail"
            />
          </div>
        </form>

        <button className="text-white transition  ease-in-out delay-150 mt-10 w-5/6 h-16 bg-[#B91202] rounded-3xl text-2xl hover:-translate-y-1 hover:scale-110 hover:bg-[#B91247] duration-300 hover:opacity-90 ">
          Salvar
        </button>
      </div>
    </main>
  );
};

export default Gerenciamento;
