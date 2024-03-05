 
const Gallery = () => {
    return (
        <div className="mt-8">
            <div className="bg-green-700 rounded-md mb-4 text-white">
          <h3 className="text-3xl text-center">Gallery</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2">
                {
                    image.map((img =>(
                        <div key={img.id}>
                            <img className="w-80 h-72" src={img.img} alt="" />
                        </div>
                    )))
                }
            </div>
        </div>
    );
};

const image = [
    {
      "id": 1,
      "img" : '/290035731_454218856704967_2766993083905106647_n.jpg'
    },
    {
        "id": 2,

        "img": "/299800964_492100692916783_6160030707863105795_n.jpg"
    },
    {
        "id": 3,

        "img" : "/315151645_569413178518867_614210182941894949_n.jpg"
    },
    {
        "id": 4,

        "img" : '/337281646_208830788462960_7296555913152874228_n(1).jpg'
    }
]

export default Gallery;