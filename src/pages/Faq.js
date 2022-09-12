import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function Faq() {
  return (
    <Box
      sx={{
        backgroundColor: "#b3c2d5",
      }}
    >
      <Divider />
      <Typography marginBottom={2}>
        <h2>FAQ</h2>
      </Typography>

      <Accordion
        sx={{
          marginTop: 2,
          maxWidth: 750,
          mx: "auto",
          backgroundColor: "#e3ecf6",
        }}
      >
        <AccordionSummary expandIcon={<expandIcon />}>
          <Typography>
            How much will it cost to mint a World Cup SolStar?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our original SolStars were raffled off between 0.5 - 5 Solana.
            Despite the value of Solana being over $100 when we originally
            minted, we will honour this price range in order for all to benefit.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          maxWidth: 750,
          mx: "auto",
          backgroundColor: "#b3c2d5",
        }}
      >
        <AccordionSummary expandIcon={<expandIcon />}>
          <Typography>How can I be whitelisted?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>There are several ways to acquire a WL: </Typography>
          <Typography>1) Enter our giveaways on Discord and Twitter</Typography>
          <Typography>
            2) Being active on Discord/Twitter and contributing to our community{" "}
          </Typography>
          <Typography>3) Creating a unique fan art</Typography>
          <Typography>
            4) Raiding our tweets and posting proof in our discord
          </Typography>
          <Typography>5) Adding value to our Twitter Spaces</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          maxWidth: 750,
          mx: "auto",
          backgroundColor: "#e3ecf6",
        }}
      >
        <AccordionSummary expandIcon={<expandIcon />}>
          <Typography>
            How much will it cost to mint a World Cup SolStar?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our original SolStars were raffled off between 0.5 - 5 Solana.
            Despite the value of Solana being over $100 when we originally
            minted, we will honour this price range in order for all to benefit.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          maxWidth: 750,
          mx: "auto",
          backgroundColor: "#b3c2d5",
        }}
      >
        <AccordionSummary expandIcon={<expandIcon />}>
          <Typography>How can I be whitelisted?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>There are several ways to acquire a WL: </Typography>
          <Typography>1) Enter our giveaways on Discord and Twitter</Typography>
          <Typography>
            2) Being active on Discord/Twitter and contributing to our community{" "}
          </Typography>
          <Typography>3) Creating a unique fan art</Typography>
          <Typography>
            4) Raiding our tweets and posting proof in our discord
          </Typography>
          <Typography>5) Adding value to our Twitter Spaces</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          maxWidth: 750,
          mx: "auto",
          backgroundColor: "#e3ecf6",
        }}
      >
        <AccordionSummary expandIcon={<expandIcon />}>
          <Typography>
            How much will it cost to mint a World Cup SolStar?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our original SolStars were raffled off between 0.5 - 5 Solana.
            Despite the value of Solana being over $100 when we originally
            minted, we will honour this price range in order for all to benefit.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
