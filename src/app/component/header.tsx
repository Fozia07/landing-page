import Link from "next/link";


export default function Header(){
    return (
        <main >
            <header className="text-2xl text-bold flex justify-between h-20 bg-blue-900 text-cyan-50">
                < div className="flex ">
                    <h1 className="font-semibold text-6xl">Tour</h1>
                    <h1 className="font-semibold text-yellow-500 text-6xl">N</h1>
                    <h1 className="font-semibold text-6xl font-serif ">est</h1>
                </div>   
                <div  className="mr-8">
                    <ul className="flex gap-x-12 text-2xl mt-5">
                        <li>
                            <Link href="/">home</Link>
                        </li>
                        <li>
                        <Link href="/">galary</Link>
                        </li>
                        <li>
                        <Link href="/">about us</Link>
                        </li> 
                        <li>
                        <Link href="/">contact</Link>
                        </li>
                    </ul>
                </div>
            </header>
        </main>
    )
}