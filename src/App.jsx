import { lazy, Suspense, useEffect } from 'react'
import './App.scss'
import { useDispatch } from 'react-redux'
import { fetchMultiplePokemonById } from './RTK/thunk'
import { Link, Route,Routes, useNavigate } from 'react-router-dom'


const Main = lazy(() => import('./pages/Main'))
const Detail = lazy(() => import('./pages/Detail'))
const Search  = lazy(() => import('./pages/Search'))
const Favorite  = lazy(() => import('./pages/Favorite'))


function App() {
  const navigate = useNavigate()
 const dispatch = useDispatch()
 
 
  useEffect (() => {
    dispatch(fetchMultiplePokemonById(151))
   },[])
   
  return (
    <>
      <h1 className='border-t-[30px] border-t-[red] text-[45px] text-center
      bg-black text-white'>포켓몬 도감</h1>
      <nav className=' flex  gap-[20px] justify-center py-[10px]
      border-b-[3px]'>
        <Link to={'/'}>메인</Link> 
        <Link to={'/favorite'}>찜목록</Link> 
        
        <div>
        <input onChange={(e) => navigate (`/search?pokemon=${e.target.value}`)} 
        className='border-b w-[120px] border-[darkgray] px-2'
        />
        <span>🔍</span>
       </div>

      </nav>
      <main className='bg-[darkgray] flex flex-wrap gap-[20px] 
      justify-center pt-[20px]'
      >
     <Suspense fallback={<div>로딩중...</div>}>
      <Routes>
        <Route path={'/'} element={<Main />}/>
        <Route path={'/detail/:pokemonId'} element ={<Detail />}/>
        <Route path={'/search'} element={<Search /> }/>
        <Route path={'/favorite'} element={<Favorite/>} />
      </Routes>

     </Suspense>

      </main>
    </>
  )

}

export default App