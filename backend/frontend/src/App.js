import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Main from './pages/home/Main';
import AuthPage from './pages/auth';
import CustomAppBar from './organisms/CustomAppBar';
import CustomFooter from './organisms/CustomFooter';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';
import { observer, inject } from 'mobx-react';
import PredictPage from './pages/predict';
import SearchPage from './pages/search';
import PortFolioPage from './pages/portfolio';
import NotFound from './pages/notfound';
import PortfolioItem from './pages/portfolioItem';
import StockDetailPage from './pages/stockdetail';
import { Helmet } from 'react-helmet-async';

const AppWrppar = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${({ theme }) => theme.mainBackgroundColor};
`;

const Content = styled.section`
  flex-grow: 1;
`;

function App({ authStore }) {
  // const { loading } = authStore;
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>스톡지니</title>
      </Helmet>
      <AppWrppar>
        <CustomAppBar />
        <Content>
          <Switch>
            {/* 라우트 */}
            <Route path="/" component={Main} exact />
            <Route
              path="/login"
              render={(props) => <AuthPage type="login" {...props} />}
            />
            <Route
              path="/register"
              render={(props) => <AuthPage type="register" {...props} />}
            />
            <Route path="/predict" component={PredictPage} exact />
            <Route path="/dashboard" component={PortFolioPage} exact />
            <Route path="/portfolio/:id" component={PortfolioItem} />
            <Route path="/search/:query" component={SearchPage} />
            <Route path="/stockdetail" component={StockDetailPage} exact />
            <Route path="*" component={NotFound} />
          </Switch>
        </Content>
        <CustomFooter />
      </AppWrppar>
    </ThemeProvider>
  );
}

export default inject('authStore')(observer(App));
