import Banner from "./components/shared/Banner"
import Navbar from "./components/shared/Navbar"
import MainLayout from "./components/Technology/MainLayout"
import { Suspense, useState } from "react";
import type { Technology } from "./types/technologyType";
import StackList from "./components/Technology/StackList";
import Technologies from "./components/Technology/Technologies";
import Footer from "./components/shared/Footer";



const fetchTechnology = async (): Promise<Technology[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
}
const technologyPromise = fetchTechnology();


function App() {
  const [saved,setSaved]= useState<Technology[]>([])
  const handleSavedStack = (technology :Technology) =>{
       setSaved((prev) => [...prev, technology]);
  }

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <MainLayout></MainLayout>
      <main>
        <section className="container mx-auto my-20">
          <div className="grid grid-cols-4 gap-5">
            <div className="col-span-3">
              <Suspense fallback={<div>Laoding...</div>}>
                <Technologies technologyPromise={technologyPromise} saved={saved} setSaved = {setSaved} handleSavedStack={handleSavedStack}></Technologies>
              </Suspense>
            </div>
            <div className="col-span-1">
              <StackList technologies ={saved} setSaved = {setSaved}></StackList>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
