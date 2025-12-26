import DataImage from "./data";
import { listProyek } from "./data";
function App() {


  return (
    <>
    <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
      <div className="animate__animated animate__fadeInUp animate__delay-1s">
        {/* Quotes */}
        <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
          <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy" />
          <q>Sedang berproses, terus belajar, dan tidak berhenti</q>
        </div>

        {/* Intro */}
        <h1 className="text-5xl/tight font-bold mb-3">Hi, Saya Panicia</h1>
        <p className="text-base/loose mb-6 opacity-50 text-justify">
          Memiliki minat pada Data Analysis, Data Science, Data Engineer, Backend, Frontend,
          FullStack Development, Quality Assurance, dan IT Infrastruktur.
        </p>

        {/* Button Download CV dan Lihat Proyek */}
        <div className="flex items-center sm:gap-4 gap-x-20">
          <a href="https://drive.google.com/file/d/1BHdTYAAShmjlPk44Tva8s3WbiBoQi0VR/view?usp=drive_link" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-400">
            Lihat CV <i className="ri-arrow-right-up-line"></i>
          </a>

          <a href="#proyek" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-400">
            Lihat Proyek <i className="ri-arrow-down-fill ri-lg text-center"></i>
          </a>
        </div>
      </div>

      {/* Foto Profil */}
      <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-2s" loading="lazy"/>
    </div>

    {/* Tentang */}
    <div className="tentang mt-32 py-10" id="tentang">
      <div className="xl:w-2/3 lg:w-3/4 wf mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000">
        <p className="text-base/loose mb-10">
          Saya adalah mahasiswa Teknik Informatika Universitas Tarumanagara dengan konsentrasi Data Mining. 
          Saya memiliki ketertarikan pada analisis data, pengembangan web, serta pengujian perangkat lunak. 
          Saya memiliki pengalaman dalam mengolah data menjadi visualisasi yang informatif, menyusun laporan 
          analisis secara sistematis, dan mendukung proses pengembangan fitur. Selain itu, saya turut melakukan 
          User Acceptance Testing (UAT) untuk memastikan kualitas, kelayakan, dan kelancaran penggunaan sistem. 
          Saya terbuka untuk mempelajari hal baru, cepat beradaptasi, serta mampu bekerja dengan tim. 
          Ke depannya, saya berkomitmen untuk mengembangkan karier di bidang teknologi, khususnya pada data science, 
          web development, dan quality assurance.
        </p>

        {/* Pendidikan */}
        <div className="mt-6">
          <h1 className="font-large font-bold">PENDIDIKAN</h1>

          <div className="flex items-start gap-4">
            <img src="\assets\untar_logo.png" alt="logo untar"className="w-15 object-contain" loading="lazy"/>
          <div className="">
            <p className="text-sm opacity-80">
              <span className="font-medium">Universitas Tarumanagara</span> - Teknik Informatika
            </p>
            <p className="text-xs">3.81 / 4.00</p>
            <p className="text-xs opacity-60">2023 – Sekarang</p>
          </div>
          </div>
        </div>
      </div>

      {/* SKILL TEKNIKAL */}
      <div className="tools mt-32 px-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-12 text-center">Skill Teknikal</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8" data-aos="fade-up" data-aos-duration="3000">
          
          {/* PEMROGRAMAN DAN FRAMEWORK */}
          <div className="bg-zinc-800 p-6 rounded-xl">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">Pemrograman & Framework</h2>
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center">
              {[
                ["python.png", "Python"],
                ["SQL.png", "SQL"],
                ["js.png", "JavaScript"],
                ["html.png", "HTML"],
                ["CSS.png", "CSS"],
                ["bootstrap.png", "Bootstrap"],
                ["nodejs.png", "Node.js"],
                ["php.png", "PHP"],
                ["laravel.png", "Laravel"],
                ["restAPI.png", "REST API"],
                ["JSON.png", "JSON"],
                ["tailwind.png", "Tailwind CSS"],
                ["reactjs.png", "ReactJS"],
              ].map(([img, name]) => (
              <div key={name} className="group flex flex-col items-center w-16 h-16">
                <img src={`/assets/tools/programming_and_framework/${img}`} alt={name} className="w-12 sm:w-14 bg-white p-2 rounded-md transition-transform duration-300 group-hover:scale-110" loading="lazy"/>
                <span className="mt-2 inset-0 flex items-center justify-center text-[10px] font-semibold text-zinc-900 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-1 rounded-md z-30">{name}</span>
              </div>
              ))}
            </div>
          </div>
          
          {/* TOOLS & SOFTWARE */}
          <div className="bg-zinc-800 p-6 rounded-xl">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">Alat & Software</h2>
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center">
              {[
                ["canva.png", "Canva"],
                ["colab.png", "Google Colab"],
                ["draw.io.png", "Draw.io"],
                ["excel.jpg", "Microsoft Excel"],
                ["figma.png", "Figma"],
                ["git.png", "Git"],
                ["github.png", "GitHub"],
                ["gns3.jpg", "GNS3"],
                ["google_workspace.png", "Google Workspace"],
                ["jira.png", "Jira"],
                ["jupyter.png", "Jupyter Notebook"],
                ["laragon.png", "Laragon"],
                ["linux.png", "Linux"],
                ["looker.png", "Looker Studio"],
                ["oracle_sql_dev.png", "Oracle SQL Developer"],
                ["thunder.png", "Thunder Client"],
                ["virtualbox.png", "VirtualBox"],
                ["vscode.png", "Visual Studio Code"],
                ["xampp.png", "XAMPP"],
              ].map(([img, name]) => (
            <div key={name} className="group flex flex-col items-center w-16 h-16">
              <img src={`/assets/tools/tools_and_software/${img}`} alt={name} className="w-12 sm:w-14 bg-white p-2 rounded-md transition-transform duration-300 group-hover:scale-110" loading="lazy"/>
              <span className="mt-2 inset-0 flex items-center justify-center text-[10px] font-semibold text-zinc-900 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-1 rounded-md z-30">{name}</span>
              </div>
              ))}
            </div>
          </div>

          {/* DATABASE */}
          <div className="bg-zinc-800 p-6 rounded-xl md:col-span-2 lg:col-span-1">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">Database</h2>
            <div className="grid grid-cols-3 gap-6 place-items-center">
              {[
                ["MongoDB.png", "MongoDB"],
                ["MySQL.png", "MySQL"],
                ["postgreSQL.png", "PostgreSQL"],
              ].map(([img, name]) => (
            <div key={name} className="group flex flex-col items-center w-16 h-16">
              <img src={`/assets/tools/database/${img}`} alt={name} className="w-12 sm:w-14 bg-white p-2 rounded-md transition-transform duration-300 group-hover:scale-110" loading="lazy"/>
              <span className="mt-2 inset-0 flex items-center justify-center text-[10px] font-semibold text-zinc-900 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-1 rounded-md z-30">{name}</span>
            </div> 
              ))}
            </div>
            </div>
        </div>
      </div>

      {/* PROYEK*/}
      <div className="proyek mt-32 py-10"id="proyek">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="3000">Proyek</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="3000" data-aos-delay="300">Berikut ini beberapa proyek yang telah saya buat.</p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 text-justify" >
          {listProyek.map((proyek) => (
            <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md" data-aos="fade-up" data-aos-duration="3000" data-aos-delay={proyek.dad}>
              <img src={proyek.gambar} alt="Proyek Image" loading="lazy"/>
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <p className="text-xs mb-2 opacity-70">{proyek.date}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p className="py-1 px-3 border border-zinc-500 rounded-md font-semibold" key={index}>
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a href={proyek.link} target="_blank" className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-400">
                    Lihat Proyek
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* KONTAK */}
      <div className="kontak mt-32 sm:p-7 p-0" id="kontak">
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="3000">Kontak</h1>
        <p className="text-base/loose mb-10 opacity-50 text-center"data-aos="fade-up" data-aos-duration="3000" data-aos-delay="300">Mari terhubung dengan saya</p>
        <form action="https://formsubmit.co/panicia1604@gmail.com" method="POST" target="_blank" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" data-aos="fade-up" data-aos-duration="3000" data-aos-delay="500" autoComplete="off">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold"> Nama Lengkap</label>
              <input type="text" name="nama" placeholder="Masukan nama..." className="border border-zinc-500 p-2 rounded-md" required />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold"> Email</label>
              <input type="email" name="email" placeholder="Masukan email..." className="border border-zinc-500 p-2 rounded-md" required />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold"> Pesan </label>
              <textarea name="pesan" id="pesan" cols="35" rows="7" placeholder="Tulis pesan..." className="border border-zinc-500 p-2 rounded-md" required></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className=" bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-400">Kirim Pesan</button>
            </div>
          </div>
        </form>
      </div>


    </div>
    </>
  );
}

export default App
