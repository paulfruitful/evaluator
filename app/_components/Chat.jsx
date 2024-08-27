import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Josefin_Sans } from "next/font/google";
const josefin=Josefin_Sans({subsets:['latin'],weight:['100','200','300','400','500','600']})
const Chat = () => {
  return (
    <div className="bg-white flex flex-col w-[70vw] rounded-lg justify-between items-center p-6 shadow-lg h-[60vh]">
      {/* Top Text Bubble */}
      <div className="self-start flex justify-center w-full mb-auto">
        <span   style={{marginTop:'-30px',fontFamily:josefin.style}} className="text-indigo-700  p-6 text-center text flex justify-center p-3 text-3xl">
          Evaluator AI
        </span>
      </div>

      {/* Bottom Input Field and Icon */}
      <div className="w-full flex justify-center items-center mt-auto">
        <div className="relative w-5/6 lg:w-1/2">
          <input
            type="text"
            placeholder="Type Message Here"
            className="border-0 border-gray-600 text-black bg-gray-200 w-full p-4 outline-gray-700 focus:bg-gray-300 pr-12 rounded-xl border-solid"
          />
          <button>
            <FontAwesomeIcon
              icon={faPaperPlane}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-900 text-lg cursor-pointer"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
