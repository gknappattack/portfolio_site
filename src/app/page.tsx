import NavBar from '@/components/navbar';
import Cover from "@/components/cover"
import TabPage from '@/components/tabpage';

export default function Home() {
  return (
    <div className="flex flex-col relative gap-48 bg-[#131b23] h-screen overflow-y-auto">
      <NavBar />
      <div className="flex flex-col gap-50">
        <Cover />
        <TabPage/>
      </div>
    </div>
  );
}
