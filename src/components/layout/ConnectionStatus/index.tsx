'use client';

import clsx from 'clsx';
import { useOffline } from 'next/offline';
import type { ReactElement } from 'react';

export function ConnectionStatus(): ReactElement {
  const isOffline = useOffline();

  return (
    <span
      className={clsx(
        'inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold tracking-wider uppercase',
        {
          'border-green-200 bg-green-50 text-green-700': !isOffline,
          'border-red-200 bg-red-50 text-red-700': isOffline,
        },
      )}
    >
      {isOffline ? '🔴 Offline' : '🟢 Online'}
    </span>
  );
}
