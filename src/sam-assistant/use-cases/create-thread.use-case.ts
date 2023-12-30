import OpenAI from 'openai';

export const createThreadUseCase = async (openai: OpenAI) => {
  const { id } = await openai.beta.threads.create();
  return { id };
};
