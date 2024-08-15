import imgPerfil from "../assets/images/foto_de_perfil.jpg";
import "../styles/Home.css";
export const Home = () => {
  return (
    <section
      className={`flex w-full h-screen justify-center items-center flex-col gap-5`}
    >
      <figure className="flex justify-center items-center">
        <img
          src={imgPerfil}
          alt="Photo Perfil"
          className="rounded-[50%] w-[180px] h-[180px] md:w-[250px] md:h-[250px]  relative"
        />
        <div className="rounded-[50%] w-[180px] h-[180px] md:w-[250px] md:h-[250px] img_home absolute" />
      </figure>
      <div className="flex flex-col justify-center items-center gap-1 p-6">
        <h1 className="text-4xl font-bold text-orange-50 sm:text-5xl">Hello, I'm Jesus Reynaldo</h1>
        <p className="text-xl font-semibold text-orange-50 ">A Fullstack developer specialised in React.</p>
      </div>
    </section>
  );
};
