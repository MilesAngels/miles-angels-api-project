import { Typography } from "@mui/material";

export default function Greeting() {

    return (
        <nav className="top-nav">
            <Typography variant="h1" className="greeting">Good Morning User!</Typography>
            <Typography variant="subtitle1" className="advice">Being a realist can only get you so far in life. Be a little delusional and confident to make your dreams come true.</Typography>
        </nav>
    )
}