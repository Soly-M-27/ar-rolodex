
export function AFrameViewer({card_data,user}:any){
  if (!card_data){
    return
  }
  const card = card_data.cards[0];
  return (
    <iframe className="w-full h-screen" src={`./src/components/index.html?user=${user.uid}&card=${card.id}`} allowFullScreen={true} allow="camera; microphone"></iframe>
  )
};
