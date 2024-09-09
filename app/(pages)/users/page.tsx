import UsersList from "../../../components/UsersList";

export default function UsersPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Users Directory</h1>
      <UsersList />
      <br />
      <div className="grid lg:grid-cols-2 gap-4">

      </div>
    </div>
  );
}
