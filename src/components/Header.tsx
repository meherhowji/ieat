import { User } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 backdrop-blur-md z-50 border-[#333333]">
      <div className="container mx-auto px-24 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/new-logo.png" alt="iEAT Logo" className="h-7 w-7" />
          <span className="font-bold font-italic text-xl text-white manrope-800-spaced">iEAT</span>
        </Link>
        
        <div className="flex items-center space-x-4">
          <Popover>
            <PopoverTrigger asChild>
              <button className="rounded-full hover:ring-2 hover:ring-primary/20 transition-all">
                <Avatar className="h-6 w-6">
                  {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                  <AvatarImage src="./user.png" />
                  <AvatarFallback>
                    <User className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-72 p-4 bg-[#141414] border-[#333333]">
              <div className="flex items-center space-x-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="./user-popup.jpg" />
                  <AvatarFallback>
                    <User className="h-6 w-6" />
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-white">Sarah Dylan</h4>
                  <p className="text-sm text-gray-400">sarah.dylan@accolite.com</p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="text-sm">
                  <div className="flex justify-between py-1">
                    <span className="text-gray-400">Role</span>
                    <span className="font-medium text-white">Analyst</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-400">Department</span>
                    <span className="font-medium text-white">Research</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-400">Location</span>
                    <span className="font-medium text-white">New York</span>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
};