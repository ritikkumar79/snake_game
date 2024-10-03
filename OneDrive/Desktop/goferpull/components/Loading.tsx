import Image from 'next/image';

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="text-center">
        <div className="">
          <Image
            src="/ss.webp"
            width={100}
            height={60}
            alt="Picture of the author"
            className="animate-bounce"
          />
        </div>
      </div>
    </div>
  );
}