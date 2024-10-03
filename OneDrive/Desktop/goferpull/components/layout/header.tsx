import {
    AtSignIcon,
    BaggageClaim,
    BellRingIcon,
    GridIcon,
    HomeIcon,
    MessageCircleIcon,
    MoreVerticalIcon,
    NetworkIcon,
    UserCircle2,
  } from "lucide-react";
  import { cn } from "../../utils/cn";
  import { HeaderSearchDropdown } from "../HeaderSearchDropdown";
  import { Popover, PopoverTrigger, PopoverContent } from "../primitives/Popover";
  import Image from 'next/image'
  import Link from 'next/link';
  import { useAuth } from '../../hooks/useAuth';
  
  const MenuItemLayout: React.FC<{ icon: any; text?: any; active?: boolean }> = ({
    icon,
    text,
    active,
  }) => {
    return (
      <div
        className={cn(
          "w-12 sm:w-16 md:w-20 flex flex-col items-center justify-center h-full text-zinc-600 hover:text-slate-900 cursor-pointer",
          active && "border-b-2 border-black text-slate-900"
        )}
      >
        <div className="flex items-center justify-start">{icon}</div>
        {text && <span className="text-xs mt-1 hidden lg:inline">{text}</span>}
      </div>
    );
  };
  
  export const Header = () => {
    // const { user, logout } = useAuth();
  
    return (
      <>
      <div
        className="bg-white w-full flex justify-center h-14 border-b border-slate-200 sticky top-0 z-[1]"
        style={{ margin: "0 auto" }}
      >
        <div className="w-[1200px] flex flex-row items-center">
          
          <span className="rounded shrink-0 mr-2">
          <Link href="/">
            <Image
              src="/ss.webp"
              width={100}
              height={60}
              alt="Picture of the author"
            />
             </Link>
          </span>
         
          <HeaderSearchDropdown />
  
          <nav>
          {/* {user ? (
            <>
              <Link href="/dashboard">
                <a className="mr-4">Dashboard</a>
              </Link>
              <button onClick={logout} className="bg-red-600 px-4 py-2 rounded">Logout</button>
            </>
          ) : (
            <>
              <Link href="/login">
                <a className="mr-4">Login</a>
              </Link>
              <Link href="/signup">
                <a className="bg-green-600 px-4 py-2 rounded">Sign Up</a>
              </Link>
            </>
          )} */}
        </nav>
          <div className="flex-1" />
          <div className="hidden sm:flex h-full">
            <MenuItemLayout icon={<HomeIcon size={19} />} text="Home" active />
            <MenuItemLayout icon={<NetworkIcon size={19} />} text="My Network" />
            <MenuItemLayout icon={<BaggageClaim size={19} />} text="Jobs" />
            <MenuItemLayout
              icon={<MessageCircleIcon size={19} />}
              text="Messaging"
            />
            <MenuItemLayout
              icon={<BellRingIcon size={19} />}
              text="Notifications"
            />
            <div className="flex flex-row items-center divide-x h-full">
              <MenuItemLayout icon={<UserCircle2 size={19} />} text="Me" />
              <MenuItemLayout icon={<GridIcon size={19} />} text="Knowledge" />
            </div>
            <MenuItemLayout icon={<AtSignIcon size={19} />} text="Blog" />
          </div>
          <div className="flex sm:hidden h-full">
            <MenuItemLayout icon={<HomeIcon />} text="Home" active />
            <MenuItemLayout icon={<NetworkIcon />} text="My Network" />
            <MenuItemLayout icon={<BaggageClaim />} text="Jobs" />
            <MenuItemLayout icon={<MessageCircleIcon />} text="Messaging" />
            <MenuItemLayout icon={<BellRingIcon />} text="Notifications" />
            <Popover>
              <PopoverTrigger asChild>
                <span>
                  <MenuItemLayout icon={<MoreVerticalIcon />} />
                </span>
              </PopoverTrigger>
              <PopoverContent className="w-48 flex flex-row space-x-4">
                <MenuItemLayout icon={<UserCircle2 />} />
                <MenuItemLayout icon={<GridIcon />} />
                <MenuItemLayout icon={<AtSignIcon />} />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
      </>
    );
  };
  