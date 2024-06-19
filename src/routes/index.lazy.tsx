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
    <div className="p-2">
      <h3>Hello Planet!</h3>
      <p>
        You've scanned the QR code from the post note and have now stubbled upon
        this something.
      </p>
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
