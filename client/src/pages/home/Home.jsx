import styles from "./Home.module.css";
import Cover from "../../components/Cover/Cover";
import LoginPanel from "../../components/LoginPanel/LoginPanel";

const Home = () => {

    return (
        <>
            <Cover />
            <LoginPanel />
        </>      
    );
}

export default Home;