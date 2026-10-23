export default function StudentList({ students, onEdit, onDelete }) {
  if (students.length === 0) {
    return (
      <div className="empty-state">
        <p>📭 No students found</p>
        <small>Add your first student using the form</small>
      </div>
    );
  }

  return (
    <div className="table-wrapper">
      <table className="student-table">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Sem</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s._id}>
              <td><strong>{s.studentId}</strong></td>
              <td>{s.name}</td>
              <td>{s.email}</td>
              <td>{s.department}</td>
              <td>{s.semester}</td>
              <td>{s.contact || '—'}</td>
              <td className="actions">
                <button onClick={() => onEdit(s)} className="btn-edit" title="Edit">✏️</button>
                <button onClick={() => onDelete(s._id)} className="btn-delete" title="Delete">🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}