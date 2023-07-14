'use client';

import { TItemType } from '@/lib/menu-items';
import { MenuItems } from '@/lib/menu-items'

import { Collapse, Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useRouter, useSelectedLayoutSegments } from 'next/navigation';

const drawerWidth = 240;

export function Navbar() {

    return <Drawer
        sx={{
            backgroundColor: '#f5f5f5',
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
            }
        }}
        variant="permanent"
        anchor="left"
    >
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            {MenuItems.map((item: TItemType, index) => {
                return <DrawerMenuItem key={index} item={item} />
            })}
        </List>
    </Drawer >

}

const DrawerMenuItem = ({ item, indent }:
    { item: TItemType, indent?: boolean }) => {
    const [open, setOpen] = useState<boolean>(false);
    const router = useRouter();
    const segment = useSelectedLayoutSegments();

    const handleClick = () => {
        if (item.path)
            router.replace(item.path);
    };

    const collapseToggle = () => {
        setOpen(!open);
    }

    const isActive = '/' + segment?.join('/') === item.path;


    if (item.items) {
        return <><ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary={item.name} onClick={collapseToggle} />
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {item.items.map((subitem: TItemType, index) => {
                        return <DrawerMenuItem key={index} item={subitem} indent />
                    })}
                </List>
            </Collapse>
        </>
    }
    else {
        return <ListItemButton selected={isActive} sx={{ pl: indent ? 6 : 4 }} onClick={handleClick}>
            <ListItemText primary={item.name} />
        </ListItemButton>

    }
}

