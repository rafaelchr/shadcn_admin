"use client";

import { Button } from "@/components/ui/button";
import { Dialog } from "@radix-ui/react-dialog";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Image from "next/image";
import { createFilm } from "@/services/film-service";

const CreateFilmDialog = () => {
  const [title, setTitle] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const resetForm = () => {
    setTitle("");
    setUrl("");
    setDescription("");
    setImage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !url || !description || !image) {
      alert("Please fill in all fields!");
      return;
    }

    setLoading(true);

    try {
      console.log(1);

      const formData = new FormData();
      formData.append("title", title);
      formData.append("url", url);
      formData.append("description", description);
      formData.append("image", image);

      await createFilm(formData);

      // reset form
      resetForm();
      setIsOpen(false);
      alert("Film created successfully!");
    } catch (error) {
      console.error(error);
      alert("Something wrong while saving film");
    } finally {
      setLoading(false);
    }
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      resetForm();
      setIsOpen(false);
    }
  };

  return (
    <Dialog onOpenChange={handleOpenChange} open={isOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setIsOpen(true)}>Create</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] w-full">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Create Film</DialogTitle>
            <DialogDescription>
              Add new film rating. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-2 gap-6 my-3">
            {/* KOLOM KIRI */}
            <div className="grid gap-4 w-full">
              <div className="grid gap-3">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="ex. Hereditary"
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="url">URL</Label>
                <Input
                  id="url"
                  name="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="ex. https://example.com"
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="description">Description</Label>
                <textarea
                  id="description"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="ex. Film by Ari Aster ..."
                  className="min-h-[100px] rounded-md border px-3 py-2 text-sm resize-y focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>
            </div>

            {/* KOLOM KANAN */}
            <div className="flex flex-col gap-4 w-full">
              <div className="grid gap-3">
                <Label htmlFor="image">Image</Label>
                <Input
                  id="image"
                  type="file"
                  onChange={(e) => setImage(e.target.files?.[0] || null)}
                  accept="image/*"
                  name="image"
                />
              </div>

              <div className="w-full relative overflow-hidden rounded-lg border bg-gray-50 flex items-center justify-center aspect-video">
                {image ? (
                  <Image
                    src={URL.createObjectURL(image)}
                    alt="preview"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm p-4">
                    Preview akan muncul di sini (16:9)
                  </div>
                )}
              </div>
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button
                onClick={() => setIsOpen(false)}
                type="button"
                variant="outline"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button disabled={loading} type="submit">
              {loading ? "Saving" : "Save"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateFilmDialog;
