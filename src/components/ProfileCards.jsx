import React from "react";

const Card = ({ name, age, sex, profession }) => {
    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Sex: {sex}</p>
            <p>Profession: {profession}</p>
        </div>
    );
};

const cards = [
    { name: "John Doe", age: 25, sex: "Male", profession: "Engineer" },
    { name: "Jane Smith", age: 30, sex: "Female", profession: "Designer" },
    { name: "Mike Johnson", age: 35, sex: "Male", profession: "Developer" }
];

const CardsList = () => {
    return (
        <div>
            {cards.map((card, index) => (
                <Card key={index} {...card} />
            ))}
        </div>
    );
};
const ProfileCards = () => {
    return (
        <div>
            <h1>Profile Cards</h1>
            <CardsList />
        </div>
    );
};

export default ProfileCards;
