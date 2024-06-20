import { createLazyFileRoute } from '@tanstack/react-router';
import ReadyModal from '@/features/home/ReadyModal';
import { useDisclosure } from '@/hooks/useDisclosure';
import { Button } from '@/components/ui/button';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <div className="flex flex-col justify-center items-center gap-4 pt-44">
      <h3>Hello Planet! 🌏</h3>
      <p className="text-center">What were you expecting to find here? 🤔</p>
      <p className="text-center">Well I have something fun for you</p>
      <Button
        onClick={onToggle}
        className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Ready?
      </Button>

      {isOpen && <ReadyModal onToggle={onToggle} />}
    </div>
  );
}
