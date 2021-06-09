import React, { useEffect } from "react";
import {
  Paper,
  Typography,
  CircularProgress,
  Divider,
} from "@material-ui/core/";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams, useHistory } from "react-router-dom";

import { getPost, getPostsBySearch } from "../../actions/posts";
import useStyles from "./styles";

const PostDetails = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  useEffect(() => {
    if (post) {
      dispatch(
        getPostsBySearch({ search: "none", tags: post?.tags.join(",") })
      );
    }
  }, [post]);

  
  
  if (!post) return null;
  
  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }
  
  const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);
  
  const openPost = (_id) => history.push(`/posts/${_id}`);
  
  return (
    <>
      <Paper style={{ padding: "20px", borderRadius: "15px" }} elevation={6}>
        <div className={classes.card}>
          <div className={classes.section}>
            <Typography variant="h4" component="h2">
              {post.title}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              color="textSecondary"
              component="h2"
            >
              {post.tags.map((tag) => `#${tag} `)}
            </Typography>
            <Typography gutterBottom variant="h6" component="p">
              {post.message}
            </Typography>
            <Typography color="textSecondary" variant="h6">
              Posteado por: {post.name}
            </Typography>
            <Typography color="textSecondary" variant="body1">
              {moment(post.createdAt).fromNow()}
            </Typography>
            <Divider style={{ margin: "20px 0" }} />
            <Typography variant="body1">
              <strong>Comentarios</strong>
            </Typography>
            <Divider style={{ margin: "20px 0" }} />
          </div>
          <div className={classes.imageSection}>
            <img
              className={classes.media}
              src={
                post.selectedFile ||
                "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
              }
              alt={post.title}
            />
          </div>
        </div>
      </Paper>
      {recommendedPosts.length ? (
        <Paper style={{ padding: "20px", marginTop: "20px",  borderRadius: "15px" }} elevation={6}>
          <div className={classes.section}>
            <Typography glutterBottom variant="h5">
              También podría interesarte:
            </Typography>
            <Divider />
            <div className={classes.recommendedPosts}>
              {recommendedPosts.map(
                ({ title, message, name, likes, selectedFile, _id }) => (
                  <div
                    style={{ margin: "20px", cursor: "pointer" }}
                    key={_id}
                    onClick={() => openPost(_id)}
                  >
                    <Typography gutterBottom variant="h6">
                      {title}
                    </Typography>
                    <Typography
                      gutterBottom
                      color="textSecondary"
                      variant="subtitle2"
                    >
                      {name}
                    </Typography>
                    <Typography
                      gutterBottom
                      color="textSecondary"
                      variant="subtitle2"
                    >
                      {message}
                    </Typography>
                    <Typography
                      gutterBottom
                      color="primary"
                      variant="subtitle1"
                    >
                      {likes.length}{" "}
                      {likes.length > 1 || likes.length === 0
                        ? "likes"
                        : "like"}
                    </Typography>
                    <img style={{borderRadius: "15px"}} src={selectedFile} width="200px" />
                  </div>
                )
              )}
            </div>
          </div>
        </Paper>
      ) : null}
    </>
  );
};
export default PostDetails;
