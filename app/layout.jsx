import "@/assets/styles/global.scss";
import NavBar from "@/components/NavBar";
import { StateContextProvider } from "@/components/StateContext";

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <StateContextProvider>
          <NavBar />
          <main>{children}</main>
        </StateContextProvider>
      </body>
    </html>
  );
};

export default MainLayout;
