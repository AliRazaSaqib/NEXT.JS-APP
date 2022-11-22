import Link from "next/link";
export default function forget() {
  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg w-3/4 max-w-screen-xl p-5 items-center">
        <div className="md:w-1/2 w-full md:px-4 lg:px-8 xl:px-8 sm:px-2">
          <h2 className="font-bold text-2xl text-[#002D74]">Forget</h2>

          <form action="" className="flex flex-col gap-4">
            <input
              className="p-2 mt-8 rounded-xl border"
              type="email"
              name="email"
              placeholder="Email"
            />

            <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">
              Forget
            </button>
          </form>

          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>

          <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
            <p></p>

            <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
              <Link href={"/auth/login"} as={"/auth/login"}>
                Login
              </Link>
            </button>
          </div>
        </div>

        <div className="md:block hidden w-1/2">
          <img
            className="rounded-2xl"
            src={`/login.jpg`}
            alt="image not found"
          />
        </div>
      </div>
    </section>
  );
}
