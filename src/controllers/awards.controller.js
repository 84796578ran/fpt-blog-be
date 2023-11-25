import { db } from "../database/connect.js";


const getTop10LikeOfUser = (req, res) => {
    const blog_id = req.params.blog_id;
    const query = 'SELECT top 10 from user_id = ? where COUNT(*) AS like_count FROM blog_like WHERE blog_id = ?;;'
  
    db.query(query, [blog_id], (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }
      const likeCount = parseInt(result[0].like_count, 10);
      return res.status(200).json(likeCount);
    });
  };

  const getTop10CmtOfUser = (req, res) => {
    const blog_id = req.params.blog_id;
    const query = 'SELECT top 10 from user_id = ? where COUNT(*) AS comment_count FROM comment WHERE blog_id = ?;;'
  
    db.query(query, [blog_id], (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }
      const comment_count = parseInt(result[0].comment_count, 10);
      return res.status(200).json(comment_count);
    });
  };

  export default {
    getTop10LikeOfUser,
    getTop10CmtOfUser
  };