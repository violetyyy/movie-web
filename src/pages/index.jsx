import { Geist, Geist_Mono } from "next/font/google";
import data from "@/components/Data";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-between w-full px-4 py-3">
        <div className="flex items-center gap-2">
          <img src="images/film.svg" alt="logo" className="w-5 h-5" />
          <p className="text-[#4338CA] font-bold italic text-base">Movie Z</p>
        </div>

        <div className="flex gap-3">
          <button className="flex w-[97px] h-[36px] py-2 px-4 justify-center items-center rounded-md bg-white border border-[#E4E4E7] gap-2">
            <p>^</p>
            <p className="text-sm font-medium">Genre</p>
          </button>
          <div className="h-9 w-[379px] bg-white rounded-md p-3 flex gap-2.5 items-center  border border-[#E4E4E7]">
            <img src="images/search.svg" className="w-4 h-4" />
            <input
              type="text"
              placeholder="Search.."
              className="w-full h-4 outline-none"
            />
          </div>
        </div>

        <div className="flex items-center justify-center w-9 h-9 rounded-md border border-[#E4E4E7] bg-white">
          <img src="/images/moon.svg" className="w-5 h-5" />
        </div>
      </div>
      <div className="flex items-center w-screen overflow-x-scroll snap-x snap-mandatory scroll-smooth hide-scrollbar">
        <div className="bg-[url(/images/movie1.jpg)] bg-center bg-cover h-[800px] mb-[52px] min-w-[100vw] snap-center"></div>
        <div className="bg-[url(/images/movie2.avif)] bg-center bg-cover h-[800px] mb-[52px] min-w-[100vw] snap-center"></div>
        <div className="bg-[url(/images/movie3.webp)] bg-center bg-cover h-[800px] mb-[52px] min-w-[100vw] snap-center"></div>
      </div>

      <div>
        <div className="flex items-center justify-between mx-20 mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Upcoming</h2>
          <button className="text-sm font-medium text-black cursor-pointer hover:underline">
            See more →
          </button>
        </div>

        <div className="grid grid-cols-3 gap-[20px] mx-20 mb-20 md:grid-cols-6">
          {data.map((movie) => (
            <div
              key={movie.id}
              className="w-[200px] rounded-xl overflow-hidden hover:shadow-xl hover:cursor-pointer transition-all"
            >
              <img
                src={movie.imageUrl}
                alt={movie.title}
                className="w-full h-[300px] object-cover"
              />
              <div className="p-4 bg-[#F4F4F5]">
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                  {movie.title}
                </h3>
                <p className="text-sm text-gray-600">
                  ⭐ {`${movie.vote_average}/10`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-[60px] py-[40px] bg-[#4338CA] w-full text-white flex justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <img src="images/white-film.svg" alt="logo" className="w-5 h-5" />
            <p className="text-base italic font-bold ">Movie Z</p>
          </div>

          <p className="text-[14px]">© 2024 Movie Z. All Rights Reserved.</p>
        </div>

        <div className="flex gap-[96px] items-start text-[14px]">
          <div className="flex flex-col">
            <p className="mb-3">Contact Information</p>
            <div className="flex items-center gap-3 mb-6">
              <img src="images/mail.svg" alt="logo" className="w-4 h-4" />
              <div className="flex flex-col gap-1.5 leading-none">
                <p>Email:</p>
                <p>support@movieZ.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <img src="images/phone.svg" alt="logo" className="w-4 h-4" />
              <div className="flex flex-col gap-1.5 leading-none">
                <p>Phone:</p>
                <p>+976 (11) 123-4567</p>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-3">Follow us </p>
            <div className="flex gap-3">
              <p>Facebook</p>
              <p>Instagram</p>
              <p>Twitter</p>
              <p>Youtube</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
