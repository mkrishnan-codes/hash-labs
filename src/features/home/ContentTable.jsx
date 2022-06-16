import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { ListItemButton } from '@mui/material';
import { Link } from 'react-router-dom';
const contents = [{ name: 'Brand Comparison', desc: 'A brand comparator', path: '/brandcompare', avatar: 'BC' },
{ name: 'Weather', desc: 'Weather display', path: '/weather', avatar: 'W' }]
export function ContentTable() {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {
                contents.map((content) => (
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                {content.avatar}
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemButton component={Link} to={content.path}>
                        <ListItemText primary={content.name} secondary={content.desc} />
                        </ListItemButton>
                    </ListItem>

                ))
            }
        </List>
    );
}
