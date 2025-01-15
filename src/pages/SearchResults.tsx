import { Header } from "@/components/Header";
import { UpCircleOutlined, DownCircleOutlined, CopyOutlined } from "@ant-design/icons";
import { SearchResultsBar } from "@/components/SearchResultsBar";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnalysisSteps } from "@/components/AnalysisSteps";
import { SearchSources } from "@/components/SearchSources";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const IconContainer = () => {
  const [activeIcon, setActiveIcon] = useState(null);

  const copyToClipboard = async () => {
    const answerElement = document.getElementById("answer");
    if (answerElement) {
      try {
        await navigator.clipboard.writeText(answerElement.textContent || answerElement.innerText);
        console.log("Content copied to clipboard!");
      } catch (err) {
        console.error("Failed to copy: ", err);
      }
    }
  };

  const toggleIcon = (iconName) => {
    setActiveIcon(activeIcon === iconName ? null : iconName);
  };

  const ThumbsUpIcon = () => (
    <svg
      onClick={() => toggleIcon("thumbsUp")}
      width="12"
      height="12"
      viewBox="0 0 20 20"
      fill={activeIcon === "thumbsUp" ? "white" : "gray"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 22H18C19.1 22 20 21.1 20 20V12C20 10.9 19.1 10 18 10H11.69L13.64 3.64L13.67 3.12C13.67 2.53 13.17 2 12.57 2C12.27 2 12 2.11 11.76 2.32L7.92 5.58C7.37 6.05 7 6.78 7 7.58V18C7 20.21 8.79 22 11 22H9ZM2 22H6V10H2V22Z" />
    </svg>
  );

  const ThumbsDownIcon = () => (
    <svg
      onClick={() => toggleIcon("thumbsDown")}
      width="12"
      height="12"
      viewBox="0 0 20 20"
      fill={activeIcon === "thumbsDown" ? "white" : "gray"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15 2H6C4.9 2 4 2.9 4 4V12C4 13.1 4.9 14 6 14H12.31L10.36 20.36L10.33 20.88C10.33 21.47 10.83 22 11.43 22C11.73 22 12 21.89 12.24 21.68L16.08 18.42C16.63 17.95 17 17.22 17 16.42V6C17 3.79 15.21 2 13 2H15ZM22 2H18V14H22V2Z" />
    </svg>
  );

  const ClipboardIcon = () => (
    <svg
      onClick={() => {
        toggleIcon("clipboard");
        copyToClipboard();
      }}
      width="13"
      height="13"
      viewBox="0 0 95 95"
      fill={activeIcon === "clipboard" ? "white" : "gray"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M66.742 1.805V24.25h22.446zM36.375 28.059l-2.004-2.004v22.45h22.45z" />
      <path d="M28.258 24.25H8.668a4.66 4.66 0 0 0-4.66 4.66v61.43A4.66 4.66 0 0 0 8.668 95h45.297a4.66 4.66 0 0 0 4.66-4.66V54.613H28.262z" />
      <path
        stroke="#fff"
        d="M60.629 30.363V0H41.035a4.66 4.66 0 0 0-4.66 4.66v14.781l24.75 24.75 3.508 3.61V70.75h21.695a4.66 4.66 0 0 0 4.66-4.66l.004-35.728z"
      />
    </svg>
  );

  return (
    <div className="bottom-4 right-10 flex space-x-2 justify-end">
      <ThumbsUpIcon />
      <ThumbsDownIcon />
      <ClipboardIcon />
    </div>
  );
};

const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q");

  const [showSources, setShowSources] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [steps, setSteps] = useState([
    {
      title: "Information Gathering",
      description: "Collecting relevant data from multiple sources",
      completed: false,
    },
    {
      title: "Analysis",
      description: "Processing and analyzing collected information",
      completed: false,
    },
    {
      title: "Response Generation",
      description: "Creating comprehensive insights from analysis",
      completed: false,
    },
  ]);

  // Mock sources data - in a real app, this would come from your API
  const sources = [
    {
      title: "JPMC Press Release",
      url: "https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/quarterly-earnings/2024/3rd-quarter/66269bb6-ecc5-4172-b461-6b7e7cd47aab.pdf",
      source: "3Q24",
    },
    {
      title: "JPMC Earnings Supplement",
      url: "https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/quarterly-earnings/2024/3rd-quarter/6bca0e4a-703c-4fff-8e70-f026f015fee5.pdf",
      source: "3Q24",
    },
    {
      title: "Barclays Press Release",
      url: "",
      source: "KB",
    },
    {
      title: "Barclays Earning Supplement",
      url: "",
      source: "KB",
    },
  ];

  useEffect(() => {
    const completeSteps = async () => {
      if (!query) return;

      // Step 1: Information Gathering
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSteps((prev) => prev.map((step, index) => (index === 0 ? { ...step, completed: true } : step)));
      setShowSources(true);

      // Step 2: Analysis
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSteps((prev) => prev.map((step, index) => (index === 1 ? { ...step, completed: true } : step)));

      // Step 3: Response Generation
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSteps((prev) => prev.map((step, index) => (index === 2 ? { ...step, completed: true } : step)));
      setShowAnswer(true);
    };

    completeSteps();
  }, [query]);

  const isAnalyzing = steps[1].completed === false || steps[2].completed === false;
  const showAnswerComponent = steps[0].completed;

  return (
    <div className="min-h-screen bg-black text-white searchpage-container">
      <Header />

      <main className="container mx-auto px-4 pt-24 pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="mt-8 space-y-8">
            <AnalysisSteps steps={steps} />

            {showSources && (
              <div className="animate-fade-in">
                <SearchSources sources={sources} />
              </div>
            )}

            {showAnswerComponent && (
              <div className="animate-fade-in">
                <Card className="bg-[#141414] border-[#333333] p-6">
                  {/* <h2 className="text-xl font-semibold mb-4 text-white">Answer</h2> */}
                  {isAnalyzing ? (
                    <div className="space-y-3">
                      <Skeleton className="h-4 w-full bg-[#333333]" />
                      <Skeleton className="h-4 w-3/4 bg-[#333333]" />
                      <Skeleton className="h-4 w-5/6 bg-[#333333]" />
                    </div>
                  ) : (
                    <div className="prose prose-invert max-w-none" id="answer">
                      <h2>Strategic Growth and Resilience: Insights from Bank of America and JPMorgan Chase</h2>
                      <p className="text-secondary">
                        From the commentary provided by the CEOs of Bank of America and JPMorgan Chase, it is evident
                        that both banks have demonstrated strong financial performance and strategic growth in key
                        areas. Bank of America has experienced a robust quarter, driven by its strong Consumer Banking
                        business and complemented by growth in its Global Markets, Global Banking, and Wealth Management
                        divisions. The Global Markets business has achieved its ninth consecutive quarter of
                        year-over-year revenue growth in sales and trading, delivering double-digit returns. This
                        indicates a consistent and strategic focus on expanding market share and enhancing profitability
                        in key banking sectors. The investments made by Bank of America in these areas are yielding
                        positive results for shareholders, showcasing the bank's ability to leverage its resources
                        effectively to drive growth and deliver value.
                      </p>

                      <p className="text-secondary">
                        JPMorgan Chase, on the other hand, reported a net income of $13.4 billion in the first quarter,
                        with a high CET1 capital ratio of 15.0%, providing flexibility to reinvest for growth while
                        maintaining a robust capital-return profile. Despite a 4% sequential decline in Net Interest
                        Income, the bank's lines of business demonstrated strong underlying performance. The Consumer &
                        Community Banking division saw a 25% increase in client investment assets, while the Corporate &
                        Investment Bank experienced a 21% rise in Investment Banking fees. The Commercial Banking
                        division reported strong growth in Payments fees, and the Asset & Wealth Management division saw
                        a 14% increase in asset management fees with continued strong net inflows.
                      </p>

                      <p className="text-secondary">
                        Both banks are navigating economic uncertainties, including geopolitical tensions, persistent
                        inflationary pressures, and the effects of quantitative tightening, with a focus on supporting
                        their clients and delivering shareholder value. The insights from the CEOs' commentaries
                        highlight the banks' commitment to growth, profitability, and their roles in supporting the
                        broader economy
                      </p>

                      <IconContainer />
                    </div>
                  )}
                </Card>
              </div>
            )}
          </div>
        </div>
      </main>

      <SearchResultsBar />
      {/* <Footer /> */}
    </div>
  );
};

export default SearchResults;
