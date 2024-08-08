// import React from 'react'

import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { Link } from "react-router-dom";

function Home() {
    const {nome, setNome} = useContext(UserContext);
  return (
    <>
        <div className='bg-indigo-900 flex justify-center'>
            <div className='container grid grid-cols-2 text-white'>
                <div className='flex flex-col gap-4 items-center justify-center py-4'>
                    <h2 className='text-5xl font-bold'>Seja bem-vinde!</h2>
                    <p className='text-xl'>Expresse aqui seus pensamentos e opiniões</p>
                    <div className='flex justify-around gap-4'>
                        <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver postagens</button>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <img src="{homeLogo}" alt="" className='w-2/3' />
                </div>
            </div>
        </div>
        <div className='flex justify-center items-center'>
      <div>
        <h2 className="text-slate-900 text-5xl  my-4">Home</h2>
        <h2 className="text-slate-900 text-4xl ">Olá, user: {nome}</h2>
        <Link to="/login" className="my-4 rounded bg-indigo-400
         hover:bg-indigo-900 text-white w-1/2 py-2 flex justify-center">
          Voltar 
        </Link>
      </div>
    </div>
    </>
  );
}

export default Home