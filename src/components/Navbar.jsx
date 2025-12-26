import { useState, useEffect } from "react";

const Navbar = () => {
    //State untuk menandai navbar aktif saat scroll
    const [active, setActive] = useState(false);

    useEffect(() => {
        //Fungsi untuk cek posisi scroll
        const handleScroll = () => {
            //Jika scroll lebih dari 150px, navbar aktif
            if (window.scrollY > 150) {
                setActive(true);
            } else {
                setActive(false);
            }       
        };

        // Pasang event listener scroll
        window.addEventListener("scroll", handleScroll);

        // Cleanup event listener saat component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    {/*Container utama navbar */}
    return <div className="navbar py-6  flex items-center justify-between">
        
    {/* Logo Navbar */}
    <div className="logo">
        <h1 className="text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white">Portofolio</h1>
    </div>

    {/* Menu Navbar */}
    <ul className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 
    md:translate-x-0 md:opacity-100 bg-white/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl 
    md:bg-transparent transition-all md:transition-none ${active ? 'top-0 opacity-100' : '-top10 opacity-0' }`}>
        <li><a href="#" className="sm:text-lg text-base font-medium">Beranda</a></li>
        <li><a href="#" className="sm:text-lg text-base font-medium">Tentang</a></li>
        <li><a href="#" className="sm:text-lg text-base font-medium">Proyek</a></li>
        <li><a href="#" className="sm:text-lg text-base font-medium">Kontak</a></li>
    </ul>


  </div>
}

export default Navbar