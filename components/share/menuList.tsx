import {
	// Button, 
	ClickAwayListener,
	Grow,
	MenuItem,
	MenuList,
	Paper,
	Popper,
	Stack,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";

import { MenuButton } from "../styled-mui";

import MenuIcon from "@mui/icons-material/Menu";

import menuItems from "./menuItems.json";


// don't forget to make this into the json version of menulist

export default function MenuListComposition() {
	const [open, setOpen] = useState(false);
	const anchorRef = useRef<HTMLButtonElement>(null);

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = () => {
		// if (anchorRef.current) {
		// 	return;
		// }

		setOpen(false);
	};

	function handleListKeyDown<T extends HTMLElement>(
		event: React.KeyboardEvent<T>
	) {
		if (event.key === "Tab") {
			event.preventDefault();
			setOpen(false);
		} else if (event.key === "Escape") {
			setOpen(false);
		}
	}

	// return focus to the button when we transitioned from !open -> open
	const [prevOpen, setPrevOpen] = useState(open);
	useEffect(() => {
		if (prevOpen === true && open === false) {
			anchorRef.current.focus();
		}

		setPrevOpen(open);
	}, [open, prevOpen]);

	return (
		<Stack direction='row' spacing={2}>
			<div>
				<MenuButton
					ref={anchorRef}
					id='composition-button'
					aria-controls={open ? "composition-menu" : undefined}
					aria-expanded={open ? "true" : undefined}
					aria-haspopup='true'
					onClick={handleToggle}
				>
					<MenuIcon />
				</MenuButton>
				<Popper
					open={open}
					anchorEl={anchorRef.current}
					role={undefined}
					placement='bottom-start'
					transition
					disablePortal
				>
					{({ TransitionProps, placement }) => (
						<Grow
							{...TransitionProps}
							style={{
								transformOrigin:
									placement === "bottom-start" ? "left top" : "left bottom",
							}}
						>
							<Paper>
								<ClickAwayListener onClickAway={handleClose}>
									<MenuList
										autoFocusItem={open}
										id='composition-menu'
										aria-labelledby='composition-button'
										onKeyDown={handleListKeyDown}
									>
										<MenuItem
											onClick={(e) => {
												// window.location.href = "/about";
												handleClose();
											}}
										>This Menu Exists For Fun</MenuItem>
										{menuItems.map((item) => (
											<MenuItem
												key={item.title}
												onClick={(e) => {
													window.location.href = item.url;
													handleClose();
												}}
											>
												{item.title}
											</MenuItem>
										))}
									
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
