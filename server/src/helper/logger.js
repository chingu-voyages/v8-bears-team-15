import tracer from 'tracer';
import colors from 'colors';

export const logger = tracer.colorConsole({
  filters: [
    colors.underline, colors.green,
    {
      warn: colors.yellow,
      error: [colors.red, colors.bold],
    },
  ],
});