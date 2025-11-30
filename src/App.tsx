import styles from "../src/style/global.module.css";
import { Advantage } from "./module/advantages/advantage";
import { Projects } from "./module/components/projects/projects";
import { Computer } from "./module/computers/computers";
import { Footer } from "./module/footer/footer";
import { Header } from "./module/header/header";
import { Hero } from "./module/hero/hero";
import { News } from "./module/news/news";
import { GetStarted } from "./module/started/started";
import { Technology } from "./module/technology/technology";
import Testimonials from "./module/users/users";
// import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className={styles.root}>
      <Header />
      <Hero />
      <Projects />
      <Advantage />
      <Computer />
      <Technology />
      <Testimonials />
      <GetStarted />
      <News />
      <Footer />
      {/* <Routes>
                <Route path="/" element></Route>
            </Routes> */}
    </div>
  );
}

export default App;
