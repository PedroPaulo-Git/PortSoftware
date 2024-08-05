import './Home.css'
import { HeaderHome } from '../HeaderHome/HeaderHome'
import HomeImage from '../../assets/mid.jpg'

export const Home = () => {
  return (
    <>
    <HeaderHome/>
    <div>
        
    </div>
     <img className='homeimage' src={HomeImage} alt="" />
    </>
   
  )
}
export default Home