import { ChevronDown, UserRound } from "lucide-react";
import Container from "../../Shared/Container";
import Button from "../../Shared/Button";
import HomeNav from "./Navbar/HomeNav";
import PageNav from "./Navbar/PageNav";
import PortfolioNav from "./Navbar/PortfolioNav";
import BlogNav from "./Navbar/BlogNav";
import ContactNav from "./Navbar/ContactNav";

const Navbar = () => {
  return (
    <>
      <section className=" border-b border-gray-200 py-5">
        <Container className="flex justify-between items-center">
          {/* left*/}
          <h3 className="text-4xl font-bold">Jano.</h3>

          {/* middle */}
          <nav>
            <ul className="flex items-center gap-8">
              <li className="relative group">
                <span className="flex items-center group-hover:text-primary cursor-pointer py-3 text-lg font-semibold">
                  Home <ChevronDown />
                </span>

                <HomeNav className="min-w-150 p-8"></HomeNav>
              </li>

              <li className="relative group  ">
                <span className="flex items-center group-hover:text-primary  cursor-pointer py-3 text-lg font-semibold">
                  Pages <ChevronDown />
                </span>
                <PageNav className="min-w-75 py-6 pl-6"></PageNav>
              </li>

              <li className="relative group  ">
                <span className="flex items-center group-hover:text-primary  cursor-pointer py-3 text-lg font-semibold">
                  Portfolio <ChevronDown />
                </span>
                <PortfolioNav className="min-w-60 py-6 pl-6"></PortfolioNav>
              </li>

                    <li className="relative group  ">
                <span className="flex items-center group-hover:text-primary  cursor-pointer py-3 text-lg font-semibold">
                  Blog <ChevronDown />
                </span>
                <BlogNav className="min-w-60 py-6 pl-6"></BlogNav>
              </li>


                 <li className="relative group  ">
                <span className="flex items-center group-hover:text-primary  cursor-pointer py-3 text-lg font-semibold">
                  Contact <ChevronDown />
                </span>
                <ContactNav className="min-w-60 py-6 pl-6"></ContactNav>
              </li>
            </ul>
          </nav>

          {/* right */}
          <div className="flex items-center gap-3">
            <div className="border border-gray-300 rounded-full  p-3 cursor-pointer group hover:bg-primary hover:border-transparent transition-all duration-300 ease-in-out">
              <UserRound className="text-primary group-hover:text-white transition-colors duration-300 ease-in-out"></UserRound>
            </div>

            <Button className="rounded-full font-semibold">Contact us</Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Navbar;
