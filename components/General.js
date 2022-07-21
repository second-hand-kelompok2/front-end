import Footer from "./Footer"
// import { NavigationBar } from "../navbar/NavigationBar"
import { NavNoLogin } from "./NavNoLogin"


export default function Layout({ children }) {
  return (
    <>
      {/* <NavigationBar/> */}
      <NavNoLogin/>
      <main>{children}</main>
      <Footer/>
    </>
  );
}
