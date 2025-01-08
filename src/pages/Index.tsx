import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { HighlightCard } from "@/components/HighlightCard";
import { Footer } from "@/components/Footer";
import { Typography, Space } from "antd";

const { Title, Paragraph } = Typography;

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="container mx-auto px-24 pt-40 pb-16 space-y-12 flex-grow">
        <div className="text-center mb-8 space-y-4">
          <Title style={{ color: "#fff", fontSize: "60px", marginBottom: "16px" }} className="manrope-800">
            Interactive <br /> Economic Analysis Tool
          </Title>
          <Paragraph style={{ color: "rgba(255, 255, 255, 0.65)", fontSize: "18px" }} className="manrope-400">
            A self-improving analysis layer for LLM applications, <br />
            enabling personalized AI experiences that save costs and delight users.
          </Paragraph>
        </div>

        <SearchBar />

        <div>
          <div className="grid md:grid-cols-3 gap-8 mt-20 mb-20">
            <HighlightCard
              title="JPMC Highlights"
              description="Latest insights, analysis and forecasts from JPMorgan Chase"
              link="/jpmc-highlights"
              className="animate-fade-in"
              logo="chase.png"
            />
            <HighlightCard
              title="Barclays Highlights"
              description="Key market updates, forecasts and analysis from Barclays"
              link="/barclays-highlights"
              className="animate-fade-in [animation-delay:100ms]"
              logo="barclays.png"
            />
            <HighlightCard
              title="Did you know?"
              description="Interesting facts and insights about the global economy"
              link="/facts"
              className="animate-fade-in [animation-delay:200ms]"
              logo="didyouknow.png"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
