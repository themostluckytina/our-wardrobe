import { useState } from "react";
import { dataPants } from './dataPants';
import LogicPants from "./LogicPants";

function Pants(){

    const [pants, setPants] = useState(dataPants);
    
    return( <div className="top">
        <div className="main">
            <h1>Брюки</h1>
            <img src='https://obliqo.ru/wp-content/uploads/2020/07/vse-vidy-brjuk.jpg' width={420} alt='tie'/>

            <h3>Брюки, или просто штаны – это общепризнанное название разновидности верхней одежды, покрывающей нижнюю часть туловища и каждую ногу в отдельности. Благодаря удобству и практичности, этот предмет стал неотъемлемой частью как мужского, так и женского гардероба. А множество интересных фасонов и моделей позволяют создавать стильные и эффектные образы для любых случаев и мероприятий.</h3>
        </div>
    

        <LogicPants newPants={pants} />

        <div>
            <img src='https://mylitta.ru/uploads/posts/2020-07/1594383258_kostyum-14.jpg' width={400} alt='clothes'/>       
        </div>



    </div>)
}

export default Pants;