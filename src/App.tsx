import './App.css';
import AsideBar from './components/AsideBar/AsideBar';
import MainBar from './components/Main/MainBar';

function App() {
  return (
    <section className="bg-[#121212]">
      <section className="grid grid-cols-4 py-5 pb-12 sm:py-12 px-5 sm:px-5 md:px-10 gap-5 sm:gap-10">
        <div className="col-span-4 lg:col-span-1">
          <div className="sticky top-12  overflow-y-auto">
            <AsideBar />
          </div>
        </div>
        <div className="col-span-4 lg:col-span-3">
          <MainBar />
        </div>
      </section>
    </section>
  );
}

export default App;
