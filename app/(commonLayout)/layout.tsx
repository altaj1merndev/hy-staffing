import CommonUserRep from "@/src/components/shears/logInProvider/CommonUserRep";
import NavBar from "../components/commonLayout/home/NavBar";
import Footer from "../components/commonLayout/home/Footer";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <CommonUserRep>
        <NavBar />
        <main className="h-full ">{children}</main>
        <Footer />
      </CommonUserRep>
    );
  };
  
  export default CommonLayout;
  