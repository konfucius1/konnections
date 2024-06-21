import KonnectionGame from '@/features/konnection';
import { useGameState } from '@/stores/useGameState';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/mystery')({
  component: Mystery,
});

function Mystery() {
  const { mode } = Route.useSearch();
  console.log('mode: ', mode);
  const { words } = useGameState();
  console.log('words: ', words);
  console.log('shuffled words: ', shuffleWords(words));

  return <KonnectionGame words={words} />;
}
