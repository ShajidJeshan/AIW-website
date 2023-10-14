import { useState } from "react";
import { Tab, Tabs, Typography, useTheme } from "@mui/material";
import CtaBg from "../src/components/layout/CtaBg";
import Footer from "../src/components/layout/Footer";
import Screenshot from "../src/components/products/Screenshot";
import UseCases from "../src/components/products/UseCases";
import ScrollAnimation from "react-animate-on-scroll";
import BuilderExperts from "../src/components/products/BuilderExperts";
import HighlightedText from "../src/components/layout/HighlightedText";

const useCases = {
  builder: [
    {
      icon: "revamp.svg",
      title: "Academy",
      text: "Learn and grow your skill set",
    },
    {
      icon: "automate.svg",
      title: "Automate processes",
      text: "Bid adieu to the daily repetitive tasks and harness the power of automation",
    },
    {
      icon: "digital_workforce.svg",
      title: "Test and deploy",
      text: "Reduce needless stages, reinvent, and respond to user demands more quickly",
    },
    {
      icon: "explore.svg",
      title: "Explore capabilities",
      text: "Fight the back to work blues with interesting and choicest opportunities to hone your skills as an expert",
    },
    {
      icon: "monetize.svg",
      title: "Monetize",
      text: "As allocated work advances, smart contracts enable bitcoin transactions with freelancers for secure, timely, and automatic payouts",
    },
  ],
  vision: [
    {
      icon: "explore.svg",
      title: "Distribute processes",
      text: "With comprehensible defined tasks and roles, getting work done just got easier and more graded. Every role is  distinctly allocated for smoother and timely deployment",
    },
    {
      icon: "view_live.svg",
      title: "View live",
      text: "No more blind spots, have access to a live view of all the processes as they take place",
    },
    {
      icon: "monitor.svg",
      title: "Monitor and manage",
      text: "Keep an eye on your distributed tasks, processes , and serverless operations. Assign, delete and control your workflow as you want",
    },
    {
      icon: "automate.svg",
      title: "Approve workflows",
      text: "Processes will not move forward until the champion or chief gives approval",
    },
    {
      icon: "monetize.svg",
      title: "Pay as you go",
      text: "Put an end to your price pricing woes by only paying for what you use. Our bot calculator calculates the total cost of the process in a precise manner.",
    },
  ],
};

const VisionCta = () => {
  const { palette } = useTheme();
  return (
    <ScrollAnimation animateIn="fadeIn">
      <Typography mb={10} variant="h3" lineHeight={2} color="white">
        <span style={{ color: palette.secondary.main, fontStyle: "italic" }}>
          Orchestrate
        </span>{" "}
        your processes <br />
        and elaborate your{" "}
        <HighlightedText color="secondary.main" invert={true}>
          Vision
        </HighlightedText>
      </Typography>
    </ScrollAnimation>
  );
};

const BuilderCta = () => (
  <ScrollAnimation animateIn="fadeIn">
    <Typography mb={10} variant="h3" lineHeight={2} color="white">
      Where{" "}
      <Typography component="span" color="secondary.main" variant="h3">
        business
      </Typography>
      <Typography component="span" variant="h3">
        {" "}
        connects with{" "}
      </Typography>
      <Typography component="span" color="secondary.main" variant="h3">
        expertise
      </Typography>
      <br /> and experts connect with{" "}
      <HighlightedText color="secondary.main" invert={true}>
        opportunity
      </HighlightedText>
    </Typography>
  </ScrollAnimation>
);

export default function ProductsPage() {
  const [tab, setTab] = useState("builder");

  const handleTabChange = (e, val) => setTab(val);
  return (
    <>
      <CtaBg>
        <Tabs
          onChange={handleTabChange}
          value={tab}
          TabIndicatorProps={{
            sx: {
              backgroundColor: "secondary.main",
            },
          }}
          sx={{
            my: 8,
            "& .MuiTab-root": {
              color: "white !important",
              typography: "h6",
            },
          }}
        >
          <Tab value={"builder"} label="AIW Builder" />
          <Tab value={"vision"} label="AIW Vision" />
        </Tabs>

        {tab === "builder" ? <BuilderCta /> : <VisionCta />}
      </CtaBg>
      <ScrollAnimation animateIn="fadeInUp">
        <Screenshot product={tab} />
      </ScrollAnimation>
      <UseCases useCases={useCases[tab]} product={tab} />
      {tab === "builder" && <BuilderExperts />}
      <Footer />
    </>
  );
}
