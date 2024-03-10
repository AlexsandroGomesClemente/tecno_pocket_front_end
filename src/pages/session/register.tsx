import { GrMailOption, GrLock, GrUser, GrCycle } from "react-icons/gr";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();

  return (
    <main className="h-screen flex justify-center items-center bg-main">
      <div className=" w-4/12 h-6/6 flex  items-center flex-col rounded-2xl shadow-2xl shadow-gray-400 glass-effect">
        <h1 className=" bg-[#B91202]  w-full h-20 rounded-t-2xl text-white text-4xl text-center pt-5 tracking-wide">
          Registrar
        </h1>

        <form className="mt-20 w-full h-5/6 flex justify-center items-center flex-col gap-4">
          <div className="flex flex-row justify-start items-center w-5/6 h-4/6 mb-3  border-b-2 border-red-600	 ">
            <GrUser size={30} color="#B91202" className="mx-4" />
            <input
              className="text-lg w-5/6  placeholder:text-[#B91202]  text-[#B91202] bg-transparent focus:no-underline pl-1 outline-none"
              type="email"
              placeholder="Digite seu nome"
              name="nome"
              title="nome"
            />
          </div>
          <div className="flex flex-row justify-start items-center w-5/6 h-4/6 mb-3  border-b-2 border-red-600	 ">
            <GrMailOption size={30} color="#B91202" className="mx-4" />
            <input
              className="text-lg w-5/6  placeholder:text-[#B91202]  text-[#B91202] bg-transparent focus:no-underline pl-1 outline-none"
              type="email"
              placeholder="Digite seu email"
              name="email"
              title="e-mail"
            />
          </div>
          <div className="flex flex-row justify-start items-center w-5/6 h-4/6 mb-3  border-b-2 border-red-600	 ">
            <GrLock size={30} color="#B91202" className="mx-4" />
            <input
              className="text-lg w-5/6  placeholder:text-[#B91202] text-[#B91202] focus:no-underline pl-1 outline-none bg-transparent"
              type="password"
              placeholder="Digite sua senha"
              name="password"
              title="Senha"
            />
          </div>
          <div className="flex flex-row justify-start items-center w-5/6 h-4/6 mb-3  border-b-2 border-red-600	 ">
            <GrCycle size={30} color="#B91202" className="mx-4" />
            <input
              className="text-lg w-5/6  placeholder:text-[#B91202] text-[#B91202] focus:no-underline pl-1 outline-none bg-transparent"
              type="password"
              placeholder="Confirme sua senha"
              name="confirm-password"
              title="Confirme sua senha"
            />
          </div>
        </form>

        <button
          onClick={(e) => {
            router.push("/");
          }}
          className="text-white transition  ease-in-out delay-150 mt-20 w-5/6 h-16 bg-[#B91202] rounded-3xl text-2xl hover:-translate-y-1 hover:scale-110 hover:bg-[#B91247] duration-300 hover:opacity-90 "
        >
          Entrar
        </button>
        <span className="text-[#B91202] self-start text-sm  ml-12 mt-2">
          <Link href={"/"}>Já possui uma conta? Entrar.</Link>
        </span>
      </div>
    </main>
  );
};

export default Register;
