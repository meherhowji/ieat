import { ArrowRightOutlined } from "@ant-design/icons";
import { Card, Typography, Image } from "antd";
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;

interface HighlightCardProps {
  title: string;
  description: string;
  link: string;
  className?: string;
  logo?: string;
}

export const HighlightCard = ({ title, description, link, className = "", logo }: HighlightCardProps) => {
  return (
    <Link to={link} className={`block ${className}`}>
      <Card
        hoverable
        style={{
          background: "#141414",
          borderColor: "#1f1d2b",
          borderWidth: "2px",
          borderRadius: "10px",
        }}
        className="h-full transition-all duration-300 hover:translate-y-[-2px]"
      >
        <Image src={logo} width={28} preview={false} className="mb-2" />
        <Title level={4} style={{ color: "#fff", marginBottom: "8px" }} className="manrope-600">
          {title}
        </Title>
        <Paragraph style={{ color: "rgba(255, 255, 255, 0.65)", marginBottom: "24px" }} className="manrope-400">
          {description}
        </Paragraph>
        <div className="flex items-center text-blue-400">
          <span className="mr-2 font-medium manrope-400">Learn more</span>
          <ArrowRightOutlined />
        </div>
      </Card>
    </Link>
  );
};
