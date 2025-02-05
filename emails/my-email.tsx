import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "http://localhost:3000";

// Define the types for the props
interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  projectDetails: string;
  budget: string;
  deadline: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  email,
  phone,
  projectDetails,
  budget,
  deadline,
}) => (
  <Html>
    <Head />
    <Preview>New Project Inquiry from {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${baseUrl}/logo.svg`}
          width="170"
          height="50"
          alt="Portfolio Website"
          style={logo}
        />
        <Text style={paragraph}>Hi {name},</Text>
        <Text style={paragraph}>
          Thank you for reaching out! Below are the details of your inquiry:
        </Text>
        <Text style={paragraph}>
          <strong>Name:</strong> {name} <br />
          <strong>Email:</strong> {email} <br />
          <strong>phone:</strong> {phone} <br />
          <strong>Project Details:</strong> {projectDetails} <br />
          <strong>Budget:</strong> {budget} <br />
          <strong>Deadline:</strong> {deadline} <br />
        </Text>
        <Section style={btnContainer}>
          <Button
            style={button}
            href={`${baseUrl}/contact`} // Replace with the actual link
          >
            View Inquiry Details
          </Button>
        </Section>
        <Text style={paragraph}>
          Best regards, <br />
          Ritu Raj
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          Your Portfolio Website | Connect with me for your projects
        </Text>
      </Container>
    </Body>
  </Html>
);

export default EmailTemplate;

const main: React.CSSProperties = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container: React.CSSProperties = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo: React.CSSProperties = {
  margin: "0 auto",
};

const paragraph: React.CSSProperties = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer: React.CSSProperties = {
  textAlign: "center",
};

const button: React.CSSProperties = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  padding: "12px",
};

const hr: React.CSSProperties = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer: React.CSSProperties = {
  color: "#8898aa",
  fontSize: "12px",
};
