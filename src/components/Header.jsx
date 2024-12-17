import { SiCodechef } from "react-icons/si";
export const Header = () => {
  return (
    <header className="bg-orange-100 text-black flex items-center h-20 justify-start px-6 py-4 gap-2 text-2xl font-bold shadow-md shadow-orange-200/50">
      <SiCodechef className="size-9" />
      <h1>Smart Chef</h1>
    </header>
  );
};
