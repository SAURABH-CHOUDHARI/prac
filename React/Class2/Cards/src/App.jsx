import Card from "./Components/Card"


const App = () => {
  const arr = [
    {
      img: "https://images.unsplash.com/photo-1733729765058-0e5fa3af47c0?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "2024-03-15",
      time: "14:30",
      city: "New York",
      name: "Emily Rodriguez",
      profession: "Software Engineer",
      address: "123 Tech Lane, Manhattan, NY 10001",
    },
    {
      img: "https://images.unsplash.com/photo-1732468053948-bade8f3270cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "2024-01-22",
      time: "09:45",
      city: "San Francisco",
      name: "Michael Chang",
      profession: "Data Scientist",
      address: "456 Innovation Street, CA 94105",
    },
    {
      img: "https://images.unsplash.com/photo-1733077151631-93a7e457b97f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "2024-06-10",
      time: "11:15",
      city: "Chicago",
      name: "Sarah Johnson",
      profession: "Marketing Manager",
      address: "789 Business Drive, IL 60601",
    },
    {
      img: "https://images.unsplash.com/photo-1733077151689-5aa813706c08?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "2024-04-05",
      time: "16:20",
      city: "Austin",
      name: "David Kim",
      profession: "UX Designer",
      address: "321 Creative Road, TX 78701",
    },
    {
      img: "https://images.unsplash.com/photo-1733729765058-0e5fa3af47c0?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "2024-03-15",
      time: "14:30",
      city: "New York",
      name: "Emily Rodriguez",
      profession: "Software Engineer",
      address: "123 Tech Lane, Manhattan, NY 10001",
    },
    {
      img: "https://images.unsplash.com/photo-1732468053948-bade8f3270cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "2024-01-22",
      time: "09:45",
      city: "San Francisco",
      name: "Michael Chang",
      profession: "Data Scientist",
      address: "456 Innovation Street, CA 94105",
    },
    {
      img: "https://images.unsplash.com/photo-1733077151631-93a7e457b97f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "2024-06-10",
      time: "11:15",
      city: "Chicago",
      name: "Sarah Johnson",
      profession: "Marketing Manager",
      address: "789 Business Drive, IL 60601",
    },
    {
      img: "https://images.unsplash.com/photo-1733077151689-5aa813706c08?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "2024-04-05",
      time: "16:20",
      city: "Austin",
      name: "David Kim",
      profession: "UX Designer",
      address: "321 Creative Road, TX 78701",
    }
  ];
  return (
    <div className="flex px-10 py-10 w-full gap-14 flex-wrap justify-center bg-zinc-800">
      {arr.map((obj, idx) => (
        <Card key={idx} id={obj} />
      ))}
    </div>
  )
}

export default App