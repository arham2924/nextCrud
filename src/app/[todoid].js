import { useRouter } from 'next/router';

export default function TodoPage() {
  const router = useRouter();
  const { todoId } = router.query;

  return (
    <div>
      <h1>Todo Item: {todoId}</h1>
    </div>
  );
}

