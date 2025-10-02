import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setClickState } from '../../../store/ClickStateSlice';
import { ChevronDown } from 'lucide-react';

export default function GradientBorderButton() {
  const [clicked, setClicked] = useState<boolean>(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setClickState(clicked));
  }, [clicked, dispatch]);

  const handleGradientButton = () => {
    setClicked(!clicked);
  };

  return (
    <div className="">
      <button
        onClick={handleGradientButton}
        className="relative h-12 w-auto px-5 text-[var(--primary)] bg-[#1e1e1f] rounded-tr-2xl rounded-bl-2xl cursor-pointer border-none z-[1] group"
        style={{
          boxShadow: '0 2px 5px #00000040',
          transition: '0.25s ease-in',
        }}
      >
        {/* ::before pseudo-element - Gradient border (default state) */}
        <span
          className={`absolute inset-0 rounded-tr-2xl rounded-bl-2xl -z-10 transition-all ${
            clicked ? 'opacity-0' : 'group-hover:opacity-0'
          }`}
          style={{
            content: '""',
            padding: '1px',
            background:
              'linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)',
            WebkitMask:
              'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            transition: '0.25s ease-in',
            zIndex: -1,
          }}
        />
        {/* ::before hover/active state - Yellow gradient border */}
        <span
          className={`absolute inset-0 rounded-tr-2xl rounded-bl-2xl -z-10 transition-all ${
            clicked ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
          style={{
            content: '""',
            padding: '1px',
            background:
              'linear-gradient(to bottom right, hsl(45, 100%, 71%) 0%, hsla(36, 100%, 69%, 0) 50%)',
            WebkitMask:
              'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            transition: '0.25s ease-in',
            zIndex: -1,
          }}
        />
        {/* ::after pseudo-element - Inner background (default) */}
        <span
          className={`absolute rounded-tr-2xl rounded-bl-2xl -z-10 transition-all ${
            clicked ? 'opacity-0' : ''
          }`}
          style={{
            content: '""',
            inset: '1px',
            background: '#1e1e1f',
            transition: '0.25s ease-in',
            zIndex: -1,
          }}
        />
        {/* ::after hover/active state - Yellow tinted background */}
        <span
          className={`absolute rounded-tr-2xl rounded-bl-2xl -z-10 transition-all ${
            clicked ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
          style={{
            content: '""',
            inset: '1px',
            background:
              'linear-gradient(135deg, hsla(45, 100%, 71%, 0.251) 0%, hsla(35, 100%, 68%, 0) 59.86%), hsl(240, 2%, 13%)',
            transition: '0.25s ease-in',
            zIndex: -1,
          }}
        />
        {/* Button text */}
        <span className="block sm:hidden">
          <ChevronDown />
        </span>
        <span className=" hidden sm:block">Show Contacts</span>
      </button>
    </div>
  );
}
