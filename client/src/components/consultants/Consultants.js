import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getConsultants } from '../../actions/consultants';
import ConsultantItem from './ConsultantItem';

const Consultants = ({ getConsultants, consultant: { consultants, loading }}) => {

    useEffect(() => {
        getConsultants();
    }, [getConsultants]);

    return (
        <div>
            
        </div>
    )
}

Consultants.propTypes = {
    getConsultants: PropTypes.func.isRequired,
    consultant: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    consultant: state.consultant
});

export default connect(mapStateToProps, { getConsultants } )(Consultants)




const Posts = ({ getPosts, post: { posts, loading }}) => {

    useEffect(() => {
        getPosts();
    }, [getPosts]);

    return (
        loading ? <Spinner /> : <><h1 className="large text-primary">Remarques</h1>
            <p className="lead">
                Commentaire
            </p>
            <PostForm/>
            <div className="posts">
                { posts.map(post => (
                    <PostItem key={post._id} post={post} />
                ))}
            </div>
        </>
    )
}


export default connect(mapStateToProps, { getConsultants })(Consultants)