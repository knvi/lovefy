import { useSession } from "next-auth/react";

const UserData: React.FC = () => {
    const { data: session, status } = useSession();

    return (
        <div>
            <h1 className="text-3xl font-bold">User Data</h1>
            <p className="text-xl">This is a page that only authenticated users can see.</p>
        </div>
    );
}