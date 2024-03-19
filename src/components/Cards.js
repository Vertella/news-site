import Link from "next/link";

export default function NewsCards({ title, imgSrc, href, desc, }) {
    

    return (
        <div className="flex flex-col justify-start items-center border-2 p-4 m-4 max-w-72 h-5/6 overflow-hidden hover:text-blue-600 hover:border-blue-600">
          <img src={imgSrc} />
    
          <h1 className="text-2xl font-bold text-center">{title}</h1>
    
          <p className="pb-2 overflow-hidden">{desc}</p>
          <Link href={href}>Read More</Link>
    
        </div>
      );
    }