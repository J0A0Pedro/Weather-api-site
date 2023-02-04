import axios from "axios";
import React, { useState, useEffect } from "react";
import GlobalStyle from "./styles/global"
import Form from "./components/Form/Form"
import Content from "./components/Content/Content";

function App() {


  const [inputValue, setInputValue] = useState(null);

  const url = `http://api.weatherapi.com/v1/current.json?key=58c8cef7b0a14ea69b5230904230402&q=${inputValue}&lang=pt`

  //Se não funcionar é pq a chave venceu. Lembrar de gerar outra no site

  const [post, setPost] = React.useState(null);

  useEffect(() => {
    setTimeout(() => {
      axios.get(url)
        .then((response) => {
          setPost(response.data)
          console.log(post)
        })
    }, 0) //setTimeout de enfeite apenas para lembrar de tentar corrigir a enxurrada de nomes ao digitar um local
    // axios.get(url)
    //   .then((response) => {
    //     setPost(response.data)
    //     console.log(post)
    //   })
  }, [inputValue]);

  if (!post) return null

  return (
    <div className="App">
      <h1>Weather API</h1>

      <GlobalStyle />
      <Form value={setInputValue} />
      <Content post={post} />


      {/*ESSA FUNÇÃO CRIA O BOTAO QUE ME RETORNA MINHA LOCALIZAO EM CORDENADAS. TENTAR USAR A CORDENADA PARA UMA LOCALIZAÇÃO*/}
      <button
        onClick={
          () => {
            navigator.geolocation.getCurrentPosition(location => {
              console.log(location);

              alert(`Latitude: ${location.coords.latitude} Longitude: ${location.coords.longitude}`)
            });
          }
        }>
        Localização Atual
      </button>


    </div>
  );
}

export default App;
