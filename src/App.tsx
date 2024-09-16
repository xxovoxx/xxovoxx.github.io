import React from 'react';
import { Helmet } from 'react-helmet';

import CustomNavbar from './components/Navbar/Navbar';
import UsePathname from './hooks/UsePathname';

import Home from './pages/Home';
import Media from './pages/Media';
import TodoList from './pages/TodoList';

const App: React.FC = () => {
  const currentPath = UsePathname();

  let CurrentPage;
  if (currentPath === "/") {
    CurrentPage = <Home />;
  } else if (currentPath === "/Media") {
    CurrentPage = <Media />;
  } else if (currentPath === "/TodoList") {
    CurrentPage = <TodoList />;
  } else {
    CurrentPage = <div>Page not found</div>; // 处理404页面
  }

  return (
    <>
      <Helmet>
        <title>辣稽PVP的个人页面</title>
        <link rel="icon" href="https://avatars.githubusercontent.com/u/35602393?v=4" type="image/png" />
      </Helmet>
      <div>
        <CustomNavbar />
        {CurrentPage}
      </div>
    </>
  );
};

export default App;