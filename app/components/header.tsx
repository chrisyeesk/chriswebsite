import { Button } from '@/components/ui/button';
import { Sparkle } from 'lucide-react';
import React from 'react';

const Header = () => {
  return (
    <div className="h-20 items-center fixed w-full justify-between py-3 px-3 flex bg-white bg-opacity-95">
      <div className="ml-3">
        <Sparkle />
      </div>
      <Button className="rounded-xl bg-white text-black">Say Hello</Button>
    </div>
  );
};

export default Header;
