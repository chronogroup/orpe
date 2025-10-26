"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { MemeGallery } from "@/components/orpe/MemeGallery";

interface Sample {
  src: string;
  label: string;
}

const samples: Sample[] = [
  { src: "/orpe-group.jpg", label: "Squad" },
  { src: "/orpe-car.jpg", label: "Cruise" },
  { src: "/orpe-tattoo.jpg", label: "Tattoo" },
  { src: "/orpe-homer.jpg", label: "Homer" },
];

export function MemeStudio() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imgSrc, setImgSrc] = useState(samples[1].src);
  const [topText, setTopText] = useState("ORANGE > GREEN");
  const [bottomText, setBottomText] = useState("HAPPY FROG ENERGY");
  const [fontSize, setFontSize] = useState(48);
  const [userUpload, setUserUpload] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const wrapText = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      text: string,
      maxWidth: number
    ): string[] => {
      const words = text.split(" ");
      const lines: string[] = [];
      let line = "";

      for (let i = 0; i < words.length; i++) {
        const test = line ? line + " " + words[i] : words[i];
        const w = ctx.measureText(test).width;
        if (w > maxWidth && i > 0) {
          lines.push(line);
          line = words[i];
        } else {
          line = test;
        }
      }
      if (line) lines.push(line);
      return lines;
    },
    []
  );

  const wrapAndDraw = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      text: string,
      x: number,
      y: number,
      maxWidth: number
    ) => {
      const lines = wrapText(ctx, text, maxWidth);
      lines.forEach((line, i) => {
        const yy = y + i * (fontSize + 8);
        ctx.strokeText(line, x, yy);
        ctx.fillText(line, x, yy);
      });
    },
    [fontSize, wrapText]
  );

  const draw = useCallback(async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    try {
      setIsLoading(true);
      setError(null);
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Could not get canvas context");

      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = userUpload || imgSrc;

      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = () => reject(new Error("Failed to load image"));
      });

      const maxW = 900;
      const ratio = img.width / img.height;
      canvas.width = maxW;
      canvas.height = Math.round(maxW / ratio);

      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      ctx.textAlign = "center";
      ctx.fillStyle = "white";
      ctx.strokeStyle = "black";
      ctx.lineWidth = Math.max(4, fontSize / 10);
      ctx.font = `bold ${fontSize}px Impact, Arial Black, Arial, sans-serif`;

      wrapAndDraw(
        ctx,
        topText.toUpperCase(),
        canvas.width / 2,
        fontSize + 12,
        canvas.width * 0.9
      );
      const lines = wrapText(ctx, bottomText.toUpperCase(), canvas.width * 0.9);
      lines.forEach((line, i) => {
        const y = canvas.height - (lines.length - i - 0.5) * (fontSize + 8);
        ctx.strokeText(line, canvas.width / 2, y);
        ctx.fillText(line, canvas.width / 2, y);
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to draw meme");
      console.error("Error drawing meme:", err);
    } finally {
      setIsLoading(false);
    }
  }, [
    imgSrc,
    topText,
    bottomText,
    fontSize,
    userUpload,
    wrapText,
    wrapAndDraw,
  ]);

  useEffect(() => {
    draw();
  }, [draw]);

  const download = () => {
    try {
      const canvas = canvasRef.current;
      if (!canvas) throw new Error("Canvas not found");

      const url = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.href = url;
      a.download = "orpe-meme.png";
      a.click();
    } catch (err) {
      console.error("Error downloading meme:", err);
      setError("Failed to download meme");
    }
  };

  const onUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Please select an image file");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      // 10MB limit
      setError("Image file too large. Please select a file under 10MB");
      return;
    }

    try {
      const url = URL.createObjectURL(file);
      setUserUpload(url);
      setError(null);
    } catch (err) {
      console.error("Error uploading file:", err);
      setError("Failed to upload image");
    }
  };

  return (
    <Section id="meme">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-5xl font-pixel-large text-orange-500 mb-4">
            Meme Studio
          </h2>
          <p className="text-xl text-gray-300">
            Make your own Orange Pepe meme. Download & share with #ORPE.
          </p>
        </div>

        {error && (
          <div className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 mb-8">
            {error}
          </div>
        )}

        <div className="mt-8 grid lg:grid-cols-2 gap-8 mb-16">
          <div className="card">
            <canvas
              ref={canvasRef}
              className="w-full rounded-xl border border-white/10"
              aria-label="Meme preview"
            />
            {isLoading && (
              <div className="mt-4 text-center text-white/60">
                Generating meme...
              </div>
            )}
          </div>

          <div className="card space-y-4">
            <div>
              <label htmlFor="top-text" className="text-sm text-white/70">
                Top Text
              </label>
              <input
                id="top-text"
                value={topText}
                onChange={(e) => setTopText(e.target.value)}
                className="mt-1 w-full rounded-md bg-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-orange-500 text-white"
                maxLength={50}
              />
            </div>

            <div>
              <label htmlFor="bottom-text" className="text-sm text-white/70">
                Bottom Text
              </label>
              <input
                id="bottom-text"
                value={bottomText}
                onChange={(e) => setBottomText(e.target.value)}
                className="mt-1 w-full rounded-md bg-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-orange-500 text-white"
                maxLength={50}
              />
            </div>

            <div className="flex items-center gap-3">
              <label htmlFor="font-size" className="text-sm text-white/70">
                Font Size
              </label>
              <input
                id="font-size"
                type="range"
                min="20"
                max="96"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="w-full"
              />
              <span className="text-sm text-white">{fontSize}px</span>
            </div>

            <div className="pt-2">
              <div className="text-sm text-white/70 mb-2">Choose Image</div>
              <div className="flex flex-wrap gap-2">
                {samples.map((sample) => (
                  <button
                    key={sample.src}
                    onClick={() => {
                      setUserUpload(null);
                      setImgSrc(sample.src);
                    }}
                    className={`px-3 py-2 rounded-md border transition-colors ${
                      imgSrc === sample.src && !userUpload
                        ? "border-orange-500 bg-white/10"
                        : "border-white/10 bg-white/5 hover:bg-white/10"
                    }`}
                    aria-pressed={imgSrc === sample.src && !userUpload}>
                    {sample.label}
                  </button>
                ))}
                <label className="px-3 py-2 rounded-md border border-white/10 bg-white/5 cursor-pointer hover:bg-white/10 transition-colors">
                  Upload
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={onUpload}
                    aria-label="Upload custom image"
                  />
                </label>
              </div>
            </div>

            <button
              onClick={download}
              className="btn btn-primary w-full"
              disabled={isLoading}>
              {isLoading ? "Generating..." : "Download Meme"}
            </button>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-xl lg:text-3xl font-pixel text-orange-500 mb-3">
              Gallery
            </h3>
            <p className="text-lg text-gray-300">
              Check out some Orange Pepe classics
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <MemeGallery />
          </div>
        </div>
      </Container>
    </Section>
  );
}
