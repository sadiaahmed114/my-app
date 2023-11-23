import Image from 'next/image'

const Home = () => {
  return (
    <div className='bg-teal-400  mx-w-lg'>
      <h1  className='text-3xl font-bold text-red-900 px-4 py-4 mt-3 '>Reading Concept</h1>
     < Image src='/OIP.jpeg' alt='Cover Photo' width={400} height={600}  className='mt-6 px-2 border-black '  />
     < p className='mt-8 text-xl px-3 font-normal justify-center items-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptates esse quos veniam quaerat culpa placeat, praesentium fuga itaque rerum atque natus deleniti! Facere suscipit iusto quis dolores, unde iure? Modi architecto dicta obcaecati odit porro, tenetur, adipisci quia inventore doloremque incidunt labore laborum deleniti sunt dolorum delectus. Asperiores, maiores!
     </p>
     <button className='rounded-full hover:scale-105 duration-300 bg-teal-700 m-4 p-4'>Learn More</button>
    </div>
  )
}

export default Home 