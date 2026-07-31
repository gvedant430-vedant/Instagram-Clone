function Story({image,username}){
    return(
        <div className="story">
            <img src={image} alt={username}/>
            <p>{username}</p>
        </div>
    );
}

export default Story;