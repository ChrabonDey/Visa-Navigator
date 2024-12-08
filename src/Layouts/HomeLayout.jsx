import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";


const HomeLayout = () => {
    return (
        <div>
            <header className="">
                <Header></Header>
            </header>
           <Outlet></Outlet>

         <section className="mt-14">
         <Footer></Footer>
         </section>
        </div>
    );
};

export default HomeLayout;