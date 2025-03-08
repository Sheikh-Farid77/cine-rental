import MovieList from "./cine/MovieList";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container mx-auto grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
