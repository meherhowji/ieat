import { SearchOutlined } from "@ant-design/icons";
import { Input, Space, Tag, Image } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [recentSearches] = useState([
    "Build Story of the bank using CEO's opening statements",
    "Fluctuations in CIB (Corporate & Investment Banking) or IB (Investment Banking) performance metrics?",
    "Revenue composition changed compared to the last few quarters?",
    "What's happening with Barclays",
  ]);

  const handleSearch = (value: string) => {
    if (value.trim()) {
      navigate(`/search?q=${encodeURIComponent(value)}`, { replace: true });
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <Input.Search
        placeholder="Ask about economic insights..."
        allowClear
        enterButton
        size="large"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onSearch={handleSearch}
        style={{
          borderColor: "#333333",
        }}
      />

      {recentSearches.length > 0 && (
        <Space direction="vertical" size="small" className="w-full">
          {/* <div className="text-sm text-gray-400 manrope-600" style={{ color: "white" }}>
            Suggested Queries
          </div> */}
          <Space wrap>
            {recentSearches.map((search, index) => (
              <Tag
                key={index}
                onClick={() => setQuery(search)}
                className="manrope-400"
                style={{
                  background: "#151515cc",
                  borderColor: "#1f1d2b",
                  color: "rgba(255, 255, 255, 0.85)",
                  cursor: "pointer",
                  fontSize: "12px",
                  borderRadius: "10px",
                  paddingLeft: "12px",
                  paddingRight: "12px",
                  paddingTop: "2px",
                  paddingBottom: "2px",
                }}
              >
                {search}
              </Tag>
            ))}
          </Space>
        </Space>
      )}
    </div>
  );
};
