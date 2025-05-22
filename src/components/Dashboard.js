import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Card,
  CardContent,
} from '@mui/material';
import {
  Chat as ChatIcon,
  Assessment as AssessmentIcon,
  People as PeopleIcon,
  Timer as TimerIcon,
} from '@mui/icons-material';

const Dashboard = () => {
  const { t } = useTranslation();

  const stats = [
    {
      title: 'Active Chats',
      value: '12',
      icon: <ChatIcon fontSize="large" color="primary" />,
    },
    {
      title: 'Customer Satisfaction',
      value: '94%',
      icon: <PeopleIcon fontSize="large" color="primary" />,
    },
    {
      title: 'Avg Response Time',
      value: '2m',
      icon: <TimerIcon fontSize="large" color="primary" />,
    },
    {
      title: 'Total Conversations',
      value: '1,234',
      icon: <AssessmentIcon fontSize="large" color="primary" />,
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        {t('dashboard')}
      </Typography>
      
      <Grid container spacing={3}>
        {stats.map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.title}>
            <Card>
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box>
                    <Typography color="textSecondary" gutterBottom>
                      {stat.title}
                    </Typography>
                    <Typography variant="h5" component="div">
                      {stat.value}
                    </Typography>
                  </Box>
                  {stat.icon}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3} sx={{ mt: 4 }}>
        <Grid item xs={12} md={8}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Recent Activity
            </Typography>
            {/* Add activity chart or list here */}
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Sentiment Analysis
            </Typography>
            {/* Add sentiment analysis chart here */}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
