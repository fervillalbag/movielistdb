import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MenuTop from './components/MenuTop';

// pages
import Home from './pages/home';
import NewMovies from './pages/new-movies';
import Popular from './pages/popular';
import Error404 from './pages/error404';
import Search from './pages/search';
import Movie from './pages/movie';

const App = () => {

   const { Header, Content } = Layout;

   return (
      <Layout>
         <Router>
            <Header>
               <MenuTop />
            </Header>
            <Content>
               <Switch>
                  <Route path="/" exact>
                     <Home />
                  </Route>
                  <Route path="/new-movies" exact>
                     <NewMovies />
                  </Route>
                  <Route path="/popular" exact>
                     <Popular />
                  </Route>
                  <Route path="/popular" exact>
                     <Popular />
                  </Route>
                  <Route path="/search" exact>
                     <Search />
                  </Route>
                  <Route path="/movie/:id" exact>
                     <Movie />
                  </Route>
                  <Route path="*">
                     <Error404 />
                  </Route>
               </Switch>
            </Content>
         </Router>
      </Layout>
   );
}

export default App;
