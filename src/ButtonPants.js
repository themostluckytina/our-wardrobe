function ButtonPants({filterShort}){
    return(
        <div>
            <button className="change" onClick={()=>filterShort('short')}>Укороченные брики</button>
        </div>
    )
}

export default ButtonPants;