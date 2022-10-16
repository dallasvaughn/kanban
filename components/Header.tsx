import Image from 'next/image';
import logoMobile from '../public/logo-mobile.svg';
import chevronDown from '../public/icon-chevron-down.svg';
import add from '../public/icon-add.svg';
import edit from '../public/icon-vertical-ellipsis.svg';
import Button from './Button';

const Header = () => {
  return (
    <header className="absolute bg-white w-full top-0 h-16 p-4 flex gap-4 items-center">
      <Image src={logoMobile} />
      <h1 className="text-lg font-bold leading-md flex items-center gap-2 mr-auto">
        Platform Launch
        <Image src={chevronDown} />
      </h1>
      <Button
        width="12"
        bg="main-purple"
        color="white"
        fontSize="xl"
        opacity="25"
      >
        <Image className="rotate-45" src={add} />
      </Button>
      <Image src={edit} height={16} width={4} />
    </header>
  );
};

export default Header;
