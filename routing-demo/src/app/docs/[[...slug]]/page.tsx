export default async function Docs({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
    const {slug} = await params
    console.log(slug)

    if(slug?.length === 2){
        // http://localhost:3000/docs/feature1/concept1
        return(
            <h1>Viewing docs for feature {slug[0]} and concept {slug[1]}</h1>
        )
    }else if(slug?.length ===1){
        // http://localhost:3000/docs/feature1
        return(
            <h1> Viewing docs for feature {slug[0]}</h1>
        )
    }else{
        // http://localhost:3000/docs/feature1/concept1/example1
        return (
          <>
            <h1>Docs home Page</h1>
          </>
        );
    }
}
