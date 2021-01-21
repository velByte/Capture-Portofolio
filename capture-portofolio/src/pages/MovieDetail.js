import React, {useState, useEffect} from "react"; 
import styled from "styled-components"; 
import {useHistory} from "react-router-dom";
import {MovieState} from "../movieState";
import {motion} from "framer-motion";
import {pageAnimation} from "../animation";
import ScrollTop from "../components/ScrollTop.js";
 

const MovieDetail = () => {

    //useHistory ние е необходим за да можем да извлечем URL на търсената страница
    const history = useHistory();
    //След като сме създали променлива с обекта върнат от useHistory, можел да извлечем,
    //необходимата информация от този обект.

    //Тук извличаме URL информацията от обекта
    const url = history.location.pathname; 

    //Създаваме парченца памет в компонента. 
    //Казваме че има променлива movies, която ще запазва някаква информация
    //Също така, оказваме назинат по който можем да променяме тази информация в
    //проментливата и това е референцията към функция setMovies. След това, инициираме първоначалният 
    //статус на проментливата, като казваме че тя съдържа обектат който се връща от MovieState файла
    const [movies, setMovies] = useState(MovieState);

    //Създаваме второ парченце за запазване на информация, и това е movie
    //То ще съдържа информацията само за един филм, извлечена от MovieState чрез movies 
    //възоснова на URL адреса
    //Създаваме и референция към функция на име setMovie, чрез нея ще можем да променяме movie
    //Първоначалното инициране е с null. Това се налага, защото този компонент ще се променя постояно. 
    const [movie, setMovie] = useState(null);
    
    //UseEffect, използваме useEffect, за да можем да изпълняваме дадена функция при промяна на компонента. 
    //В този случай, функцията зададена като първи аргумент на useEffect ще се изпълни когата някой от променливите във 
    //вторият или третият аргумент се промени. 
    //useEffect(a, b)
    useEffect(() => {
        //Създаваме променлива, която да съхранява една част от обекта от movies
        //След това търсим в обекта, коя част, eintrag, от него съдържа същият url както извлеченият от useHistory
        //и филтрира този обект в променливата ни.
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url)
        //Предварително филтрираният обект се зарежда в movie, чрез функцията setMovie
        setMovie(currentMovie[0]);
    },[movies, url]);

   console.log("Movie after useEffect :", movie);

    return(
        <>
        <ScrollTop/>
        {/* Проверява дали movie е зареден първо, преди да рендне страницата.
            Това е необходимо защото в противен случай, React ще се опита да рендне страницата
            още преди да има информацията в movie. Виж линия 28, там зареждаме movie с null */}
        {movie && (
        <Details 
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <Headline>
                <h2>{movie.title}</h2>
                <img src={movie.mainImg} alt="movie"/>
            </Headline>
            <Awords>
                {movie.awards.map((aword) => (
                    <Aword 
                        title={aword.title}
                        description={aword.description}
                        key={aword.title}
                    />
                ))}
            </Awords>
            <ImageDisplay>
                <img src={movie.secondaryImg} alt="movie"/>
            </ImageDisplay>
        </Details>
        )}
        </>
    );
}

const Details = styled(motion.div)`
    color: white;
`;

const Headline = styled.div`
    min-height: 90vh;
    padding-top: 20vh; 
    position: relative;
    h2{
        position: absolute;
        top: 10%; 
        left: 50%;
        transform: translate(-50%, -10%);
    }
    img{
        width: 100%; 
        height: 70vh;
        object-fit: cover;
    }
`;

const Awords = styled.div`
    min-height: 80vh;
    display:flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content:space-around;
`;

const AwardStyle = styled.div`
    padding: 5rem;
    h3{
        font-size: 2rem;
    }
    .line{
        width:100%;
        background: #23d997;
        height: 0.5rem;
        margin: 1rem 0rem; 
    }
    p{
        padding: 2rem 0rem;
    }
`;

//Aword component
const Aword = ({title, description}) => {

    return(
        <AwardStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </AwardStyle>
    )

}

const ImageDisplay = styled.div`
    min-height: 50vh; 
    img{
        width: 100%; 
        height: 100vh; 
        object-fit: cover;
    }
`;

export default MovieDetail; 