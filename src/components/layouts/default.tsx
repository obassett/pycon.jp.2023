import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import menuContext from "@/utils/menuContext";
import {useState} from "react";

const Layout = ({children}: { children: JSX.Element }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <menuContext.Provider value={{isMenuOpen, setIsMenuOpen}}>
      <Header/>
      <main>
        <div
          className={
            "w-full pt-12 lg:pt-0 pb-8 lg:block " + (isMenuOpen ? "hidden" : "block")
          }
        >
          {children}
        </div>
      </main>
      <div className={isMenuOpen ? 'hidden lg:block' : 'block'}>
        <Footer/>
      </div>
    </menuContext.Provider>
  );
};

export default Layout;
