import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col max-w-md gap-4">
      <label className="font-semibold">Username</label>
      <input
        type="text"
        className="w-full border border-gray-800 rounded min-h-[44px] p-2"
      />

      <label className="font-semibold">Password</label>
      <div>
        <input
          type="password"
          className="w-full border border-gray-800 rounded min-h-[44px] p-2 "
        />
      </div>
      <div className="flex gap-2">
        <input type="checkbox" />
        <label className="font-semibold">Keep me logged in</label>
      </div>

      <Link href="/survey">
        <button className="w-full py-2 text-lg text-white bg-blue-800 rounded">
          Start test
        </button>
      </Link>
    </div>
  );
}
