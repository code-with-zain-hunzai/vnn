import { Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <div className="bg-custom-red py-2 px-4">
      <div className="container mx-auto flex justify-between items-center text-sm">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>Phone: 123-456-789</span>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-white">
          <Mail className="w-4 h-4" />
          <span>Email: dbcharlestaxesny32@gmail.com</span>
        </div>
      </div>    
    </div>
  );
};

export default Header;