import React from 'react';
import Home from './pages/Home';
import Media from './pages/Media';
import CustomNavbar from './components/Navbar/Navbar';
import UsePathname from './hooks/UsePathname';

const App: React.FC = () => {
  const currentPath = UsePathname();

  let CurrentPage;
  if (currentPath === "/") {
    CurrentPage = <Home />;
  } else if (currentPath === "/Media") {
    CurrentPage = <Media />;
  } else {
    CurrentPage = <div>Page not found</div>; // 处理404页面
  }

  return (
    <div>
      <CustomNavbar />
      {CurrentPage}
    </div>
  );
};

export default App;