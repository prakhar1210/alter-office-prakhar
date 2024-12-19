import React from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const FloatingButton = () => {
    return (
        <Fab
            color="primary"
            aria-label="add"
            sx={{
                position: "fixed",
                bottom: "16px",
                right: "16px",
                zIndex: 1000,
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                backgroundColor: 'red',
            }}
            onClick={() => console.log("Button Clicked")}
        >
            <AddIcon />
        </Fab>
    );
};

export default FloatingButton;
