import CryptoCard from "../components/CryptoCard"
export const revalidate = 60;
const Home = async () => {

  const prices = await fetch("http://localhost:3000/api/prices", {
  }).then((res) => res.json())

  return (
    <section className='w-full flex-center flex-col'>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5">
       {
          prices.data.map((item, index) => {
            return <CryptoCard key={index} crypto={item} /> 
          })
        } 
      </div>
    </section>
  )
};

export default Home;
