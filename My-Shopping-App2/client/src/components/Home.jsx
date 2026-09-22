import Item from "./Item"

const Home = () => {
  const Itemdata=[
    {Image:"",title:"Lipstick", price: 465},
    {Image:"",title:"Powder", price: 315},
    {Image:"",title:"Foundation", price: 753},
    {Image:"",title:"Make up", price: 465},
    {Image:"",title:"Clutcher", price: 315},
    {Image:"",title:"Nail Polish", price: 753},
  ]
  return (
    <div className="home">
    {
      Itemdata.map((item,index)=>{
         return <Item key={index} props={item}/>
      })
    } 
    </div>
  )
}

export default Home