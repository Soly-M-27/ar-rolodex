
export function AFrameViewer({data}:any){
  console.log(data);
  return (
    <iframe className="w-full h-screen" src={"./src/components/index.html?user=id&card=id"} allowFullScreen={true}></iframe>
  )
};
