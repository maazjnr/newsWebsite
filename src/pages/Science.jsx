import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { motion } from "framer-motion";

const Science = () => {
  let myApiKey = "210929fdddc545fd832ac1af34077c9a";
  const [scienceNews, setScienceNews] = useState([]);

  const getScienceNews = async () => {
    const reponse = await fetch(`
    https://newsapi.org/v2/top-headlines?country=ng&category=science&apiKey=${myApiKey}&number=9`);
    const data = await reponse.json();
    setScienceNews(data.articles);
  };

  useEffect(() => {
    getScienceNews();
  }, []);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <BackToHome>
        <MyH5>All the Latest Science News Across the Globe</MyH5>
        <HRR></HRR>
        <BackToHomePageLink to="/">
          <FaHome /> HOMEPAGE
        </BackToHomePageLink>
      </BackToHome>
      <Container>
        {scienceNews.map((sNews, index) => {
          return (
            <SnNews key={index}>
              <p>{sNews.title}</p>
              <img className="myImage" src={sNews.urlToImage} alt="" />
              <button>
                <a className="newsLink" href={sNews.url}>
                  Read More
                </a>
              </button>
            </SnNews>
          );
        })}
      </Container>
    </motion.div>
  );
};

export default Science;

const SnNews = styled.div`
  width: 310px;
  height: 460px;
  margin: 1.5rem;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  border: none;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);
  box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);
  text-align: center;

  p{
    font-size: 12px;
  }

  button{
    width: 200px
    height: 60px;
    padding: 5px 30px;
    cursor:pointer;
    background:  #40675a;
    border: 2px solid white;
    border-radius: 10px;
    transition: 0.3s;
    margin-top: 10px;
}


a{
  text-decoration: none;
  color: white;
  font-size: 12px;
  font-weight: 600;
}

button:hover{
    background: #8db0a5;
    color: rgb(38, 56, 56);
}
`;

const Container = styled.div`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const MyH5 = styled.h5`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 5px;
  color: #40675a;
  font-size: 12px;
`;

const BackToHomePageLink = styled(Link)`
  text-decoration: none;
  color: #40675a;
  border: 1px solid rgb(38, 56, 56);
  padding: 10px 50px;
  font-weight: bold;
  border-radius: 5px;
  position: relative;
`;

const BackToHome = styled.div`
  text-align: center;
`;

const HRR = styled.hr`
  padding: 10px;
  background: #8db0a5;
  margin-bottom: 40px;
`;
