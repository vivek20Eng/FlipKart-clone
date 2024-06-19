import logo from './logo.svg';
import './index.css';
import ProductList from './components/ProductList.jsx';
import Layout from './components/Layout.jsx';
import Header from './components/Header.jsx';
function App() {
  return (
    <>
    <Layout>
      <Header/>
      <ProductList/>
    </Layout>
    </>
  );
}

export default App;
