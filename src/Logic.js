import { useState } from 'react';
import { data } from './data';
import Buttons from './Buttons';
import Clothes from './Clothes';


function Logic({formula}){

    return( <div className="products">
       
    {formula.map((item=>{
        const{id, name, description,searchTerm, image} = item;
            
    return(<div key={id}>

        <div className="product-card">
                <img src={image} width={300} height={200} alt='cloth' />
        </div> 
        <div className='box'>
                <h3 className='name'>{name} </h3>
                <p className='description'>{description} </p>
        </div>

    </div>

)
}))}
</div>
)
}
export default Logic;