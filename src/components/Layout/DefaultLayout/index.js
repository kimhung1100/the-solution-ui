import Header from './Header';
import Footer from './Footer';
import LinearBar from './LinearBar';
function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <LinearBar />
            <div className="content">{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
