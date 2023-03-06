import getPorjectsMore from '../../src/utils/global/get-projetcs-more';

export default async function handler(req, res) {
  const { limit = 9, skip = 0 } = req.query;

  if (req.method === 'GET') {
    const { portfolios, portfoInfo } = await getPorjectsMore(
      Number(limit),
      Number(skip)
    );

    if (portfolios && portfoInfo) {
      return res.status(200).json({ portfolios, portfoInfo });
    } else {
      return res.status(409).json({ message: 'has some error in server!' });
    }
  } else {
    return res.status(405).json({ message: 'only GET method!' });
  }
}
