import { Card, Tag, Space, Typography } from "antd";
import type {News} from "@/entities/news";
import {DislikeOutlined, LikeOutlined } from "@ant-design/icons";

const { Text, Title, Paragraph } = Typography;

const NewsCard = (props: News) => {
  const { title, body, tags, reactions } = props;

  return (
    <Card>
      <Title level={3}>{title}</Title>

      <Paragraph>{body}</Paragraph>

      <Space>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
        <Text type="secondary"><LikeOutlined /> {reactions.likes}</Text>
        <Text type="secondary"><DislikeOutlined /> {reactions.likes}</Text>
      </Space>
    </Card>
  );
};

export default NewsCard;
