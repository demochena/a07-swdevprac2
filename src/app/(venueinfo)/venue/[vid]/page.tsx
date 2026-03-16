import Image from "next/image"
export default async function VenueDetailPage({params}:{params:{vid:string}}){
    const {vid} = await params
    const mockVenueRepo = new Map()
    mockVenueRepo.set("001", {name:"The Bloom Pavilion", image:"/img/bloom.jpg"})
    mockVenueRepo.set("002", {name:"Spark Space", image:"/img/sparkspace.jpg"})
    mockVenueRepo.set("003", {name:"The Grand Table", image:"/img/grandtable.jpg"})
    return (
        <main className="text-center p-5">
            <h1 className="text-lg font-bold text-center">Venue ID : {vid}</h1>
            <div className="flex items-center justify-center gap-10 mt-10">
            <Image 
                src={(mockVenueRepo.get(vid)).image}
                alt='Product Picture'
                width={0} height={0} sizes="100vw"
                className='rounded-lg w-[30%] bg-black'/>
            <div className='text-md mx-5'>{(mockVenueRepo.get(vid)).name}</div>
            </div>
        </main>
    )
}

export async function generateStaticParams() {
    return [{vid:'001'},{vid:'002'},{vid:'003'},{vid:'004'}]
}