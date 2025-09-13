import NavBar from '@/components/navbar';
import Introduction from '@/components/introduction';
import Cover from "@/components/cover"
import TabPage from '@/components/tabpage';

export default function Home() {
  return (
    <div className="flex flex-col relative gap-48">
      <NavBar />
      <div className="flex flex-col gap-20">
        <Cover />
        <TabPage/>
      </div>
    </div>
  );
}
