import React, { useState } from "react";
import Axios from "axios";

const basic_url = "https://kitsu.io/api/edge/anime?filter[text]="

const Home = () =>{


   
    let list2 = ["toto","gaspard","trololo"];

    const [keyword,setKeyword] = useState("");
    const [listAnims, setlistAnims] = useState(null);

    function searchAnim(keywords){

        Axios.get(basic_url+keywords).then((response) =>{
            console.log("Response.data : ", response.data.data )
            setlistAnims(response.data.data);
           
            
        })

    }
    console.log(listAnims)
    return(

        <div>
                <h1>Welcome to AnimeFever</h1>
                <p>Here you can search informations on animes.</p>
                <input id="searchBar"placeholder="your anime" onChange={(e) =>setKeyword(e.target.value)}/>
                <button onClick={ (e) =>
                {
                   searchAnim(keyword);
                }}> search</button>


                <div id="result">
                {listAnims !== null  &&
                      
                    <div>
                        { console.log("***** ",listAnims)}
                        {listAnims.length > 0 &&
                       
                           listAnims.map((item,index) =>{

                            return(
                            <div  key={index} className="animeDetails">
                            <h2>Title: {item.attributes.titles.en_jp}</h2>
                            <img src={item.attributes.posterImage.tiny}/>
                            <p>{item.attributes.description}</p>
                            </div>
                        ) }

                            ) 
                          
                    }
                    </div>
                     
         
           
                     
 
                }

                </div>

        </div>

    )
}

export default Home;