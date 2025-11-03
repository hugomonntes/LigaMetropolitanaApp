import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import UpcomingMatches from "@/components/upcoming-matches"
import TopScorers from "@/components/top-scorers"
import CategoriesSection from "@/components/categories-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <UpcomingMatches />
      <TopScorers />
      <CategoriesSection />
      <Footer />
    </main>
  )
}
