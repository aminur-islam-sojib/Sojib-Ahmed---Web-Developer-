import type { ReactNode } from 'react';

interface HeaderGeneratorProps {
  children: ReactNode;
}

const HeaderGenerator = ({ children }: HeaderGeneratorProps) => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mt-2">{children}</h1>
      <div className="my-5 py-[2px] w-10 bg-amber-400 rounded-2xl"></div>
    </div>
  );
};

export default HeaderGenerator;
