import  HeroSection  from '../components/Hero'
import About from '../components/About'

export default function Portfolio(){
  return(
    <main style={{ width: '100vw', background: '#000', overflowX: 'hidden' }}>
      <HeroSection />
      <About />
    </main>
  )
}