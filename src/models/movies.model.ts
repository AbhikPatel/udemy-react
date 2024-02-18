export class Movies {
    public Title:string
    public Year:string
    public imdbID:string
    public Type:string
    public Poster:string
    
    constructor(
        title:string,
        year:string,
        imdbID:string,
        type:string,
        poster:string
    ){
        this.Title = title;
        this.Year = year;
        this.imdbID = imdbID;
        this.Type = type;
        this.Poster = poster;
    }
}

// export class MovieDescription {
//     public Title:string
//     public Year:string
//     public Rated:string
//     public Released:string
// }