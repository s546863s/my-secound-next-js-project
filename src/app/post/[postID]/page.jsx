import Link from "next/link";

 const blogs = [
        {
            id: 1,
            title: "Understanding JavaScript Closures",
            author: "Jhankar Mahbub",
            date: "2026-04-01",
            tags: ["JavaScript", "Closures", "Core Concepts"],
            content: "Closures are a fundamental concept in JavaScript that allow functions to access variables from an outer scope even after the outer function has executed."
        },
        {
            id: 2,
            title: "A Beginner’s Guide to React",
            author: "John Doe",
            date: "2026-03-28",
            tags: ["React", "Frontend", "JavaScript"],
            content: "React is a popular JavaScript library for building user interfaces. It helps developers create reusable UI components."
        },
        {
            id: 3,
            title: "Mastering CSS Grid Layout",
            author: "Jane Smith",
            date: "2026-03-25",
            tags: ["CSS", "Grid", "Web Design"],
            content: "CSS Grid is a powerful layout system that allows you to create complex and responsive web layouts with ease."
        },
        {
            id: 4,
            title: "Node.js Basics for Backend Development",
            author: "Alex Johnson",
            date: "2026-03-20",
            tags: ["Node.js", "Backend", "API"],
            content: "Node.js allows you to run JavaScript on the server side, making it a great choice for building scalable backend applications."
        }
    ];

const PostDetails = async ({params}) => {
    const {postID} = await params;
    
    const post = blogs.find(blog => blog.id === parseInt(postID))

    
    
    return (
        <div className="space-y-7">
            <h1 className="btn btn-disabled">{post.id}</h1>
            <h1 className="text-2xl font-black">{post.title}</h1>
            <h1 className="text-2xl font-semibold">{post.content}</h1>
            <Link className="btn btn-secondary" href={`/post`}>Go Back</Link>
        </div>
    );
};

export default PostDetails;