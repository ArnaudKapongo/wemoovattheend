import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getPost } from '../../actions/posts';
import { Link } from 'react-router-dom';
import PostItem from '../posts/PostItem';

const Post = ({ getPost, post: { post, loading }, match }) => {
    
    useEffect(() => {
    getPost(match.params.id);

    }, [getPost]);

    return loading || post === null ? <Spinner /> : <><Link to="/posts" className="btn">
        Retour au posts
        </Link>
        <PostItem post={post} showActions={false}/></>
}

Post.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    post: state.post
});

export default connect(mapStateToProps, { getPost })(Post)
