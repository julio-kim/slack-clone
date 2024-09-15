import { MessageContainer } from "@/components/message/Container";
import { MessageHeader } from "@/components/message/Header";
import { SideFilter } from "@/components/side/Filter";
import { SideMenu } from "@/components/side/Menu";

export default function Home() {
  return (
    <div className="font-sans antialiased h-screen flex">
      {/* Sidebar */}
      <SideFilter />

      {/* SideMenu */}
      <SideMenu />

      {/* Chat content */}
      <div className="flex-1 flex flex-col bg-white overflow-hidden">
        {/* Message Header */}
        <MessageHeader />

        {/* Chat Container */}
        <MessageContainer />
      </div>
    </div>
  );
}
