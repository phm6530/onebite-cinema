import { NextApiRequest, NextApiResponse } from "next";

export default async function hanlder(_: NextApiRequest, res: NextApiResponse) {
  try {
    await res.revalidate("/");
    res.status(200).json({ revaildate: true });
  } catch (error) {
    res.status(500).send("error!!!");
  }
}
