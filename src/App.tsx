import { Advantage } from "./pages/advantages/advantage";
import { Projects } from "./pages/components/projects/projects";
import { Computer } from "./pages/computers/computers";
import { Footer } from "./pages/footer/footer";
import { Header } from "./pages/header/header";
import { Hero } from "./pages/hero/hero";
import { News } from "./pages/news/news";
import { GetStarted } from "./pages/started/started";
import { Technology } from "./pages/technology/technology";
import Testimonials from "./pages/users/users";
import styles from "../src/style/global.module.css"
// import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className={styles.root}>
            <Header/>
            <Hero/>
            <Projects/>
            <Advantage/>
            <Computer/>
            <Technology/>
            <Testimonials/>
            <GetStarted/>
            <News/>
            <Footer/>
            {/* <Routes>
                <Route path="/" element></Route>
            </Routes> */}
        </div>
    )
}

export default App