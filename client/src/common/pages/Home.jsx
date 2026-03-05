import PublicNavbar from "../components/PublicNavbar";
import Middle from "../components/Middle";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <PublicNavbar />
            <main className="flex-grow">
                <Middle />
            </main>
            <Footer />
        </>
    );
}

export default Home;
