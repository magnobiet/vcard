import { render, screen } from '@testing-library/react';
import { useOffline } from 'next/offline';

import { ConnectionStatus } from './';

jest.mock('next/offline', () => ({
  useOffline: jest.fn(),
}));

const mockedUseOffline = jest.mocked(useOffline);

describe('ConnectionStatus', () => {
  beforeEach(() => {
    mockedUseOffline.mockReset();
  });

  it('renders the online status', () => {
    mockedUseOffline.mockReturnValue(false);

    render(<ConnectionStatus />);

    const status = screen.getByText('🟢 Online');

    expect(status).toBeInTheDocument();
    expect(status).toHaveClass(
      'border-green-200',
      'bg-green-50',
      'text-green-700',
    );
    expect(status).not.toHaveClass(
      'border-red-200',
      'bg-red-50',
      'text-red-700',
    );
  });

  it('renders the offline status', () => {
    mockedUseOffline.mockReturnValue(true);

    render(<ConnectionStatus />);

    const status = screen.getByText('🔴 Offline');

    expect(status).toBeInTheDocument();
    expect(status).toHaveClass('border-red-200', 'bg-red-50', 'text-red-700');
    expect(status).not.toHaveClass(
      'border-green-200',
      'bg-green-50',
      'text-green-700',
    );
  });
});
