import React from 'react';
import GitHubUser from '../services/GitHubUser.js';

class SearchUser extends React.Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        
        GitHubUser.getByUsername(this.refs.username.value)
        .then(response => { this.props.updateUser(response.data) })
        .catch(error => { console.log('Erro: ', {error}) });
        
        GitHubUser.getReposByUsername(this.refs.username.value)
        .then(response => { this.props.updateRepos(response.data) })
        .catch(error => { console.log('Erro: ', {error}) });
    }

    render() {
        return (
            <div className='jumbotron'>
                <h1>GitHub Informações</h1>
                <div className='row'>
                    <form onSubmit={this.handleSubmit}>
                        <div className='form-group'>
                            <label>Username</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Ex: Rafael Bertelli'
                                ref='username'
                            />
                        </div>
                        <button
                            type='submit'
                            className='btn btn-primary'>Buscar
                        </button>
                    </form>
                </div>
            </div>
        );
    }

}

SearchUser.propTypes = {
    updateUser: React.PropTypes.func.isRequired,
    updateRepos: React.PropTypes.func.isRequired,
};

export default SearchUser;