import { createLazyFileRoute } from '@tanstack/react-router';
import ReadyModal from '@/features/home/ReadyModal';
import { useDisclosure } from '@/hooks/useDisclosure';
import { Button } from '@/components/ui/button';
import { TextGenerateEffect } from '@/components/ui/textgenerateeffect';
import { useState, useEffect } from 'react';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  const wordsFirst = `Hello Planet! 🌏`;
  const wordsSecond = `What were you expecting to find here? 🤔`;
  const wordsThird = `Well I have something fun for you`;
  const { isOpen, onToggle } = useDisclosure();

  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowFirst(true), 0),
      setTimeout(() => setShowSecond(true), 2000),
      setTimeout(() => setShowThird(true), 4000),
      setTimeout(() => setShowButton(true), 6000),
    ];

    // Clear timeouts on cleanup
    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-4 pt-40">
      {showFirst && (
        <TextGenerateEffect
          words={wordsFirst}
          className="font-thin text-xs text-center"
        />
      )}
      {showSecond && (
        <TextGenerateEffect
          words={wordsSecond}
          className="font-thin text-xs text-center"
        />
      )}
      {showThird && (
        <TextGenerateEffect
          words={wordsThird}
          className="font-thin text-xs text-center"
        />
      )}

      {showButton && (
        <Button
          onClick={onToggle}
          className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded animate-wobble my-4"
        >
          Ready?
        </Button>
      )}

      {isOpen && <ReadyModal onToggle={onToggle} />}
    </div>
  );
}

export default Index;
