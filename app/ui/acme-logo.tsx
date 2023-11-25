import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import clsx from 'clsx';

export default function AcmeLogo() {
  return (
    <div
      className={clsx(
        'flex flex-row items-center leading-none text-white',
        lusitana.className,
      )}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}
