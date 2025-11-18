import { Typography } from "@mui/material";

export default function WaitingMsj({waitMsj}) {
    return (
        <Typography
            color="var(--bs-font-color)"
            sx={{ fontSize: '20px', mb: 2 }}
        >
            {waitMsj}
        </Typography>
    )
}