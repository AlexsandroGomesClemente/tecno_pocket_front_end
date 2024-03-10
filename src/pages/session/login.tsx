import TitleSession from "@/src/components/session/titleSession";
import FormLogin from "@/src/components/session/formLogin";
import ChangePage from "@/src/components/session/changePage";

const Login = () => {
  return (
    <main className="h-screen flex justify-center items-center bg-main">
      <div className=" w-4/12 h-5/6 flex  items-center flex-col rounded-2xl shadow-2xl shadow-gray-400 glass-effect">
        <TitleSession title={'Entrar'}/>
        <FormLogin />
        <ChangePage direction="session/register" message="Não possui uma conta? Registrar." />
      </div>
    </main>
  );
};

export default Login;
