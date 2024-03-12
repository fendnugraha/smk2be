import {
  faFacebook,
  faFacebookSquare,
  faInstagram,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  faGlobe,
  faLocationDot,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section
        className="flex justify-center items-center h-screen flex-col bg-cover bg-center"
        id="home"
        style={{
          backgroundImage:
            'url("https://source.unsplash.com/random/900x700/?university,student,alumni")',
        }}>
        <h1 className="text-4xl font-bold text-white">BACK TO</h1>
        <h1 className="text-9xl font-bold text-amber-500">SCHOOL</h1>
        <p className="text-white">
          Penerimaan Siswa Baru Tahun Ajaran 2024-2025
        </p>
        <button className="bg-slate-500 text-white px-6 py-3 text-xl mt-5 hover:bg-slate-300 hover:text-slate-900">
          JOIN US
        </button>
      </section>

      <section className="pt-20 bg-slate-100 h-screen flex justify-center items-center flex-col">
        <h1 className="text-5xl font-bold mb-5">KOMPETENSI KEAHLIAN</h1>
        <div className="flex gap-5 flex-wrap justify-center w-3/4">
          <div className="relative">
            <Image
              src="https://source.unsplash.com/random/700x900/?dinner"
              width={250}
              height={100}
              alt="Sapa alumni"
            />
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/70 p-3 backdrop-blur-sm text-slate-800">
              TATA BOGA
            </button>
          </div>
          <div className="relative">
            <Image
              src="https://source.unsplash.com/random/700x900/?makeup"
              width={250}
              height={100}
              alt="Sapa alumni"
            />
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/70 p-3 backdrop-blur-sm text-slate-800">
              TATA KECANTIKAN
            </button>
          </div>
          <div className="relative">
            <Image
              src="https://source.unsplash.com/random/700x900/?fashion,design,gown,show"
              width={250}
              height={100}
              alt="Sapa alumni"
            />
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/70 p-3 backdrop-blur-sm text-slate-800">
              TATA BUSANA
            </button>
          </div>
          <div className="relative">
            <Image
              src="https://source.unsplash.com/random/700x900/?chemicals"
              width={250}
              height={100}
              alt="Sapa alumni"
            />
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/70 p-3 backdrop-blur-sm text-slate-800">
              KIMIA INDUSTRI
            </button>
          </div>
          <div className="relative">
            <Image
              src="https://source.unsplash.com/random/700x900/?computers,network"
              width={250}
              height={100}
              alt="Sapa alumni"
            />
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/70 p-3 backdrop-blur-sm text-slate-800">
              TEKNIK KOMPUTER JARINGAN
            </button>
          </div>
        </div>
      </section>

      <section
        className="pt-20 p-5 bg-slate-100 h-screen flex justify-center items-center bg-cover bg-center"
        id="visimisi"
        style={{
          backgroundImage:
            'url("https://source.unsplash.com/random/900x700/?building,university")',
        }}>
        <div className="w-3/4 bg-slate-50 p-5 rounded-xl">
          <h1 className="text-5xl font-bold mb-8 mx-auto">VISI & MISI</h1>
          <h1 className="text-3xl font-bold">VISI</h1>
          <p className="text-sm mb-3">
            Menjadi SMK unggulan Jawa Barat tahun 2020 yang menghasilkan sumber
            daya manusia profesional dan menguasai perkembangan IPTEKS serta
            menjunnjung tinggi nilai-nilai IMTAQ.
          </p>
          <h1 className="text-3xl font-bold">MISI</h1>
          <p className="text-sm mb-3">Misi yang ingin dicapai adalah :</p>
          <ul className="list-decimal list-inside">
            <li>
              Menghasilkan Siswa yang memiliki kepribadian dan berbudi pekerti
              luhur berlandaskan iman dan taqwa kepada Tuhan Yang Maha Esa
            </li>
            <li>
              Menghasilkan keterampilan dan kompetensi siswa sesuai kompetensi
              keahlian pilihannya
            </li>
            <li>
              Menghasilkan siswa yang mampu menguasai perkembangan IPTEKS d.
              Menghasilkan lulusan yang mendiri, berjiwa wirausaha serta
              berwawasan global dan berdaya saing, yang siap mengisi dan/atau
              menciptakan lapangan kerja
            </li>
          </ul>
          <h1 className="text-3xl font-bold">TUJUAN</h1>
          <ul className="list-disc list-inside">
            <li>
              Tersedia dan terlaksananya layanan pendidikan berkarakter yang
              berbasis IMTAQ
            </li>
            <li>
              Tersedia dan terlaksananya layanan pendidikan kejuruan sesuai
              dengan paket keahliannya masing-masing
            </li>
            <li>Terlaksananya pelayanan berbasis TIK</li>
            <li>
              Tersedia dan terjangkaunya pembelajaran yang bermutu dan relevan
              dengan kebutuhan era global sesuai dengan perkembangan IPTEKS
            </li>
            <li>
              Tersedianya sitem manajemen yang handal dalam menjamin
              terselenggaranya layanan pendidikan
            </li>
            <li>
              Terpasarkannya lulusan SMK Negeri 2 Baleendah sebagai tenaga kerja
              tingkat menengah sesuai dengan bidang keahlian dan kebutuhan dunia
              kerja baik didalam maupun di luar negeri
            </li>
          </ul>
        </div>
      </section>
      <section
        className="bg-slate-200 h-screen flex justify-center items-center"
        id="contact">
        <div className="w-3/4 bg-slate-50 p-5 rounded-xl">
          <h1 className="text-5xl font-bold mb-8">Contact us</h1>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="flex gap-3 mb-3">
                <FontAwesomeIcon icon={faLocationDot} width={25} />
                <div>
                  <h1 className="text-sm font-bold">Address</h1>
                  <p className="text-sm">
                    Jl. RAA Wiranatakusumah No. 11 Baleendah Kabupaten Bandung
                    40375
                  </p>
                </div>
              </div>
              <div className="flex gap-3 mb-3">
                <FontAwesomeIcon icon={faPhone} width={20} />
                <div>
                  <h1 className="text-sm font-bold">Phone</h1>
                  <p className="text-sm">(022) 5940714</p>
                </div>
              </div>
              <div className="flex gap-3 mb-3">
                <FontAwesomeIcon icon={faMailBulk} width={20} />
                <div>
                  <h1 className="text-sm font-bold">Email</h1>
                  <p className="text-sm">admin@smkn2baleendah.sch.id</p>
                </div>
              </div>
              <div className="flex gap-3 mb-3">
                <FontAwesomeIcon icon={faGlobe} width={20} />
                <div>
                  <h1 className="text-sm font-bold">Website</h1>
                  <p className="text-sm">www.smkn2baleendah.sch.id</p>
                </div>
              </div>
              <div className="flex gap-5 mb-3 h-20 w-full justify-center items-center">
                <Link href="https://www.facebook.com/smkn2baleendah/">
                  <FontAwesomeIcon icon={faFacebookSquare} width={30} />
                </Link>
                <Link href="https://www.instagram.com/smkn2baleendah/">
                  <FontAwesomeIcon icon={faInstagram} width={30} />
                </Link>
                <Link href="https://www.youtube.com/c/SMKNEGERI2BALEENDAH">
                  <FontAwesomeIcon icon={faYoutubeSquare} width={30} />
                </Link>
              </div>
            </div>
            <div>
              <form action="">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 rounded-md mb-3"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded-md mb-3"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 rounded-md mb-3"
                />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Message"
                  className="w-full p-3 rounded-md mb-3"></textarea>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-5 py-1 rounded-md">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
