export default function Greeting() {
    const currentTime = new Date().toLocaleTimeString();
       
    return (
        <nav className="top-nav">
            <h1 className="greeting">Good Morning User!</h1>
            <p className="time">{currentTime}</p>
        </nav>
    )
}