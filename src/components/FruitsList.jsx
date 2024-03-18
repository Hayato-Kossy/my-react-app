export const FruitsList = () => {
    const fruits = [
        { name: "Orange", calorie: 46, url: "https://cdn.pixabay.com/photo/2016/10/07/13/36/tangerines-1721590_1280.jpg" },
        { name: "Apple", calorie: 52, url: "https://cdn.pixabay.com/photo/2017/09/26/13/42/apple-2788662_1280.jpg" },
        { name: "Kiwi", calorie: 61, url: "https://cdn.pixabay.com/photo/2016/05/19/12/38/kiwi-1402844_1280.jpg" },
        { name: "Peach", calorie: 39, url: "https://cdn.pixabay.com/photo/2016/07/16/20/48/peaches-1522680_1280.jpg" },
    ];

    return (
        <div>
            <h1>Fruits List</h1>
            <ul>
                {fruits.map((fruit) => (
                    <li key={fruit.name}>
                        {fruit.name} - {fruit.calorie} calories
                        <img src={fruit.url} alt={fruit.name} style={{ width: '100px', height: '100px' }} />
                    </li>
                ))}
            </ul>
        </div>
    );
}