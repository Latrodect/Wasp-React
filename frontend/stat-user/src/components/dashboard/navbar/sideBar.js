import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { ListSubheader, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import WaspLogo from "../../../assets/images/wasp.png";
import Copyright from "../../sign/signInCopyright";
import StaticMenu from "./staticMenuList";
import TopBar from "./topBar";

const drawerWidth = 300;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => ({
    "& .MuiDrawer-paper": {
        position: "relative",
        whiteSpace: "nowrap",
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: "border-box",
        ...(!open && {
            overflowX: "hidden",
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up("sm")]: {
                width: theme.spacing(9),
            },
        }),
    },
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SideBar({ children }) {
    const [open, setOpen] = React.useState(true);

    return (
        <ThemeProvider theme={defaultTheme}>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <TopBar open={open} />
                <Drawer variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            px: [1],
                        }}
                    >
                        <Stack direction="row" justifyContent="space-between" spacing={2} sx={{ width: "100%" }}>
                            <Stack direction="row" alignItems="center" spacing={2} sx={{ ...(!open && { display: "none" }) }}>
                                <img src={WaspLogo} alt="Logo" style={{ width: "40px" }} />
                                <Typography>WASP</Typography>
                            </Stack>
                            <ChevronLeftIcon
                                onClick={() => setOpen(!open)}
                                sx={{
                                    cursor: "pointer",
                                    ...(!open && { display: "none" }),
                                }}
                            />
                        </Stack>

                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={() => setOpen(!open)}
                            sx={{
                                ...(open && { display: "none" }),
                            }}
                        >
                            <img src={WaspLogo} alt="Logo" style={{ width: "40px" }} />
                            <ChevronRightIcon
                                onClick={() => setOpen(!open)}
                                sx={{
                                    ...(open && { display: "none" }),
                                    position: "absolute",
                                    marginLeft: "60px !important",
                                }}
                            />
                        </IconButton>
                    </Toolbar>
                    <List component="nav" sx={{ height: "91vh" }}>
                        <ListSubheader
                            sx={{
                                textAlign: "right",
                                ...(!open && { display: "none" }),
                            }}
                        >
                            Wasp Dashboard
                        </ListSubheader>
                        <StaticMenu open={open} />
                    </List>

                    <div style={{ marginBottom: "5px" }}>
                        <Copyright />
                    </div>
                </Drawer>
                {children}
            </Box>
        </ThemeProvider>
    );
}
