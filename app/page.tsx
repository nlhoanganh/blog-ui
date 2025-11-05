import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-pink-100 via-rose-200 to-pink-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <main className="flex flex-col items-center justify-center px-8 py-24 rounded-3xl shadow-xl bg-white/60 dark:bg-white/10 backdrop-blur-sm border border-white/20">
        <h1 className="text-5xl font-extrabold text-rose-600 dark:text-pink-400 drop-shadow-lg animate-pulse">
          Anh yêu em 💖
        </h1>
        <p className="mt-4 text-3xl font-light text-rose-500 dark:text-pink-300">
          Xuân Mai 🌸
        </p>
      </main>
    </div>
  );
}