const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
        <h1 className="text-2xl font-bold">Portofolio</h1>
        <div className="flex gap-7">
            <a href="#">Beranda</a>
            <a href="#">Tentang</a>
            <a href="#">Kontak</a>
        </div>
        <div className="flex itmes-center gap-3">
           <a href="https://github.com/panicia16" target="_blank">
            <i className="ri-github-fill ri-2x"></i>
           </a>

           <a href="https://www.linkedin.com/in/panicia/" target="_blank">
            <i className="ri-linkedin-box-fill ri-2x"></i>
           </a>

           <a href="https://wa.me/6282125610979" target="_blank">
            <i className="ri-whatsapp-fill ri-2x"></i>
           </a>

           <a href="mailto:panicia1604@gmail.com" target="_blank">
            <i className="ri-mail-fill ri-2x"></i>
           </a>

         

        </div>
    </div>
  )
}

export default Footer