import Header from './(server-components)/Header'
import HeroSection from './(landing-page)/Hero-section'

export default function Home() {
  return (
  <>
    <Header />
    <main className=" container  flex  flex-col items-center justify-center">
      <HeroSection />
    </main>
  </>
  )
}
