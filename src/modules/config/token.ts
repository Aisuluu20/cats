import jwt from "jsonwebtoken";

export const generateToken = (userId: string, userEmail: string) => {
  const JWT_SECRET = process.env.JWT_SECRET!;

  return jwt.sign(
    {
      user: userId,
      email: userEmail,
    },
    JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
};
export const verifyToken = (token: string) => {
  const JWT_SECRET = process.env.JWT_SECRET!;

  return jwt.verify(token, JWT_SECRET) as { id: string; name: string };
};
