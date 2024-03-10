import { GrMailOption, GrLock } from "react-icons/gr";
import { useRouter } from "next/navigation";

const FormLogin = () => {
  const router = useRouter();

  return (
    <>
      <form className="mt-20 w-full h-2/6 flex justify-center items-center flex-col gap-4">
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
          <GrLock size={30} color="#B91202" className="mx-4" />
          <input
            className="text-lg w-5/6  placeholder:text-[#B91202] text-[#B91202] focus:no-underline pl-1 outline-none bg-transparent"
            type="password"
            placeholder="Digite sua senha"
            name="password"
            title="password"
          />
        </div>
      </form>
      <button
        onClick={(e) => {
          router.push("/main/productsShop");
        }}
        className="text-white transition  ease-in-out delay-150 mt-20 w-5/6 h-16 bg-[#B91202] rounded-3xl text-2xl hover:-translate-y-1 hover:scale-110 hover:bg-[#B91247] duration-300 hover:opacity-90 "
      >
        Entrar
      </button>
    </>
  );
};

export default FormLogin;
