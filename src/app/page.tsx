import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white rounded-lg outline-2 outline-offset-[-2px] outline-gray-300 inline-flex flex-col justify-start items-start overflow-hidden">
      <div className="w-[1440px] h-[3279px] relative bg-zinc-900 border-gray-200">
        <div className="w-[1440px] h-[2820px] left-0 top-0 absolute bg-black/0 border-gray-200">
          {/* Hero Section */}
          <div className="w-[1440px] h-[800px] left-0 top-[80px] absolute bg-gradient-to-br from-zinc-900 via-orange-500/10 to-zinc-900 border-gray-200 overflow-hidden">
            <div className="w-[1440px] h-[800px] left-0 top-0 absolute bg-black/0 border-gray-200" />
            <div className="w-[1280px] h-[800px] left-[80px] top-0 absolute bg-black/0 border-gray-200">
              <div className="w-48 h-48 left-[544px] top-[124px] absolute bg-black/0 border-gray-200">
                <Image
                  className="w-48 h-48 left-0 top-0 absolute rounded-full shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)] border-4 border-orange-500"
                  src="https://placehold.co/192x192"
                  alt="ORPE Logo"
                  width={192}
                  height={192}
                />
              </div>
              <div className="w-96 h-24 left-[448px] top-[348px] absolute text-center justify-start text-black/0 text-8xl font-normal font-press-start leading-[96px]">
                ORPE
              </div>
              <div className="w-[590px] h-14 left-[359px] top-[460px] absolute text-center justify-start text-white text-4xl font-normal font-press-start leading-[48px]">
                Welcome to Orpe
              </div>
              <div className="w-[891px] h-8 left-[208.98px] top-[532px] absolute text-center justify-start">
                <span className="text-gray-300 text-2xl font-normal font-sans leading-loose">
                  Orange is the new{" "}
                </span>
                <span className="text-teal-500 text-2xl font-normal font-sans leading-loose">
                  green
                </span>
                <span className="text-gray-300 text-2xl font-normal font-sans leading-loose">
                  {" "}
                  🍊🐸
                </span>
              </div>
              <div className="w-[534.23px] h-16 left-[372.88px] top-[612px] absolute bg-black/0 border-gray-200">
                <div className="w-36 h-16 left-0 top-0 absolute bg-orange-500 rounded-full border-gray-200">
                  <div className="w-20 h-7 left-[32px] top-[21px] absolute text-center justify-start text-zinc-900 text-lg font-bold font-sans">
                    Buy Orpe
                  </div>
                </div>
                <div className="w-40 h-16 left-[169.62px] top-0 absolute bg-black/0 rounded-full outline-2 outline-offset-[-2px] outline-orange-500">
                  <div className="w-24 h-7 left-[34px] top-[21px] absolute text-center justify-start text-orange-500 text-lg font-bold font-sans">
                    View Chart
                  </div>
                </div>
                <div className="w-44 h-16 left-[359.23px] top-0 absolute bg-gradient-to-r from-orange-500 to-orange-400 rounded-full border-gray-200">
                  <div className="w-28 h-7 left-[32px] top-[21px] absolute text-center justify-start text-zinc-900 text-lg font-bold font-sans">
                    Join the Cult
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The Orpe Theory Section */}
          <div className="w-[1280px] h-96 left-[80px] top-[949px] absolute bg-black/0 border-gray-200">
            <div className="w-[608px] h-96 left-[32px] top-0 absolute bg-black/0 border-gray-200">
              <div className="w-[581px] h-20 left-0 top-[61px] absolute justify-start text-orange-500 text-4xl font-normal font-press-start leading-[60px]">
                The Orpe Theory
              </div>
              <div className="w-80 h-11 left-0 top-[152.50px] absolute justify-start text-white text-4xl font-normal font-space-grotesk leading-10">
                The Pond of Apathy
              </div>
              <div className="w-[608px] h-10 left-0 top-[224.50px] absolute justify-start text-gray-300 text-2xl font-normal font-space-grotesk leading-10">
                &ldquo;Every frog looked the same. Every meme felt tired.&rdquo;
              </div>
              <div className="w-64 h-7 left-0 top-[295.50px] absolute justify-start text-gray-400 text-lg font-normal font-sans leading-7">
                One frog refused to blend in.
              </div>
            </div>
            <div className="w-[608px] h-96 left-[640px] top-0 absolute bg-black/0 border-gray-200">
              <Image
                className="w-96 h-96 left-[112px] top-0 absolute rounded-lg shadow-[0px_0px_20px_0px_rgba(255,122,0,0.50)] border-gray-200"
                src="https://placehold.co/384x384"
                alt="ORPE Frog"
                width={384}
                height={384}
              />
            </div>
          </div>

          {/* Tokenomics Section */}
          <div className="w-[1440px] h-[620px] left-0 top-[1456px] absolute bg-gradient-to-b from-zinc-900 to-orange-500/5 border-gray-200">
            <div className="w-[1280px] h-96 left-[80px] top-[96px] absolute bg-black/0 border-gray-200">
              <div className="w-[1232px] h-24 left-[24px] top-0 absolute bg-black/0 border-gray-200">
                <div className="w-96 h-10 left-[435.98px] top-0 absolute text-center justify-start text-orange-500 text-4xl font-normal font-press-start leading-10">
                  Tokenomics
                </div>
                <div className="w-52 h-7 left-[518.02px] top-[64px] absolute text-center justify-start text-gray-300 text-xl font-normal font-sans leading-7">
                  Simple. Fair. Orange.
                </div>
              </div>
              <div className="w-[1232px] h-64 left-[24px] top-[156px] absolute bg-black/0 border-gray-200">
                {/* Total Supply Card */}
                <div className="w-96 h-64 left-0 top-0 absolute bg-zinc-900 rounded-2xl outline-2 outline-offset-[-2px] outline-orange-500/30">
                  <div className="w-16 h-16 left-[162.66px] top-[34px] absolute bg-orange-500 rounded-full border-gray-200">
                    <div className="w-6 h-8 left-[20px] top-[16px] absolute bg-black/0 border-gray-200">
                      <div className="w-6 h-6 left-0 top-[3px] absolute inline-flex justify-center items-center">
                        <div className="w-6 h-6 relative bg-black/0 border-gray-200 overflow-hidden">
                          <div className="w-6 h-6 left-0 top-0 absolute bg-zinc-900" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-80 h-8 left-[34px] top-[122px] absolute bg-black/0 border-gray-200">
                    <div className="w-36 h-8 left-[87.66px] top-[1px] absolute text-center justify-start text-white text-2xl font-bold font-sans">
                      Total Supply
                    </div>
                  </div>
                  <div className="w-80 h-9 left-[34px] top-[170px] absolute bg-black/0 border-gray-200">
                    <div className="w-9 h-9 left-[144.27px] top-0 absolute text-center justify-start text-orange-500 text-3xl font-bold font-sans">
                      1B
                    </div>
                  </div>
                  <div className="w-80 h-6 left-[34px] top-[214px] absolute bg-black/0 border-gray-200">
                    <div className="w-28 h-6 left-[110.06px] top-[2px] absolute text-center justify-start text-gray-400 text-base font-normal font-sans">
                      ORPE Tokens
                    </div>
                  </div>
                </div>

                {/* Liquidity Card */}
                <div className="w-96 h-64 left-[421.33px] top-0 absolute bg-zinc-900 rounded-2xl outline-2 outline-offset-[-2px] outline-teal-500/30">
                  <div className="w-16 h-16 left-[162.66px] top-[34px] absolute bg-teal-500 rounded-full border-gray-200">
                    <div className="w-5 h-8 left-[21.50px] top-[16px] absolute bg-black/0 border-gray-200">
                      <div className="w-5 h-6 left-0 top-[3px] absolute inline-flex justify-center items-center">
                        <div className="w-5 h-6 relative bg-black/0 border-gray-200 overflow-hidden">
                          <div className="w-5 h-6 left-0 top-0 absolute bg-zinc-900" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-80 h-8 left-[34px] top-[122px] absolute bg-black/0 border-gray-200">
                    <div className="w-28 h-8 left-[109.62px] top-[1px] absolute text-center justify-start text-white text-2xl font-bold font-sans">
                      Liquidity
                    </div>
                  </div>
                  <div className="w-80 h-9 left-[34px] top-[170px] absolute bg-black/0 border-gray-200">
                    <div className="w-8 h-9 left-[147.97px] top-0 absolute text-center justify-start text-teal-500 text-3xl font-bold font-sans">
                      ✅
                    </div>
                  </div>
                  <div className="w-80 h-6 left-[34px] top-[214px] absolute bg-black/0 border-gray-200">
                    <div className="w-32 h-6 left-[102.14px] top-[2px] absolute text-center justify-start text-gray-400 text-base font-normal font-sans">
                      Locked Forever
                    </div>
                  </div>
                </div>

                {/* Team Wallet Card */}
                <div className="w-96 h-64 left-[842.66px] top-0 absolute bg-zinc-900 rounded-2xl outline-2 outline-offset-[-2px] outline-gray-600">
                  <div className="w-16 h-16 left-[162.67px] top-[34px] absolute bg-gray-600 rounded-full border-gray-200">
                    <div className="w-7 h-8 left-[17px] top-[16px] absolute bg-black/0 border-gray-200">
                      <div className="w-7 h-6 left-0 top-[3px] absolute inline-flex justify-center items-center">
                        <div className="w-7 h-6 relative bg-black/0 border-gray-200 overflow-hidden">
                          <div className="w-7 h-6 left-0 top-0 absolute bg-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-80 h-8 left-[34px] top-[122px] absolute bg-black/0 border-gray-200">
                    <div className="w-36 h-8 left-[88.80px] top-[1px] absolute text-center justify-start text-white text-2xl font-bold font-sans">
                      Team Wallet
                    </div>
                  </div>
                  <div className="w-80 h-9 left-[34px] top-[170px] absolute bg-black/0 border-gray-200">
                    <div className="w-14 h-9 left-[135.31px] top-0 absolute text-center justify-start text-gray-400 text-3xl font-bold font-sans">
                      0%
                    </div>
                  </div>
                  <div className="w-80 h-6 left-[34px] top-[214px] absolute bg-black/0 border-gray-200">
                    <div className="w-36 h-6 left-[88.14px] top-[2px] absolute text-center justify-start text-gray-400 text-base font-normal font-sans">
                      Community Owned
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Community Section */}
          <div className="w-[1440px] h-[744px] left-0 top-[2076px] absolute bg-zinc-900 border-gray-200">
            <div className="w-[1280px] h-[552px] left-[80px] top-[96px] absolute bg-black/0 border-gray-200">
              <div className="w-[1232px] h-24 left-[24px] top-0 absolute bg-black/0 border-gray-200">
                <div className="w-[654px] h-10 left-[291.98px] top-0 absolute text-center justify-start text-orange-500 text-4xl font-normal font-press-start leading-10">
                  Join the Community
                </div>
                <div className="w-96 h-7 left-[429.81px] top-[64px] absolute text-center justify-start text-gray-300 text-xl font-normal font-sans leading-7">
                  Connect with fellow orange enthusiasts
                </div>
              </div>
              <div className="w-[1232px] h-96 left-[24px] top-[156px] absolute bg-black/0 border-gray-200">
                <div className="w-[584px] h-96 left-0 top-0 absolute bg-black/0 border-gray-200">
                  <div className="w-[584px] h-16 left-0 top-0 absolute bg-black/0 border-gray-200">
                    <div className="w-28 h-16 left-[68px] top-0 absolute justify-start text-white text-lg font-bold font-sans leading-7">
                      Follow on X
                    </div>
                    <div className="w-6 h-6 left-[32px] top-[19px] absolute inline-flex justify-center items-center overflow-hidden">
                      <div className="w-6 h-6 relative bg-black/0 border-gray-200 overflow-hidden">
                        <div className="w-6 h-5 left-0 top-[2.25px] absolute bg-white" />
                      </div>
                    </div>
                    <div className="w-32 h-16 left-[292.25px] top-0 absolute justify-start text-white text-lg font-bold font-sans leading-7">
                      Join Telegram
                    </div>
                    <div className="w-6 h-6 left-[257px] top-[19px] absolute inline-flex justify-center items-center overflow-hidden">
                      <div className="w-6 h-6 relative bg-black/0 border-gray-200 overflow-hidden">
                        <div className="w-6 h-6 left-0 top-[0.38px] absolute bg-white" />
                      </div>
                    </div>
                  </div>
                  <div className="w-[584px] h-44 left-0 top-[96px] absolute bg-orange-500/10 rounded-2xl outline-1 outline-offset-[-1px] outline-orange-500/20">
                    <div className="w-[518px] h-8 left-[33px] top-[33px] absolute bg-black/0 border-gray-200">
                      <div className="w-52 h-8 left-0 top-[1px] absolute justify-start text-orange-500 text-2xl font-bold font-sans">
                        Community Stats
                      </div>
                    </div>
                    <div className="w-[518px] h-14 left-[33px] top-[81px] absolute bg-black/0 border-gray-200">
                      <div className="w-60 h-14 left-0 top-0 absolute bg-black/0 border-gray-200">
                        <div className="w-20 h-9 left-0 top-0 absolute justify-start text-white text-3xl font-bold font-sans leading-9">
                          12.5K
                        </div>
                        <div className="w-16 h-6 left-0 top-[36px] absolute justify-start text-gray-400 text-base font-normal font-sans leading-normal">
                          Holders
                        </div>
                      </div>
                      <div className="w-60 h-14 left-[271px] top-0 absolute bg-black/0 border-gray-200">
                        <div className="w-20 h-9 left-0 top-0 absolute justify-start text-white text-3xl font-bold font-sans leading-9">
                          8.2K
                        </div>
                        <div className="w-36 h-6 left-0 top-[36px] absolute justify-start text-gray-400 text-base font-normal font-sans leading-normal">
                          Telegram Members
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[584px] h-96 left-[648px] top-0 absolute bg-zinc-900 rounded-2xl outline-2 outline-offset-[-2px] outline-orange-500/30">
                  <div className="w-[516px] h-8 left-[34px] top-[34px] absolute bg-black/0 border-gray-200">
                    <div className="w-40 h-8 left-[176.80px] top-[1px] absolute text-center justify-start text-white text-2xl font-bold font-sans">
                      Meme Gallery
                    </div>
                  </div>
                  <div className="w-[516px] h-64 left-[34px] top-[90px] absolute bg-black/0 border-gray-200">
                    <Image
                      className="w-64 h-32 left-0 top-0 absolute rounded-xl border border-orange-500/20"
                      src="https://placehold.co/250x128"
                      alt="Meme 1"
                      width={250}
                      height={128}
                    />
                    <Image
                      className="w-64 h-32 left-[266px] top-0 absolute rounded-xl border border-orange-500/20"
                      src="https://placehold.co/250x128"
                      alt="Meme 2"
                      width={250}
                      height={128}
                    />
                    <Image
                      className="w-64 h-32 left-0 top-[144px] absolute rounded-xl border border-orange-500/20"
                      src="https://placehold.co/250x128"
                      alt="Meme 3"
                      width={250}
                      height={128}
                    />
                    <Image
                      className="w-64 h-32 left-[266px] top-[144px] absolute rounded-xl border border-orange-500/20"
                      src="https://placehold.co/250x128"
                      alt="Meme 4"
                      width={250}
                      height={128}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-[1440px] h-[459px] left-0 top-[2820px] absolute bg-zinc-900 border-t border-orange-500/20">
          <div className="w-[1280px] h-80 left-[80px] top-[65px] absolute bg-black/0 border-gray-200">
            <div className="w-[1232px] h-80 left-[24px] top-0 absolute bg-black/0 border-gray-200">
              <div className="w-[896px] h-32 left-[168px] top-0 absolute bg-orange-500/10 rounded-2xl outline-1 outline-offset-[-1px] outline-orange-500/20">
                <div className="w-[846px] h-7 left-[25px] top-[25px] absolute bg-black/0 border-gray-200">
                  <div className="w-40 h-7 left-[345.69px] top-[3px] absolute text-center justify-start text-white text-lg font-bold font-sans">
                    Contract Address
                  </div>
                </div>
                <div className="w-96 h-10 left-[230.36px] top-[69px] absolute bg-zinc-900 rounded-lg border-gray-200">
                  <div className="w-96 h-6 left-[16px] top-[11px] absolute text-center justify-start text-orange-500 text-base font-normal font-sans">
                    0x1234567890abcdef1234567890abcdef12345678
                  </div>
                </div>
              </div>
              <div className="w-[1232px] h-16 left-0 top-[166px] absolute bg-black/0 border-gray-200">
                <div className="w-[673px] h-7 left-[282.08px] top-0 absolute text-center justify-start text-gray-400 text-lg font-normal font-sans leading-7">
                  For entertainment purposes only. Do not mortgage your house to
                  buy oranges.
                </div>
                <div className="w-96 h-6 left-[439.98px] top-[44px] absolute text-center justify-start text-orange-500 text-base font-normal font-press-start leading-normal">
                  Powered by degeneracy.
                </div>
              </div>
              <div className="w-[1232px] h-16 left-0 top-[266px] absolute bg-black/0 border-gray-200">
                <div className="w-8 h-8 left-[521.98px] top-[32px] absolute bg-gradient-to-r from-orange-500 to-orange-400 rounded-full border-gray-200">
                  <div className="w-3 h-6 left-[9.83px] top-[4px] absolute text-center justify-start text-zinc-900 text-base font-bold font-sans leading-normal">
                    O
                  </div>
                </div>
                <div className="w-36 h-6 left-[565.98px] top-[36px] absolute text-center justify-start text-orange-500 text-base font-normal font-press-start leading-normal">
                  ORPE 2024
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Header */}
        <div className="w-[1440px] h-20 left-0 top-0 absolute bg-zinc-900/95 border-b border-orange-500/20">
          <div className="w-[1280px] h-16 left-[80px] top-0 absolute bg-black/0 border-gray-200">
            <div className="w-32 h-10 left-[24px] top-[16px] absolute bg-black/0 border-gray-200">
              <div className="w-10 h-10 left-0 top-0 absolute bg-gradient-to-r from-orange-500 to-orange-400 rounded-full border-gray-200">
                <div className="w-4 h-7 left-[12.28px] top-[6px] absolute justify-start text-zinc-900 text-xl font-bold font-sans leading-7">
                  O
                </div>
              </div>
              <div className="w-16 h-7 left-[52px] top-[6px] absolute justify-start text-orange-500 text-lg font-normal font-press-start leading-7">
                ORPE
              </div>
            </div>
            <div className="w-96 h-10 left-[812.75px] top-[16px] absolute bg-black/0 border-gray-200">
              <div className="w-11 h-6 left-0 top-[8px] absolute justify-start text-white text-base font-normal font-sans leading-normal">
                About
              </div>
              <div className="w-24 h-6 left-[77.12px] top-[8px] absolute justify-start text-white text-base font-normal font-sans leading-normal">
                Tokenomics
              </div>
              <div className="w-20 h-6 left-[200.08px] top-[8px] absolute justify-start text-white text-base font-normal font-sans leading-normal">
                Community
              </div>
              <div className="w-32 h-10 left-[318.72px] top-0 absolute bg-orange-500 rounded-full border-gray-200">
                <div className="w-20 h-6 left-[24px] top-[10px] absolute text-center justify-start text-zinc-900 text-base font-semibold font-sans">
                  Buy ORPE
                </div>
              </div>
            </div>
            <div className="w-96 h-10 left-[289px] top-[15px] absolute bg-zinc-900 rounded-lg border-gray-200">
              <div className="left-[7px] top-[11px] absolute text-center justify-start text-orange-500 text-base font-normal font-sans">
                CA: 0x1234567890abcdef1234567890abcdef12345678
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
