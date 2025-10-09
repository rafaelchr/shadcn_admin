import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ImageCellProps {
  imagePath?: string;
}

const ImageCell = ({ imagePath }: ImageCellProps) => {
  const [open, setOpen] = useState<boolean>(false);

  if (!imagePath) {
    return <span className="text-gray-400 italic">No Image</span>;
  }

  const normalizedPath = imagePath.replace(/\\/g, "/").replace(/^\/+/, "");
  const imageURL = `${process.env.NEXT_PUBLIC_IMAGE_URL}/${normalizedPath}`;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="link"
          className="text-blue-600 font-normal p-0 h-auto bg-transparent underline underline-offset-[1px] hover:underline-color decoration-transparent hover:decoration-blue-600 cursor-pointer"
        >
          Click Here!
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Preview Gambar</DialogTitle>
        </DialogHeader>
        <div className="flex justify-center">
          <Image
            src={imageURL}
            alt="Preview"
            width={400}
            height={300}
            className="rounded-md object-cover w-full h-auto"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageCell;
