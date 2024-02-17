import { NextApiRequest, NextApiResponse } from "next";

export default function home(request: NextApiRequest, response: NextApiResponse) {
  response.status(200).json({ message: 'This will return a steam game!'});
}