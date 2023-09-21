import { trpc } from "../utils/trpc";

export default function HelloWorld() {
  const usersList = trpc.userList.useQuery();

  return (
    <div>
      <h1>Hello World! {JSON.stringify(usersList.data)}</h1>
    </div>
  );
}
