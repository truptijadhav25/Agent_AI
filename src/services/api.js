const MOCK_USERS = [
  {
    id: 1,
    firstName: "Admin",
    lastName: "User",
    email: "admin@company.com",
    password: "admin123",
    role: "admin",
    isActive: true
  },
  {
    id: 2,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@company.com",
    password: "user123",
    role: "user",
    isActive: true
  },
  {
    id: 3,
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@company.com",
    password: "user123",
    role: "user",
    isActive: true
  }
];

const API_DELAY = 1500; // 1.5s realistic delay

// Login API
export const loginUser = async (email, password) => {
  await new Promise(resolve => setTimeout(resolve, API_DELAY));
  
  const user = MOCK_USERS.find(u => u.email === email && u.password === password);
  
  if (!user) {
    throw new Error("Invalid email or password");
  }
  
  return {
    token: `mock-jwt-${user.id}-${Date.now()}`,
    user: {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role
    }
  };
};

// Signup API
export const signupUser = async (userData) => {
  await new Promise(resolve => setTimeout(resolve, API_DELAY * 1.5));
  
  // Check if email exists
  const emailExists = MOCK_USERS.find(u => u.email === userData.email);
  if (emailExists) {
    throw new Error("Email already exists");
  }
  
  const newUser = {
    ...userData,
    id: MOCK_USERS.length + 1,
    role: "user",
    isActive: true
  };
  
  MOCK_USERS.push(newUser);
  
  return {
    token: `mock-jwt-${newUser.id}-${Date.now()}`,
    user: {
      id: newUser.id,
      email: newUser.email,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      role: newUser.role
    }
  };
};

// Get current user
export const getCurrentUser = () => {
  const token = localStorage.getItem('token');
  if (!token) return null;
  
  const user = MOCK_USERS.find(u => token.includes(`mock-jwt-${u.id}`));
  return user || null;
};