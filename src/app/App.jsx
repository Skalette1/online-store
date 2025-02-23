import "@/app/styles/style.css";
import { Header } from "../widgets/header/Header";
import { Footer } from "../widgets/footer/footer";
import { Mixes } from "../shared/ui/productCard/Mixes";


const App = () => {
  return (
    <>
      <Header />
      <Mixes />
      <Footer />
    </>
  );
};

export default App;
