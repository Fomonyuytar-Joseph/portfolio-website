import Navbar from "@/components/molecules/navabar.molecule";

export default function Home() {
  return (
    <div className="w-full bg-primary-navy h-screen">
      <div className="w-[1024px] mx-auto">
        <Navbar />
      </div>
    </div>
  );
}
