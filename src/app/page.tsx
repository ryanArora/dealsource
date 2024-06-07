import { api } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  return (
    <div>
      <p>{hello.greeting}</p>
    </div>
  );
}
