import { Html, Head, Preview, Section, Text, Container } from "@react-email/components";
import * as React from "react";

export default function JournalEntryEmail({
  title = "Untitled Entry",
  content = "No content.",
  mood = "Neutral",
  createdAt = new Date(),
}) {
  const dateStr = new Date(createdAt).toLocaleString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
    hour: "2-digit", minute: "2-digit"
  });

  return (
    <Html>
      <Head />
      <Preview>Your new journal entry has been saved!</Preview>
      <Container style={container}>
        <Section style={main}>
          <Text style={heading}>📓 New Entry: {title}</Text>
          <Text style={paragraph}><strong>Mood:</strong> {mood}</Text>
          <Text style={paragraph}><strong>Date:</strong> {dateStr}</Text>
          <Text style={paragraph}><strong>Content Preview:</strong></Text>
          <Text style={contentBox}>
            {content.length > 200 ? `${content.slice(0, 200)}...` : content}
          </Text>
          <Text style={footer}>💡 Tip: Reflect daily to track your growth.</Text>
        </Section>
      </Container>
    </Html>
  );
}

const container = {
  backgroundColor: "#f4f4f5",
  padding: "40px",
};

const main = {
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  padding: "30px",
  textAlign: "left",
};

const heading = {
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "15px",
};

const paragraph = {
  fontSize: "14px",
  marginBottom: "10px",
};

const contentBox = {
  background: "#f9fafb",
  padding: "15px",
  borderRadius: "4px",
  fontSize: "14px",
  fontStyle: "italic",
};

const footer = {
  fontSize: "12px",
  color: "#888888",
  marginTop: "25px",
};
