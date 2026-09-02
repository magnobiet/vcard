import { cn } from '.';

describe('cn', () => {
  it('combines class names', () => {
    expect(cn('text-sm', 'font-bold')).toBe('text-sm font-bold');
  });
});
