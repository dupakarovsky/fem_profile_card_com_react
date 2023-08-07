import "./css/App.css";

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
    return <Card data={data} />;
}

function Card({ data }) {
    return (
        <div className={"card"}>
            <CardDetails avatar={data.avatar} name={data.name} age={data.age} location={data.location} />
            <CardSocialList social={data.social} />
        </div>
    );
}

function CardDetails({ avatar, name, age, location }) {
    return (
        <div className={"card-details"}>
            <img className="avatar" src={avatar} alt={name} />
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
            <div key={key} className="stats">
                <p className="stat-value">{numFormat(value)}</p>
                <h2 className="stat-title">{key}</h2>
            </div>
        );
    });
    return <div className="card-social">{renderedSocial}</div>;
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
