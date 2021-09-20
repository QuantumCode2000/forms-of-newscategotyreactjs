import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import CardNews from './components/CardNews';
function App() {
  const [category, setCategory] = useState("");
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const key = "fff2567b67154fd1beb388f1e45a2a4c"

  const handleApi = async (category) => {
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${key}`;
    const response = await fetch(url);
    const result = await response.json();
    setNews(result.articles)
    setLoading(false);
  }

  const handleSearch = () => {
    handleApi(category);
    console.log("dando click !");
  }

  console.log("Array --> ", news);

  console.log("App -->", category);

  return (
    <div className="App">
      <Form
        setCategory={setCategory}
        handleSearch={handleSearch}
        loading={loading} />
      {
        news.map((i, index) => (
          <CardNews title={i.title} image={i.urlToImage} author={i.author} key={index} content={i.content} />
        ))
      }

    </div>
  );
}

export default App;
