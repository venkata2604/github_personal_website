
"use client";
import { Box, Avatar, Typography, Paper, Stack, Chip, Button } from "@mui/material";
import { LinkedIn, Email, GitHub } from "@mui/icons-material";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const chartOptions = {
  title: { text: "Sample Data Engineering Activity" },
  series: [
    {
      type: "line",
      name: "Pipelines Built",
      data: [2, 5, 7, 10, 12, 15, 20],
    },
  ],
  xAxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"] },
};

export default function Home() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", bgcolor: "#f5f7fa" }}>
      <Paper elevation={4} sx={{ p: 5, borderRadius: 4, maxWidth: 500, width: "100%" }}>
        <Stack spacing={3} alignItems="center">
          <Avatar sx={{ width: 96, height: 96, bgcolor: "primary.main", fontSize: 40 }}>
            VS
          </Avatar>
          <Typography variant="h4" fontWeight={700} align="center">
            Venkata Sai Kumar Reddy
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" align="center">
            Full Stack Developer & Data Engineering Enthusiast
          </Typography>
          <Stack direction="row" spacing={1}>
            <Chip label="React" color="primary" />
            <Chip label="TypeScript" color="secondary" />
            <Chip label="Data Engineering" color="success" />
            <Chip label="Next.js" color="info" />
          </Stack>
          <Typography align="center">
            Passionate about building scalable data pipelines, cloud-native apps, and modern web experiences.<br />
            <b>Location:</b> Hyderabad, India<br />
            <b>Experience:</b> 5+ years<br />
            <b>Interests:</b> Big Data, Cloud, Visualization, Open Source
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button startIcon={<LinkedIn />} href="https://linkedin.com/in/venkata2604" target="_blank" variant="outlined">
              LinkedIn
            </Button>
            <Button startIcon={<GitHub />} href="https://github.com/venkata2604" target="_blank" variant="outlined">
              GitHub
            </Button>
            <Button startIcon={<Email />} href="mailto:venkata.aavula@gmail.com" variant="outlined">
              Email
            </Button>
          </Stack>
          <Box width="100%" mt={2}>
            <HighchartsReact highcharts={Highcharts} options={chartOptions} />
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
}
