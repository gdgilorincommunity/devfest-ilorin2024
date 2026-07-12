import { Button } from "@chakra-ui/react";
import { BsDownload } from "react-icons/bs";

interface DpCanvasProps {
  name: string;
  profilePicture: string | null;
  canvasRef: React.MutableRefObject<HTMLCanvasElement | null>;
}

export default function DpCanvas({
  name,
  profilePicture,
  canvasRef,
}: DpCanvasProps) {
  const handleDownload = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = `${name.toLowerCase()}-devfest-ilorin-dp.png`;
      link.click();
    }
  };

  return (
    <div className="dp-preview">
      <canvas
        ref={canvasRef}
        className="bg-white p-3 lg:w-[500px] lg:h-[500px]"
      ></canvas>

      {name && profilePicture && (
        <div className="flex justify-center items-center mt-4">
          <Button
            onClick={handleDownload}
            borderRadius={50}
            py={8}
            className="!bg-primary-body !text-white hover:opacity-80 flex items-center gap-2"
            isDisabled={!profilePicture && name.trim() !== ""}
          >
            Download DP <BsDownload />
          </Button>
        </div>
      )}
    </div>
  );
}
