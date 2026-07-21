import {
  footerDisclaimer,
} from "@/lib/term-deposit-data";

export function Footer() {
  return (
    <footer className="bg-black py-6 text-white sm:py-8">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6">
        <p className="max-w-6xl text-xs leading-6 text-white/74">{footerDisclaimer}</p>
        <p className="mt-4 text-xs text-white/74">© Macquarie Group Limited</p>
      </div>
    </footer>
  );
}
