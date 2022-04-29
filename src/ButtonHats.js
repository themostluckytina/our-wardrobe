function ButtonHats({filterLady}){
    return(
        <div>
            <button className="change" onClick={()=> filterLady('lady')}>Для женщин</button>
        </div>
    )
}

export default ButtonHats;
