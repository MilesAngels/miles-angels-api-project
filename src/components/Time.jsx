import Typography from "@mui/material/Typography";

export default function Time(props) {
  return (
    <Typography className="time">{props.date.toLocaleTimeString()}</Typography>
  );
}
