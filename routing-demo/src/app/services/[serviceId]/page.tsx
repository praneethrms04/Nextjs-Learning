
type Props = {
  params : Promise<{serviceId : string}>
}


export const generateMetadata =  async ({params} :  Props)=>{
  const  serviceId = (await params)?.serviceId
  return {
    title : ` ${serviceId}  `
  }
}



export default async function ServiceId({params} : Props) {
  const serviceId = (await params)?.serviceId
  console.log(serviceId)

  
  return (
    <div>
      <h1>ServiceId : </h1>
    </div>
  )
}
