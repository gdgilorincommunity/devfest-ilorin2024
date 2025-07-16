import { Button } from "@chakra-ui/react";
import CropImage from "./crop-image";

interface DpFormProps {
  name: string;
  setName: (name: string) => void;
  setProfilePicture: (picture: string | null) => void;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  // onSubmit: () => void;
  // profilePicture: string | null;
  colors: {
    name: string;
    value: string;
    image: string;
  }[];
}

export default function DpForm({
  name,
  setName,
  setProfilePicture,
  selectedColor,
  setSelectedColor,
  // onSubmit,
  // profilePicture,
  colors,
}: DpFormProps) {
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.target.value);
  };

  return (
    <form noValidate className="space-y-8">
      <div>
        <label htmlFor="name" className="text-[#111827] font-medium">
          Name
        </label>

        <input
          id="name"
          className="p-4 rounded-lg w-full border-2 outline-none"
          type="text"
          placeholder="Enter name or nickname"
          value={name}
          name="name"
          maxLength={13}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <CropImage onCroppedImage={setProfilePicture} />

      <div>
        <label className="text-[#111827] font-medium">
          Select preferred color
        </label>

        <div className="flex items-center justify-between">
          {colors.map((color) => (
            <div
              key={color.value}
              className="mt-2 custom-radio flex items-center gap-2"
            >
              <input
                id={`radio-${color.value}`}
                type="radio"
                onChange={handleRadioChange}
                name="color"
                checked={selectedColor === color.value}
                value={color.value}
              />
              <label
                htmlFor={`radio-${color.value}`}
                className={`custom-radio-label ${color.value}`}
              >
                {color.name}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* <Button
        onClick={onSubmit}
        borderRadius={50}
        py={8}
        type="button"
        className="!bg-primary-body !text-white hover:opacity-80 w-full disabled:!bg-gray-400"
        isDisabled={
          name.trim() === "" ||
          selectedColor.trim() === "" ||
          profilePicture === null
        }
      >
        Generate
      </Button> */}
    </form>
  );
}
