import DataImage from "./data";
function App() {

  return (
    <>
    <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
      <div>
        {/* Quotes */}
        <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
          <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" />
          <q>Sedang berproses, terus belajar, dan tidak berhenti</q>
        </div>

        {/* Tentang Saya */}
        <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Panicia</h1>
        <p className="textbase/loose mb-6 opacity-50 text-justify">
          Saya adalah mahasiswa Teknik Informatika Universitas Tarumanagara dengan konsentrasi Data Mining. 
          Saya memiliki ketertarikan pada analisis data, pengembangan web, serta pengujian perangkat lunak. 
          Saya memiliki pengalaman dalam mengolah data menjadi visualisasi yang informatif, menyusun laporan 
          analisis secara sistematis, dan mendukung proses pengembangan fitur. Selain itu, saya turut melakukan 
          User Acceptance Testing (UAT) untuk memastikan kualitas, kelayakan, dan kelancaran penggunaan sistem. 
          Saya terbuka untuk mempelajari hal baru, cepat beradaptasi, serta mampu bekerja dengan tim. 
          Ke depannya, saya berkomitmen untuk mengembangkan karier di bidang teknologi, khususnya pada data science, 
          web development, dan quality assurance.
        </p>

        {/* Button Download CV dan Lihat Proyek */}
        <div className="flex items-center sm:gap-4 gap-x-20">
          <a href="#" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-400">
            Download CV <i className="ri-download-2-fill ri-lg text-center"></i>
          </a>

          <a href="#" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-400">
            Lihat Proyek <i className="ri-arrow-down-fill ri-lg text-center"></i>
          </a>
        </div>
      </div>

      {/* Foto Profil */}
      <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto" />
    </div>
    </>
  );
}

export default App
