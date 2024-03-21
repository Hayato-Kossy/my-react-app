// TwitterPreview.jsx
import { useState } from "react";

export const TwitterPreview = () => {
  const [tweet, setTweet] = useState({
    content: "",
    userName: "",
    date: "",
    id: 0,
  });
  const [tweets, setTweets] = useState([]);

  const addTweet = () => {
    setTweets([...tweets, tweet]);
    setTweet({
      content: "",
      userName: "",
      date: "",
      id: 0,
    });
  };

  return (
    <div>
      <h2>Twitter Preview</h2>
      <input
        type="text"
        value={tweet.content}
        onChange={(e) => setTweet({ ...tweet, content: e.target.value })}
        placeholder="Tweet"
      />
      <input
        type="text"
        value={tweet.userName}
        onChange={(e) => setTweet({ ...tweet, userName: e.target.value })}
        placeholder="Username"
      />
      <input
        type="text"
        value={tweet.date}
        onChange={(e) => setTweet({ ...tweet, date: e.target.value })}
        placeholder="Date"
      />
      <input
        type="text"
        value={tweet.id}
        onChange={(e) => setTweet({ ...tweet, id: e.target.value })}
        placeholder="ID"
      />
      <button onClick={addTweet}>Tweet</button>
      <ul>
        {tweets.map((tweet, index) => (
          <li key={index}>{tweet.content}</li>
        ))}
      </ul>
    </div>
  );
};
