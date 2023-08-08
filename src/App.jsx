import "./css/App.css";
import { motion, stagger } from "framer-motion";

const data = {
    name: "Victor Crest",
    avatar: "/image-victor.jpg",
    age: 26,
    location: "London",
    social: {
        followers: 80_000,
        likes: 803_000,
        photos: 1_400,
    },
};

function App() {
    return (
        <div className="app">
            <Card data={data} />
        </div>
    );
}

function Card({ data }) {
    return (
        <motion.div className={"card"} initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            <CardDetails avatar={data.avatar} name={data.name} age={data.age} location={data.location} />
            <CardSocialList social={data.social} />
        </motion.div>
    );
}

function CardDetails({ avatar, name, age, location }) {
    return (
        <div className={"card-details"}>
            <motion.img className="avatar" src={avatar} alt={name} initial={{ scale: 0 }} animate={{ scale: 1 }} />
            <div className={"name-age"}>
                <h1 className="name">{name}</h1>
                <h4 className="age">{age}</h4>
            </div>
            <h3 className="location">{location}</h3>
        </div>
    );
}

function CardSocialList({ social }) {
    const socialMap = new Map(Object.entries(social));

    const renderedSocial = [];
    socialMap.forEach((value, key) => {
        renderedSocial.push(
            <motion.li key={key} className="stats" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <p className="stat-value">{numFormat(value)}</p>
                <h2 className="stat-title">{key}</h2>
            </motion.li>
        );
    });
    return <motion.ul className="card-social">{renderedSocial}</motion.ul>;
}

function numFormat(num) {
    if (num < 1000) {
        return num;
    } else if (num < 10_000) {
        return (num / 1000).toFixed(1) + "K";
    } else {
        return Math.floor(num / 1000) + "K";
    }
}

export default App;
