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
      title: "Apple agrees to pay $95 million to settle lawsuit",
      url: "https://example.com/article1",
      source: "timesofindia.indiatimes.com",
      icon: "/path-to-icon.png",
    },
    {
      title: "Apple to pay $95 million in Siri privacy settlement",
      url: "https://example.com/article2",
      source: "apnews.com",
      icon: "/path-to-icon.png",
    },
    {
      title: "Is Siri secretly listening to you?",
      url: "https://example.com/article3",
      source: "indianexpress.com",
      icon: "/path-to-icon.png",
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
                      <h2>Apple Settles Siri Privacy Lawsuit for $95 Million</h2>
                      <p className="text-secondary">
                        In a significant development for privacy advocates and consumers alike, Apple has agreed to
                        settle a class-action lawsuit for $95 million. The lawsuit alleged that Apple had been recording
                        conversations through its Siri voice assistant without the consent of its users, a claim that
                        raised serious privacy concerns and questioned the ethical implications of such actions by major
                        tech companies.
                      </p>

                      <h3>Overview of the Lawsuit</h3>
                      <p className="text-secondary">
                        The settlement comes after claims surfaced that Apple's Siri, the popular voice-activated
                        assistant found in a range of Apple devices, was recording and analyzing user conversations
                        without explicit permission. This practice, purportedly aimed at improving the service's
                        accuracy and responsiveness, was deemed a breach of user privacy, sparking widespread critique
                        and leading to legal action.
                      </p>

                      <h3>Key Details of the Settlement</h3>
                      <p className="text-secondary">
                        The lawsuit covers any Siri-enabled device owned between September 17, 2014, and December 31,
                        2024. This broad timeframe includes millions of devices worldwide, from iPhones and iPads to
                        Macs and Apple Watches, all equipped with Siri capabilities. The settlement aims to compensate
                        users for the perceived intrusion into their personal conversations and the potential misuse of
                        their private data.
                      </p>

                      <h3>Compensation for Affected Users</h3>
                      <p className="text-secondary">
                        Under the terms of the settlement, affected users are entitled to compensation, which could
                        amount to up to $20 per device. This compensation is applicable for a maximum of five devices
                        per claimant, allowing individuals who own multiple Apple products to claim a more significant
                        sum. The process for claiming this compensation will likely be outlined on a dedicated
                        settlement website where users can submit claims and learn more about their eligibility and the
                        necessary steps to take.
                      </p>

                      <h3>Broader Implications</h3>
                      <p className="text-secondary">
                        This settlement is a reminder of the ongoing challenges and responsibilities that technology
                        companies face regarding user privacy. It underscores the need for stringent privacy protections
                        and the importance of securing user consent for data collection practices, especially as
                        voice-activated technologies become increasingly integrated into everyday devices.
                      </p>
                      <p className="text-secondary">
                        The resolution of this lawsuit might prompt other companies to reevaluate their data collection
                        methodologies to avoid similar legal challenges. Furthermore, it sets a precedent that could
                        influence future legislation and regulation in the tech industry, particularly concerning how
                        companies handle voice data and user interactions with intelligent assistants.
                      </p>

                      <h3>Conclusion</h3>
                      <p className="text-secondary">
                        For Apple, this settlement represents both a closure of the contentious issue and a significant
                        financial outlay. For the tech industry at large, it serves as a cautionary tale about the
                        balance between enhancing technological capabilities and respecting user privacy. Users affected
                        by this issue are encouraged to stay informed about the settlement and claim procedures to
                        ensure they receive the compensation they are owed.
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
