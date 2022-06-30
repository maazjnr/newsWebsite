import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {motion} from 'framer-motion'

const Home = () => {
  let myApiKey = "210929fdddc545fd832ac1af34077c9a";
  const [homeNews, setHomeNews] = useState([]);

  const getHomeNews = async () => {
    const reponse = await fetch(`
        https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${myApiKey}`);
    const data = await reponse.json();
    setHomeNews(data.articles);
  };

  useEffect(() => {
    getHomeNews();
  }, []);

  return (
    <motion.div
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{ duration: 0.7}}
    >
     <div className="home">
      <Header />
      <HR></HR>
      {homeNews.map((news, index) => {
        return (
          <Wrapper key={index}>
            <Card>
              <Articles>
                <h3>{news.title}</h3>
                <h6>Published At:{news.publishedAt}</h6>
                <button>
                  <a className="newsLink" href={news.url}>
                    Read More
                  </a>
                </button>
              </Articles>
              <img src={news.urlToImage} alt="" />
            </Card>
          </Wrapper>
        );
      })}
      <HR></HR>
      <Footer />
    </div>
   </motion.div>
  );
};

export default Home;

const Wrapper = styled.div`
  margin: 0rem -1rem;
  padding: 40px;
`;

const Card = styled.div`
  height: 50rem;
  overflow: hidden;
  position: relative;
  text-align: center;
  margin-bottom: -40px;

  h3 {
    color: #8db0a5;
    font-size: 15px;
  }

  h6 {
    color: #40675a;
    margin-bottom: 20px;
    font-size: 12px;
  }

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 80%;
    object-fit: cover;
  }
`;

const Articles = styled.div`
margin-bottom: 20px;

button{
    width: 200px
    height: 60px;
    padding: 15px 60px;
    cursor:pointer;
    background:  #40675a;
    border: 2px solid white;
    border-radius: 10px;
    transition: 0.3s;
    margin-top: 0px;
    font-weight: bold;
}

a{
  text-decoration: none;
  color: white;
}

button:hover{
    background: #133422;
    color: rgb(38, 56, 56);
}
`;

const HR = styled.hr`
padding: 1px;
background: #8db0a5;
`
