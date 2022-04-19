import * as React from 'react';

import { Button, ClickAwayListener, Grow, Paper, Popper, MenuItem, MenuList, Stack } from '@mui/material';

export default function MenuListComposition() {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
        } else if (event.key === 'Escape') {
        setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <Stack direction="row" spacing={2}>
            <div>
                <Button
                ref={anchorRef}
                id="composition-button"
                aria-controls={open ? 'composition-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                variant="outlined"
                >
                menu
                </Button>
                <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
                >
                {({ TransitionProps, placement }) => (
                    <Grow
                    {...TransitionProps}
                    style={{
                        transformOrigin:
                        placement === 'bottom-start' ? 'left top' : 'left bottom',
                    }}
                    >
                    <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                            autoFocusItem={open}
                            id="composition-menu"
                            aria-labelledby="composition-button"
                            onKeyDown={handleListKeyDown}
                        >
                            <MenuItem onClick={(e) => {window.location.href = '/about'; handleClose(e);}}>Wow</MenuItem>
                            <MenuItem onClick={handleClose}>Such Cool</MenuItem>
                            <MenuItem onClick={handleClose}>Dropdown</MenuItem>
                        </MenuList>
                        </ClickAwayListener>
                    </Paper>
                    </Grow>
                )}
                </Popper>
            </div>
        </Stack>
    );
}
