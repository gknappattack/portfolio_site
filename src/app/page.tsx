import NavBar from '@/components/navbar';
import Cover from "@/components/cover"
import TabPage from '@/components/tabpage';

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col gap-16 overflow-y-auto bg-[#131b23] sm:gap-48">
      <NavBar />
      <div className="flex flex-col gap-12 sm:gap-20">
        <Cover />
        <TabPage/>
      </div>
    </div>
  );
}
