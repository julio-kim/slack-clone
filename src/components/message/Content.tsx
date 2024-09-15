import Image from "next/image";

export const Content = () => {
  return (
    <>
      {/* A message */}
      <div className="flex items-start mb-4 text-sm">
        <Image
          src="/images/dog.png"
          alt="Profile"
          width={40}
          height={40}
          className="rounded mr-3"
        />
        <div className="flex-1 overflow-hidden">
          <div>
            <span className="font-bold">Summer Kim</span>
            <span className="text-gray-500 text-xs ml-1">오전 11:46</span>
          </div>
          <p className="text-black leading-normal">
            {"Sir, I'd like to go for a walk."}
          </p>
        </div>
      </div>
      <div className="flex items-start mb-4 text-sm">
        <Image
          src="/images/man.png"
          alt="Profile"
          width={40}
          height={40}
          className="rounded mr-3"
        />
        <div className="flex-1 overflow-hidden">
          <div>
            <span className="font-bold">Julio Kim</span>
            <span className="text-gray-500 text-xs ml-1">오후 11:46</span>
          </div>
          <p className="text-black leading-normal">
            Okay. Can we just finish writing this template and get out of here?
          </p>
          <p className="text-black leading-normal">
            {"And, you've finished eating, so you can go for a walk."}
          </p>
        </div>
      </div>
    </>
  );
};
