import "./layout.css";


export const Layout = ({ children }) => {
    return (
      <div className="layout">
        <Header />
        <main className="main-content">{children}</main>
        <Footer />
      </div>
    );
  };