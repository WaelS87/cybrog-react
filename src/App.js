import "./App.css";
import {Container} from './components/index'
import {Header,Hero,Footer,MostPopular} from './sectiones/index'
const App = () => {
  return (
    <>
      <Header/>
      <Container>
        <Hero/>
        <MostPopular/>
      </Container>
      <Footer />
    </>
  );
};
export default App;
