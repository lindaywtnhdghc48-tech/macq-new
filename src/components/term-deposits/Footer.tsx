import {
  footerDisclaimer,
} from "@/lib/term-deposit-data";

type FooterProps = {
  disclaimer?: string;
};

export function Footer({ disclaimer }: FooterProps) {
  const text = disclaimer ?? footerDisclaimer;
  return (
    <footer className="bg-black py-6 text-white sm:py-8">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6">
        <p className="max-w-6xl text-xs leading-6 text-white/74">{text}</p>
        <p className="mt-4 text-xs text-white/74">© Macquarie Group Limited</p>
      </div>
    </footer>
  );
}
