import React from 'react';
import { Box, Button, Typography, Avatar } from '@mui/material';
import { Inbox, GridView, Layers, Map, Star, Group, Folder } from '@mui/icons-material';
import { CreateModalContainer } from './create-modal/create-modal.container';

type SideMenuProps = {
  onOpen: () => void;
};

export const SideMenu: React.FC<SideMenuProps> = ({ onOpen }) => {
  return (
    <>
      <Box
        sx={{
          p: 4,
          backgroundColor: '#F8FAFC',
          borderRadius: 2,
          minHeight: '700px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Box display="flex" alignItems="center" mb={2}>
            <Avatar src="https://cdn.usegalileo.ai/sdxl10/d95cea0c-2957-448a-8f02-103cef67ce22.png" />
            <Typography variant="h6" ml={2} color="text.primary">
              Acme Co.
            </Typography>
          </Box>
          <Box>
            <Button
              startIcon={<Inbox />}
              sx={{ justifyContent: 'flex-start', backgroundColor: '#e7edf3', borderRadius: 2, mb: 2, px: 2 }}
            >
              Inbox
            </Button>
            <Button startIcon={<GridView />} sx={{ justifyContent: 'flex-start', mb: 2, px: 2 }}>
              My Issues
            </Button>
            <Button startIcon={<Layers />} sx={{ justifyContent: 'flex-start', mb: 2, px: 2 }}>
              Views
            </Button>
            <Button startIcon={<Map />} sx={{ justifyContent: 'flex-start', mb: 2, px: 2 }}>
              Roadmaps
            </Button>
          </Box>
        </Box>
        <Box>
          <Button onClick={onOpen} fullWidth variant="contained" color="primary" sx={{ borderRadius: 2, mb: 2 }}>
            New Issue
          </Button>
          <Box>
            <Button startIcon={<Star />} sx={{ justifyContent: 'flex-start', mb: 2, px: 2 }}>
              Favorites
            </Button>
            <Button startIcon={<Group />} sx={{ justifyContent: 'flex-start', mb: 2, px: 2 }}>
              Teams
            </Button>
            <Button startIcon={<Folder />} sx={{ justifyContent: 'flex-start', mb: 2, px: 2 }}>
              Projects
            </Button>
          </Box>
        </Box>
      </Box>
      <CreateModalContainer />
    </>
  );
};
