import axios, { AxiosResponse } from "axios";
import React, { useState, useEffect } from "react";
import GlobalStyle from "./styles/global";
import Form from "./components/Search/Search";
import Content from "./components/Content/Content";
import Location from "./components/Location/Location";


function App() {

  const [inputValue, setInputValue] = useState<string | null>(null);
  const url = `http://api.weatherapi.com/v1/current.json?key=58c8cef7b0a14ea69b5230904230402&q=${inputValue}&lang=pt`
  //Se não funcionar é pq a chave venceu. Lembrar de gerar outra no site
  const [post, setPost] = React.useState<string | null>(null);


  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        const response: AxiosResponse = await axios.get(url);
        setPost(response.data);
      };
      fetchData();
    }, 500)

  }, [inputValue]);


  if (!post) return null

  return (
    <div className="App">
      <h1>Weather API</h1>
      <GlobalStyle />
      <Form value={setInputValue} />
      <Content post={post} />
      <Location />
    </div>
  );
}

export default App;
