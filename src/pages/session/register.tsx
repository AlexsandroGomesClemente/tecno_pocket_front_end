import TitleSession from "@/src/components/session/titleSession";
import FormRegister from "@/src/components/session/formRegister";
import ChangePage from "@/src/components/session/changePage";

const Register = () => {
  return (
    <main className="h-screen flex justify-center items-center bg-main">
      <div className=" w-4/12 h-6/6 flex  items-center flex-col rounded-2xl shadow-2xl shadow-gray-400 glass-effect">
        <TitleSession title="Registrar" />
        <FormRegister />
        <ChangePage direction="/" message="Já possui uma conta? Entrar." />
      </div>
    </main>
  );
};

export default Register;
