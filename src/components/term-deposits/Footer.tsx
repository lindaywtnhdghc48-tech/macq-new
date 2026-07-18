import {
  footerDisclaimer,
  footerPrimaryLinks,
  footerSecondaryLinks,
} from "@/lib/term-deposit-data";

export function Footer() {
  return (
    <footer className="bg-black py-10 text-white">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6">
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-white">
          {footerPrimaryLinks.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm text-white/82">
          {footerSecondaryLinks.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <p className="mt-8 max-w-6xl text-xs leading-6 text-white/74">{footerDisclaimer}</p>
        <p className="mt-5 text-xs text-white/74">© Macquarie Group Limited</p>
      </div>
    </footer>
  );
}
