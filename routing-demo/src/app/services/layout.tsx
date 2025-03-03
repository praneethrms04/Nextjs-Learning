import { Metadata } from "next";


export const metadata : Metadata = {
    title : {
        default: 'JaaGa', 
        template: ' JaaGa - %s ' ,
        // absolute : ""
    },
    description : ""
}

export default function SeriveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>JaaGa - Services</h1>
      {children}
    </>
  );
}
