function ButtonTie({filter}){
    return(
        <div>
            <button className="change" onClick={()=>filter('scarf')} >Галстук-платок</button>
        </div>
    )
}

export default ButtonTie;