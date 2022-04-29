function ButtonHeels({filterHeels}){
    return(
        <div>
            <button className="change" onClick={()=>filterHeels('female')}>Женская обувь</button>
        </div>
    )
}

export default ButtonHeels;