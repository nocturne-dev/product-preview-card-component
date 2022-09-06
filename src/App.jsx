import Card from "./components/ui/Card";

import { info } from "./data/info";
import styles from "./App.module.scss";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <div className={styles.app}>
      <Card info={info} />
      <Footer />
    </div>
  );
};

export default App;
