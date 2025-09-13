export default async function ProfilePage() {
  // Mock user data - in a real app, this would come from an API or database
  const users = [
    {
      id: 1,
      name: "Surapat Saetan",
      email: "surapat.saetan@example.com",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      bio: "Full-stack developer passionate about creating amazing web experiences. Love working with React, Next.js, and modern web technologies.",
      location: "San Francisco, CA",
      website: "https://johndoe.dev",
      joinDate: "Feb 2023",
    },
    {
      id: 2,
      name: "Krittaporn Ruknui",
      email: "Krittaporn Ruknui@example.com",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      bio: "UI/UX Designer with a passion for creating intuitive and beautiful user interfaces. Experienced in design systems and user research.",
      location: "New York, NY",
      website: "https://janesmith.design",
      joinDate: "March 2023",
    },
  ];

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      {users.map((user) => (
        <div key={user.id} className="card" style={{ marginBottom: "24px" }}>
          <div>
            <div style={{ flex: 1 }}>
              <h1
                style={{
                  margin: "0 0 8px 0",
                  fontSize: "2rem",
                  fontWeight: "600",
                }}
              >
                {user.name}
              </h1>
              <p
                style={{
                  margin: "0 0 12px 0",
                  color: "#666",
                  fontSize: "1.1rem",
                }}
              >
                {user.email}
              </p>
              <p style={{ margin: "0 0 16px 0", lineHeight: "1.6" }}>
                {user.bio}
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  fontSize: "0.9rem",
                  color: "#666",
                }}
              >
                <span>📍 {user.location}</span>
                <span>
                  🌐{" "}
                  <a
                    href={user.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {user.website}
                  </a>
                </span>
                <span>📅 Joined {user.joinDate}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
