import {
  footerDisclaimer,
  footerPrimaryLinks,
  footerSecondaryLinks,
} from "@/lib/term-deposit-data";

export function Footer() {
  return (
    <footer className="bg-black py-6 text-white sm:py-8">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6">
        {footerPrimaryLinks.length ? (
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-white">
            {footerPrimaryLinks.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        ) : null}

        {footerSecondaryLinks.length ? (
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm text-white/82">
            {footerSecondaryLinks.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        ) : null}

        <p className="max-w-6xl text-xs leading-6 text-white/74">{footerDisclaimer}</p>
        <p className="mt-4 text-xs text-white/74">© Macquarie Group Limited</p>
      </div>
    </footer>
  );
}
