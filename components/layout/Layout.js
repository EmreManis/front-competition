import MainNavigation from '../navigation/MainNavigation';

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;