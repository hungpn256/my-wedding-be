import axios from 'axios';
import { Router } from 'express';

const searchRoute = Router();

searchRoute.get('/search', async (req, res) => {
  try {
    const query = req.query.query as string;
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&key=AIzaSyBVQQMnGOuUteObvPdzlebyFMbgdD-zfZI`,
    );
    res.json({
      data: response.data,
    });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

export default searchRoute;
