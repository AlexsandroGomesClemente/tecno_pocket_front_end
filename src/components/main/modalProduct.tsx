import { GrMailOption, GrClose } from "react-icons/gr";

const ModalProduct = () => {
  return (
    <div className=" bg-black text-white h-screen w-2/6 z-1 absolute right-0 flex  flex-col justify-center items-center">
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
  );
};

export default ModalProduct;
