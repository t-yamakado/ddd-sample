import React from 'react';
import { Box, Button, Container, Typography, IconButton, InputBase, Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Search, Close, ArrowLeft, ArrowRight } from '@mui/icons-material';
import { SideMenuContainer } from './components/side-menu/side-menu.container';

export const App: React.FC = () => {
  return (
    <Container maxWidth="xl" sx={{ minHeight: '100vh', backgroundColor: 'rgba(241, 245, 249, 1)', fontFamily: 'Inter, Noto Sans, sans-serif' }}>
      <Grid container justifyContent="center" spacing={2} sx={{ height: '100%' }}>
        <Grid size={{xs: 12, md: 3}}>
          <SideMenuContainer />
        </Grid>
        <Grid size={{xs: 12, md: 9}}>
          <Box p={2}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
              <Typography variant="h4">All Issues</Typography>
              <Button variant="contained" sx={{ backgroundColor: '#e7edf3', color: '#0e141b' }}>Settings</Button>
            </Box>
            <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', mb: 2, backgroundColor: '#e7edf3' }}>
              <IconButton sx={{ p: '10px' }}>
                <Search />
              </IconButton>
              <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search all issues" />
              <IconButton sx={{ p: '10px' }}>
                <Close />
              </IconButton>
            </Paper>
            <Grid container spacing={2}>
              <Grid>
                <Button sx={{ backgroundColor: '#e7edf3', px: 3 }}>All issues</Button>
              </Grid>
              <Grid>
                <Button sx={{ backgroundColor: '#e7edf3', px: 3 }}>Open</Button>
              </Grid>
              <Grid>
                <Button sx={{ backgroundColor: '#e7edf3', px: 3 }}>Closed</Button>
              </Grid>
              <Grid>
                <Button sx={{ backgroundColor: '#e7edf3', px: 3 }}>Assigned to me</Button>
              </Grid>
              <Grid>
                <Button sx={{ backgroundColor: '#e7edf3', px: 3 }}>Reported by me</Button>
              </Grid>
              <Grid>
                <Button sx={{ backgroundColor: '#e7edf3', px: 3 }}>Created by me</Button>
              </Grid>
            </Grid>
            <Box mt={2}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Issue</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Priority</TableCell>
                    <TableCell>Created</TableCell>
                    <TableCell>Updated</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>#345 - Authentication Failure</TableCell>
                    <TableCell><Button sx={{ backgroundColor: '#e7edf3', width: '100%' }}>Open</Button></TableCell>
                    <TableCell><Button sx={{ backgroundColor: '#e7edf3', width: '100%' }}>High</Button></TableCell>
                    <TableCell>Jun 14, 2023</TableCell>
                    <TableCell>Jun 16, 2023</TableCell>
                  </TableRow>
                  {/* 他のテーブル行をここに追加 */}
                </TableBody>
              </Table>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
              <IconButton>
                <ArrowLeft />
              </IconButton>
              <Button>1</Button>
              <Button>2</Button>
              <Button>3</Button>
              <IconButton>
                <ArrowRight />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
