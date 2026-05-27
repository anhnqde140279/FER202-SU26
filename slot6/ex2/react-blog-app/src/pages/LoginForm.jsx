import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { useLocation } from 'react-router-dom';

function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
   useState({
  email: location.state?.email || '',
  password: '',
});

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = login(form.email, form.password);

    if (result.success) {
      navigate('/');
    } else {
      setError(result.message);
    }
  };

  return (
    <Container className="py-5" style={{ maxWidth: 450 }}>
      <Card className="shadow-sm border-0">
        <Card.Body>
          <h3 className="text-center mb-4">🔐 Login</h3>

          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
              />
            </Form.Group>

            <Button type="submit" className="w-100">
              Login
            </Button>

          </Form>

          <p className="text-muted mt-3 small text-center">
            Demo: admin@gmail.com / 123456
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default LoginForm;