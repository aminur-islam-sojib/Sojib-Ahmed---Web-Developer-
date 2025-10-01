import { useSelector } from 'react-redux';
import './App.css';
import AsideBar from './components/AsideBar/AsideBar';
import MainBar from './components/Main/MainBar';
import Toast from './components/Main/Home/DownloadCV/Toast';
import type { RootState } from './store/store';

function App() {
  const toast = useSelector(
    (state: RootState) => state.clickStateR.toastActive
  );

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
        <div className=" z-50">{toast && <Toast />}</div>
      </section>
    </section>
  );
}

export default App;
