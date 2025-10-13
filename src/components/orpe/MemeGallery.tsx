"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/Dialog";
import { cn } from "@/lib/utils";

interface MemeGalleryProps {
  className?: string;
}

const memeImages = [
  {
    src: "/orpe-car.jpg",
    alt: "ORPE car cruise meme",
  },
  {
    src: "/orpe-group.jpg",
    alt: "ORPE squad group meme",
  },
  {
    src: "/orpe-homer.jpg",
    alt: "ORPE homer meme",
  },
  {
    src: "/orpe-tattoo.jpg",
    alt: "ORPE tattoo meme",
  },
];

export function MemeGallery({ className }: MemeGalleryProps) {
  const [memes, setMemes] = useState(memeImages);
  const [selectedMeme, setSelectedMeme] = useState<
    (typeof memeImages)[0] | null
  >(null);

  const shuffleMemes = () => {
    const shuffled = [...memes];
    // Fisher-Yates shuffle algorithm
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setMemes(shuffled);
  };

  const openMemeDialog = (meme: (typeof memeImages)[0]) => {
    setSelectedMeme(meme);
  };

  const closeMemeDialog = () => {
    setSelectedMeme(null);
  };

  return (
    <div className={cn("fade-in-up", className)}>
      <Card variant="default" className="h-full">
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-white">Meme Gallery</h3>
            <Button
              onClick={shuffleMemes}
              variant="outline"
              size="sm"
              className="social-btn-glow hover:scale-105 transition-all duration-200">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Shuffle Memes
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4 flex-1">
            {memes.map((meme, index) => (
              <div
                key={`${meme.src}-${index}`}
                className="relative overflow-hidden rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => openMemeDialog(meme)}>
                <Image
                  className="w-full h-full object-cover"
                  src={meme.src}
                  alt={meme.alt}
                  width={250}
                  height={128}
                />
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Meme Dialog */}
      <Dialog isOpen={!!selectedMeme} onClose={closeMemeDialog}>
        <DialogContent className="p-0 max-w-5xl">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle>{selectedMeme?.alt}</DialogTitle>
            <DialogClose onClick={closeMemeDialog} />
          </DialogHeader>
          <div className="p-6 pt-4">
            {selectedMeme && (
              <div className="relative">
                <Image
                  src={selectedMeme.src}
                  alt={selectedMeme.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg"
                  unoptimized
                />
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
