export default function Movies({data}){

    return (

        <div>
            <div>

            {data.Search.map( (m) => <div>{m.Title} --- {m.Year}</div> )}
            {data.Search.map( (m) => <div>{m.imdbID} --- {m.Type}</div> )}
            {data.Search.map( (m) => <div>{m.Poster}</div> )}               

            </div>
        </div>

    )

}

export async function getServerSideProps(context){

    const res = await fetch(`http://www.omdbapi.com/?apikey=e0d35ba4&s=bagdad`)

    const data = await res.json()

    return {
  
        props: {
  
            data
  
        }
  
    }
  
}