import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="w-full">
      <div className="flex h-screen relative">
        <header className="w-full h-16 flex justify-between px-44 absolute">
          <nav className="flex">
            <div className="flex gap-10 items-center">
              <a href="" className="">
                <Image
                  src="finapp-logo-header.svg"
                  alt="Finapp logo"
                  width={150}
                  height={60}
                />
              </a>
              <a href="#acerca_de" className="hover:underline">
                Acerca de
              </a>
              <a href="#desarolladores" className="hover:underline">
                Desarolladores
              </a>
            </div>
          </nav>
          <nav className="flex">
            <div className="flex gap-10 items-center">
              <Link href={"/signin"} className="text-white">
                Iniciar sesión
              </Link>
              <Link href={"/signup"} className="text-[#8C30F5]">
                Registrarse
              </Link>
            </div>
          </nav>
        </header>
        <div className="w-full flex items-center pl-40">
          <div className="max-w-[620px]">
            <h1 className="text-7xl font-bold mb-5">Somos Finapp</h1>
            <p className="text-lg">
              Te ofrecemos una aplicación que te ayudará a gestionar tus pagos
              de créditos vehiculares.
            </p>
          </div>
        </div>
        <div className="w-[1000px] bg-[#18191F] relative -z-10">
          <Image
            className="absolute right-16 top-28"
            src="money_cash.svg"
            width={200}
            height={200}
            alt=""
          />
          <Image
            className="absolute left-16 bottom-[calc(50%-100px)]"
            src="salary_day.svg"
            width={200}
            height={200}
            alt=""
          />
          <Image
            className="absolute right-16 bottom-16"
            src="money_card.svg"
            width={200}
            height={200}
            alt=""
          />
        </div>
      </div>
      <div id="acerca_de" className="flex items-center gap-40 px-40 py-16">
        <Image src="acerca_de_image.svg" width={540} height={540} alt="" />
        <div>
          <h1 className="text-7xl font-bold mb-5">Acerca de</h1>
          <p className="text-lg max-w-[520px]">
            Finapp se desarrollo con el objetivo de ayudarte manejar
            correctamente tus pagos de créditos vehiculares.
          </p>
        </div>
      </div>
      <div
        id="desarolladores"
        className="flex flex-col items-center flex-wrap gap-16 px-36 py-24"
      >
        <div className="text-center">
          <h1 className="text-7xl font-bold mb-5">Desarolladores</h1>
          <p className="text-lg">
            Aqui presentamos al equipo encargado del desarrollo de Finapp.
          </p>
        </div>
        <ul className="flex gap-10">
          <li className="flex flex-col items-center gap-2">
            <Image src="circle_1.svg" width={70} height={70} alt="" />
            <h1 className="text-lg">JESUS ONOFRE</h1>
            <h2 className="text-sm">Estudiante de ...</h2>
          </li>
          <li className="flex flex-col items-center gap-2">
            <Image src="circle_1.svg" width={70} height={70} alt="" />
            <h1 className="text-lg">DAVID SOTO</h1>
            <h2 className="text-sm">Estudiante de ...</h2>
          </li>
          <li className="flex flex-col items-center gap-2">
            <Image src="circle_1.svg" width={70} height={70} alt="" />
            <h1 className="text-lg">EDUARD TRAVEZAÑO</h1>
            <h2 className="text-sm">Estudiante de ...</h2>
          </li>
          <li className="flex flex-col items-center gap-2">
            <Image src="circle_1.svg" width={70} height={70} alt="" />
            <h1 className="text-lg">EMERZON SOSA</h1>
            <h2 className="text-sm">Estudiante de ...</h2>
          </li>
          <li className="flex flex-col items-center gap-2">
            <Image src="circle_1.svg" width={70} height={70} alt="" />
            <h1 className="text-lg">BRUNO ROBLES</h1>
            <h2 className="text-sm">Estudiante de ...</h2>
          </li>
        </ul>
      </div>
      <footer className="bg-[#18191F] h-24 flex justify-between items-center px-36">
        <p className="text-white text-sm">
          © 2023 Finapp. Todos los derechos reservados.
        </p>
        <Image
          className="mr-10"
          src="finapp-logo-footer.svg"
          width={150}
          height={60}
          alt=""
        />
        <div className="flex items-center gap-5">
          <p className="text-white text-sm">Síguenos en </p>
          <ul className="flex items-center gap-4">
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                <Image
                  src="facebook_logo.svg"
                  alt="facebook logo"
                  width={20}
                  height={20}
                />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <Image
                  src="instagram_logo.svg"
                  alt="instagram logo"
                  width={20}
                  height={20}
                />
              </a>
            </li>
            <li>
              <a href="https://pe.linkedin.com/" target="_blank">
                <Image
                  src="linkedin_logo.svg"
                  alt="linkedin logo"
                  width={20}
                  height={20}
                />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" target="_blank">
                <Image
                  src="twitter_logo.svg"
                  alt="twitter logo"
                  width={20}
                  height={20}
                />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Home;
