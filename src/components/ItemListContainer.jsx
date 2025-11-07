import { useState } from "react";
import {
    Box,
    List,
    ListItemButton,
    ListItemText,
    Typography,
    Divider,
    IconButton,
    useMediaQuery
} from '@mui/material';

import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

import categories from "../db/categories.json"



function SidebarFilter() {
    const isMobile = useMediaQuery('(max-width:600px)');
    const [collapsed, setCollapsed] = useState(isMobile); // collapsed by default on mobile

    const toggleSidebar = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <Box
            sx={{
                position: 'sticky',
                top: 0,
                height: '80vh', // ← adjustable height
                width: collapsed ? 60 : 240,
                bgcolor: '#121212',
                color: '#fff',
                borderRight: '1px solid #333',
                transition: 'width 0.3s ease',
                overflow: 'hidden',
                zIndex: 1000,
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', p: 1 }}>
                <Typography variant="h6" sx={{ flexGrow: 1, display: collapsed ? 'none' : 'block' }}>
                    Categories
                </Typography>
                <IconButton onClick={toggleSidebar} sx={{ color: '#fff' }}>
                    {collapsed ? <KeyboardDoubleArrowRightIcon /> : <KeyboardDoubleArrowLeftIcon />}
                </IconButton>
            </Box>

            <Divider sx={{ mb: 1, display: collapsed ? 'none' : 'block' }} />

            <List sx={{ overflowY: 'auto', maxHeight: 'calc(80vh - 60px)' }}>
                {categories.map((cat) => (
                    <ListItemButton
                        key={cat.id}
                        onClick={() => console.log(`Filter by ${cat.name}`)}
                        sx={{ justifyContent: collapsed ? 'center' : 'flex-start' }}
                    >
                        <ListItemText
                            primary={cat.name}
                            sx={{ display: collapsed ? 'none' : 'block' }}
                        />
                    </ListItemButton>
                ))}
            </List>
        </Box>
    );
}


export default function ItemListContainer({ waitMsj }) {
    const [products, setProducts] = useState([]);

    return (
        <>
            {products.length > 0
                ? ("")
                : (

                    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
                        <SidebarFilter />
                        <Box
                            sx={{
                                flexGrow: 1,
                                p: 3,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                            }}
                        >
                            <Typography
                                color="var(--bs-font-color)"
                                sx={{ fontSize: '20px', mb: 2 }}
                            >
                                {waitMsj}
                            </Typography>
                        </Box>
                    </Box>

                )
            }
        </>
    )
}   