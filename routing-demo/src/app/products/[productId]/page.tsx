import {Metadata} from "next"

type Props ={
  params : Promise<{productId : string}>
}

export const generateMetadata = async ({params} : Props) : Promise<Metadata>=>{
  const productId = (await params).productId

  const title = await new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(`Mobile - ${productId}`)
    },100)
  })
  console.log(productId)
  return {
    title : `Product ${title} `
  }
}


export default async function ProductDetails({params} : Props) {
    const productId = (await params).productId
    console.log(productId)
    return (
      <>
        <h1>ProductDetails {productId}</h1>

      </>
    );
  }
  