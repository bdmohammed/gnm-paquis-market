import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="h-[180px]">
        <div className="w-full h-[50px] bg-[#115530]"></div>
        <main className="flex justify-center items-center">
          <Image
            className="w-[228px] h-[108px]"
            src="/logo.png"
            alt="Logo"
            width={228}
            height={108}
          />

          <div className="w-[172px] h-[34px] flex justify-center items-center">
            <Image src="/phone.svg" alt="phone Logo" width={34} height={34} />
            <p>
              <span>your Daily Needs!</span>
              <span>+41794750809</span>
            </p>
          </div>
        </main>
      </header>
      <div></div>
    </>
  );
}
