import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import BarChart from "../charts/BarChart";
import StateSocieties from "../charts/StateSocieties";
import { PieChart } from "../charts/PieChart";

function Tile({ title, content }) {
  return (
    <Box
      sx={{
        boxShadow: 5,
        width: "100%",
        padding: 3,
        backgroundColor: "#ffffff",
        borderRadius: 5,
      }}
    >
      <Stack direction={"row"} gap={2} alignItems="center">
        <div
          style={{
            width: "30px",
            height: "30px",
            backgroundColor: "#ff5757",
            borderRadius: "50%",
          }}
        />
        <Stack direction={"column"}>
          <Typography variant="subtitle1">{title}</Typography>
          <Typography variant="h6">{content}</Typography>
        </Stack>
      </Stack>
    </Box>
  );
}

const Dashboard = () => {
  const tiles = [
    {
      title: "Total Reg. Societies",
      content: "100",
      
    },
    {
      title: "Total Sectors",
      content: "13",
    },
    {
      title: "Latest Reg. Sector",
      content: "Agro",
    },
    {
      title: "Latest Registration",
      content: "31-08-2022",
    },
  ];

  return (
    <Container
      disableGutters
      maxWidth="xl"
      sx={{
        backgroundColor: "#f3f7f9",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <Typography variant="h4" sx={{ textAlign: "center", mb: 4, color: "#354052" }}>
        Dashboard
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {tiles.map((item, idx) => (
          <Grid item key={idx} xs={12} sm={6} md={3}>
            <Tile title={item.title} content={item.content} />
          </Grid>
        ))}
      </Grid>
      <Stack direction="row" gap={3} width="100%" justifyContent="center" mt={4} sx={{
        '@media (max-width: 700px)':{
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%'
        }
      }} >
        <Box width="50%" sx={{ backgroundColor: "#ffffff", borderRadius: 8, padding: 3, '@media (max-width: 700px)':{
          width: '100%',
          justifyContent: 'center'
        } }}>
          <BarChart />
        </Box>
        <Box width="50%" sx={{ backgroundColor: "#ffffff", borderRadius: 8, padding: 3, '@media (max-width: 700px)':{
          width: '100%',
          justifyContent: 'center'
        } }}>
          <PieChart />
        </Box>
      </Stack>
      <Box width="100%" mt={4} sx={{ backgroundColor: "#ffffff", borderRadius: 8, padding: 3 }}>
        <StateSocieties />
      </Box>
    </Container>
  );
};

export default Dashboard;
