class Movie{
    title:string
    studio:string
    rating:string=`PG`

    constructor( title:string,studio:string,rating:string=`PG`){
        this.title=title
        this.studio=studio
        this.rating=rating
    }

    
}
class Moviecollections{
    private movies:Movie[]=[]

    addMovie(movie:Movie){
        this.movies.push(movie)
    }
    getPGmovies():Movie[]{
     return this.movies.filter(movie=>movie.rating=`PG`)
    }
}

let casinoRoyale = new Movie(`Casino Royale`, `Eon Productions`, `PG`);
let Ghostbusters=new Movie(`Ghostbusters`,`Columbia Pictures`,`PG`)
let Deadpoolandwolverine=new Movie(`Deadpoolandwolverine`,`disney`,`R`)
let Dune=new Movie(`Dune`,`Legendary Pictures`,`PG`)
let Ironman=new Movie(`Ironman`,`Disney`,`PG`)
let johnwick=new Movie(`john wick`,`Summit Entertainment`,`R`)
let Oppenheimer=new Movie(`Oppenheimer`,`Universal Pictures`,`R`)

let moviecollections=new Moviecollections()
moviecollections.addMovie(Ghostbusters)
moviecollections.addMovie(Deadpoolandwolverine)
moviecollections.addMovie(Dune)
moviecollections.addMovie(Ironman)
moviecollections.addMovie(johnwick)
moviecollections.addMovie(Oppenheimer)



let pgmovies=moviecollections.getPGmovies()
console.log(`creates an instance of the class movie`)
console.log(`movie:${casinoRoyale.title},studio:${casinoRoyale.studio},rating:${casinoRoyale.rating}\n`);



console.log(`PG movies list:`);
pgmovies.forEach(movie=>console.log(`${movie.title},${movie.studio},${movie.rating}`)
)
  
