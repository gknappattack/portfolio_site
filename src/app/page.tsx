import NavBar from '@/components/navbar';
import Introduction from '@/components/introduction';
import Cover from "@/components/cover"

export default function Home() {
  return (
    <div className="flex flex-col relative gap-48">
      <NavBar />
      <div>
        <Cover />
      </div>
    </div>
  );
}
