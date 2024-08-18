import theme from '../app/theme';

jest.mock('next/font/google', () => ({
  Roboto: jest.fn(() => ({
    style: {
      fontFamily: 'Roboto',
    },
  })),
}));

describe('theme', () => {
  it('should be dark', () => {
    expect(theme.palette.mode).toBe('dark');
  });

  it('should have primary color', () => {
    expect(theme.palette.primary.main).toBe('#ff9800');
  });

  it('should have Roboto font', () => {
    expect(theme.typography.fontFamily).toContain('Roboto');
  });

  it('should have MuiButton style overrides', () => {
    const overrides = theme?.components?.MuiButton?.styleOverrides
      ?.root as CallableFunction;

    expect(overrides).toBeDefined();
    expect(overrides({ ownerState: { color: 'secondary' } })).toEqual({
      backgroundColor: 'inherit',
      color: '#fff',
    });
  });
});
