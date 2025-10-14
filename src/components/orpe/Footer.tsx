"use client";

import { useState, useCallback } from "react";
import { Copy, ExternalLink, QrCode, Check } from "lucide-react";
import { site } from "@/config/site";

// Lazy-loaded QR code component
const QRCode = ({ value }: { value: string }) => {
  const [QRCodeComponent, setQRCodeComponent] = useState<React.ComponentType<{
    value: string;
    size?: number;
    style?: React.CSSProperties;
  }> | null>(null);

  useState(() => {
    import("react-qr-code").then((module) => {
      setQRCodeComponent(() => module.default);
    });
  });

  if (!QRCodeComponent) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="flex justify-center p-4 bg-white rounded-lg">
      <QRCodeComponent
        value={value}
        size={200}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
      />
    </div>
  );
};

// Utility function to build explorer URL
const buildExplorerUrl = (explorerBase: string, contract: string): string => {
  return `${explorerBase}/address/${contract}?utm_source=orpe-site&utm_medium=footer`;
};

export function Footer() {
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(site.contract);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      action();
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-zinc-900 border-t border-orange-500/20 py-16"
      aria-label="Site footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Contract Address Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-orange-500/20 p-8 max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-white mb-6">
              Contract Address
            </h3>

            {/* Chain Badge */}
            <div className="flex items-center justify-center mb-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30">
                <div className="w-6 h-6 mr-3 flex items-center justify-center">
                  <img src="/solanaLogo.svg" alt="Solana" className="w-6 h-6" />
                </div>
                <span className="text-orange-500 text-sm font-medium">
                  {site.chain.name}
                </span>
              </div>
            </div>

            {/* Address Container */}
            <div className="bg-zinc-900 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <p className="text-orange-500 font-mono text-sm truncate">
                    {site.contract}
                  </p>
                </div>
                {site.chain.verified && (
                  <div className="flex items-center ml-3 text-green-400 flex-shrink-0">
                    <Check size={16} className="mr-1" />
                    <span className="text-xs font-medium">Verified</span>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {/* Copy Button */}
              <button
                onClick={handleCopy}
                onKeyDown={(e) => handleKeyDown(e, handleCopy)}
                className="footer-copy-btn inline-flex items-center justify-center px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-lg text-orange-500 text-sm font-medium hover:bg-orange-500/20 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-zinc-900 transition-all duration-200"
                aria-label={`Copy contract address: ${site.contract}`}
                aria-live="polite">
                {copied ? (
                  <>
                    <Check size={16} className="mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy size={16} className="mr-2" />
                    Copy Address
                  </>
                )}
              </button>

              {/* Explorer Button */}
              <a
                href={buildExplorerUrl(site.chain.explorerBase, site.contract)}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-explorer-btn inline-flex items-center justify-center px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-lg text-orange-500 text-sm font-medium hover:bg-orange-500/20 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-zinc-900 transition-all duration-200">
                <ExternalLink size={16} className="mr-2" />
                View on {site.chain.explorerName}
              </a>

              {/* QR Toggle Button */}
              <button
                onClick={() => setShowQR(!showQR)}
                onKeyDown={(e) => handleKeyDown(e, () => setShowQR(!showQR))}
                className="footer-qr-toggle inline-flex items-center justify-center px-4 py-2 text-gray-400 text-sm font-medium hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-zinc-900 transition-all duration-200"
                aria-label={showQR ? "Hide QR code" : "Show QR code"}
                aria-expanded={showQR}
                aria-controls="qr-panel">
                <QrCode size={16} className="mr-2" />
                {showQR ? "Hide QR" : "Show QR"}
              </button>
            </div>

            {/* QR Code Panel */}
            <div
              id="qr-panel"
              className={`qr-panel ${showQR ? "open" : ""}`}
              aria-hidden={!showQR}>
              <div className="qr-panel-content mt-4">
                <QRCode value={site.contract} />
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="space-y-4">
            <p className="text-gray-300 text-sm max-w-4xl mx-auto leading-relaxed">
              <span className="font-bold">DISCLAIMER:</span> $ORPE IS A MEME
              TOKEN FOR ENTERTAINMENT ONLY. IT HAS NO INHERENT VALUE AND IS NOT
              AN INVESTMENT. NO FINANCIAL GAINS ARE GUARANTEED. WE ACCEPT NO
              LIABILITY FOR ITS VALUE.
            </p>
            <p className="text-gray-400 text-sm max-w-4xl mx-auto">
              $ORPE IS NOT AFFILIATED WITH MATT FURIE OR PEPE THE FROG.
              IT&apos;S AN ORANGE TRIBUTE TO THE GREEN FROG MEME.
            </p>
            <p className="text-orange-500 font-pixel text-sm">
              Powered by degeneracy.
            </p>
          </div>

          {/* Footer Strip */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
            {/* Copyright */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full flex items-center justify-center">
                <span className="text-zinc-900 text-sm font-bold">O</span>
              </div>
              <span className="text-orange-500 font-pixel text-sm">
                ORPE 2024–{currentYear}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
