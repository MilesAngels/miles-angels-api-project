import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import StarIcon from '@mui/icons-material/Star';
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function NewFetch() {
    const [item, setItem] = useState([]);
    const mediaType = "image";

    async function getAstronomy() {
        const url = "https://api.nasa.gov/";
        const API_KEY = import.meta.env.VITE_API_KEY;

        try {
            const response = await fetch(`${url}planetary/apod?api_key=${API_KEY}`);
            const result = await response.json();
            setItem(result);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getAstronomy();
    }, []);

    return (
        <Card variant="outlined" className="apod">
            {mediaType === item.media_type ? (
                <CardMedia
                    component="img"
                    image={`${item.hdurl}`}
                    alt={`${item.title}`}
                ></CardMedia>
            ) : (
                <video autoPlay loop muted>
                    <source src={item.url} type="video/mp4" />
                </video>
            )}

            <CardContent>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography>{item.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>

                        <Typography variant="body2" color="text.secondary">
                            {item.explanation}

                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </CardContent>
            <IconButton className="favoriteBtn" aria-label="add to favorites">
                <StarIcon className="favoriteIcon"/>
            </IconButton>
        </Card>
    );
}