import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

let info=[
    'Star Wars is an American epic space opera[1] media franchise created by George Lucas, which began with the eponymous 1977 film[b] and quickly became a worldwide pop-culture phenomenon. The franchise has been expanded into various films and other media, including television series, video games, novels, comic books, theme park attractions, and themed areas, comprising an all-encompassing fictional universe.[c] In 2020, its total value was estimated at US$70 billion, and it is currently the fifth-highest-grossing media franchise of all time.',
    'The original film (Star Wars), retroactively subtitled Episode IV: A New Hope (1977), was followed by the sequels Episode V: The Empire Strikes Back (1980) and Episode VI: Return of the Jedi (1983), forming the original Star Wars trilogy. Lucas later returned to filmmaking to direct a prequel trilogy, consisting of Episode I: The Phantom Menace (1999), Episode II: Attack of the Clones (2002), and Episode III: Revenge of the Sith (2005). In 2012, Lucas sold his production company to Disney, relinquishing his ownership of the franchise. The subsequently produced sequel trilogy consists of Episode VII: The Force Awakens (2015), Episode VIII: The Last Jedi (2017), and Episode IX: The Rise of Skywalker (2019).',
    `All nine films of the 'Skywalker saga' were nominated for Academy Awards with wins going to the first two releases. Together with the theatrical live action spin-off films Rogue One (2016) and Solo (2018), the combined box office revenue of the films equated to over US$10 billion and is currently the second-highest-grossing film franchise of all time`,
    `Force-wielders are very limited in numbers in comparison to the population. The Jedi and Sith prefer the use of a weapon called a lightsaber, a blade of energy that can cut through virtually any surface and deflect energy bolts. The rest of the population, as well as renegades and soldiers, use laser-powered blaster firearms. In the outer reaches of the galaxy, crime syndicates such as the Hutt cartel are dominant. Bounty hunters are often employed by both gangsters and governments. Illicit activities include smuggling and slavery.`,
    `The Star Wars franchise has been spun off to various television productions, including two animated series released in the mid-1980s. Further animated series began to be released in the 2000s, the first two of which focused on the Clone Wars. After Disney's acquisition of Lucasfilm, only the later one remained canon. Eight live-action Star Wars series will be released on Disney`
]
export default function TitleInfo (){
    const intervalRef = useRef(null)

    let index=0
    const [text,setText]=useState(info[0])
    useEffect(()=>{
        intervalRef.current=setInterval(()=>{
                index++
            if(index===4){
                index=0 
                setText(info[4])  }
           setText(info[index])
            },5000)
    },[])
    return(
        <div  style={{textAlign:'center'}}>
         {text}     
        </div>
    )
    
}