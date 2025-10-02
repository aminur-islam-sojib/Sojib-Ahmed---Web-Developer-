import { useSelector } from 'react-redux';
import './App.css';
import AsideBar from './components/AsideBar/AsideBar';
import MainBar from './components/Main/MainBar';
import type { RootState } from './store/store';
import { Toaster, toast } from 'sonner';

function App() {
  const isToast = useSelector(
    (state: RootState) => state.clickStateR.toastActive
  );

  return (
    <section className="bg-[#121212]">
      <section className="grid grid-cols-4 py-5 pb-12 md:pb-0 sm:py-12 px-5 sm:px-5 md:px-10 gap-5 sm:gap-10">
        <div className="col-span-4 lg:col-span-1">
          <div className="sticky top-12  overflow-y-auto">
            <AsideBar />
          </div>
        </div>
        <div className="col-span-4 lg:col-span-3">
          <MainBar />
        </div>
        <div className=" z-50">
          {isToast &&
            toast.success('CV Downloaded Successfully!', { duration: 2000 })}
        </div>
      </section>
      <Toaster
        position="top-center"
        richColors={true}
        expand={false}
        visibleToasts={1}
      />
    </section>
  );
}

export default App;
