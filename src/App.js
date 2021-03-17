import './App.css';
import { Layout, Menu } from 'antd';
import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Title from './components/Title';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <>
        <Layout className='layout'>
        <Header>
          <div className='logo'/>
          <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
            <Menu.Item key='1'><Link to='/'>To Do</Link></Menu.Item>
            <Menu.Item key='2'><Link to='/calender'>Calender</Link></Menu.Item>
          </Menu>
        </Header>
        <Content>
          <div className='site-layout-content'>
            <div className='main'>
              <Route path='/' exact>
                <Title></Title>
              </Route>
            </div>
          </div>
        </Content>
        </Layout>
      </>
    </Router>
  );
}

export default App;
