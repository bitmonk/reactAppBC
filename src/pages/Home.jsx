import { useParams } from "react-router-dom"
import Footer from "../component/Footer"
import Header from "../component/Header"

const Home = () => {
  // let params = useParams()
  let {name} = useParams()
  return (
   <>
   <Header />
   HOMEPAGE
   <h1>Wlcome {name}</h1>
   <Footer />
   </>
  )
}

export default Home