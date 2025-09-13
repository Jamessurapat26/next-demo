export default async function ProfilePage() {
  // Mock user data with Thai field names
  const users = [
    {
      id: 1,
      name: "Surapat Saetan",
      สาขา: "วิศวกรรมคอมพิวเตอร์",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      รหัสนักศึกษา: "65123465",
    },
    {
      id: 2,
      name: "Krittaporn Ruknui",
      สาขา: "วิศวกรรมคอมพิวเตอร์",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      รหัสนักศึกษา: "65100372",
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
                รหัสนักศึกษา: {user.รหัสนักศึกษา}
              </p>
              <p
                style={{
                  margin: "0 0 16px 0",
                  color: "#666",
                  fontSize: "1.1rem",
                }}
              >
                สาขา: {user.สาขา}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
