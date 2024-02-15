export default function home(request: any, response: any) {
  response.status(200).json({ message: 'Test next json response typescript'});
}