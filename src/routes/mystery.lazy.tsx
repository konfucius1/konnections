import KonnectionGame from '@/features/konnection';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/mystery')({
  component: Mystery,
});

function Mystery() {
  return <KonnectionGame />;
}
