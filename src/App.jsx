import {books} from './constants/mockData'
import Layout from './layout/Layout';
import Books from '../src/components/Books.jsx'
function App() {
  return (
    <>
      <Layout>
        <Books/>
      </Layout>
    </>
  );
}

export default App;
