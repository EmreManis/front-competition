import MainNavigation from "../navBar/MainNavigation";
import MobileNavigation from "../navBar/MobileNavigation";

function Layout(props) {
  return (
    <div>
      <div className="hidden md:block">
        <MainNavigation />
      </div>
      <div className="block md:hidden">
        <MobileNavigation />
      </div>
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
