export const getInputEnvironmentVariables = (): Record<string, string> => {
  const env: Record<string, string> = {};

  for (const key in process.env) {
    if (key.startsWith('INPUT_')) {
      env[key] = process.env[key] || '';
    }
  }

  return env;
};
