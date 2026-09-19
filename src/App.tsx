import Banner from "./components/shared/Banner"
import Navbar from "./components/shared/Navbar"
import MainLayout from "./components/Technology/MainLayout"
import { Suspense } from "react";
import type { Technology } from "./types/technologyType";



const fetchTechnology = async ():Promise<Technology> => {
  const res = await fetch('/data.json')
  const data = await res.json()
  return data;
}
 const technologyPromise = fetchTechnology()


function App() {

 
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <main>
        <section className="container mx-auto my-10">
          <Suspense fallback={<div>Laoding...</div>}>
            <MainLayout technologyPromise ={technologyPromise}></MainLayout>
          </Suspense>
        </section>
      </main>

    </>
  )
}

export default App
