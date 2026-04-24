import Link from "next/link";

export const metadata = {
  title: 'All Users',
  description: 'all the users information',
}

const UsersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();


    return (
        <div>
            <h2>Users are coming here</h2>
            <div className="grid grid-cols-3 gap-4">
                {
                    users.map(user => <div key={user.id} className="card bg-info text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title">{user.name}!</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="card-actions justify-end">
                                <Link href={`/users/${user.id}`}>
                                <button className="btn">Show info Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default UsersPage;