import {React, Component} from 'react';

class SearchBar extends Component {
    state = { term : '' };

    onInputChange = e => {
        const val = e.target.value;
        this.setState({ term : val});
    };

    onFormSubmit = e => {
        const {term} = this.state;
        const {onTermSubmit} = this.props;
        e.preventDefault();
        onTermSubmit(term);
    };

    render() {
        const {term} = this.state;
        const placeholder = 'search for videos...';
        return (
            <div className='search-bar ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <label>Video Search</label>
                        <input 
                        value={term} 
                        type='text' 
                        onChange={this.onInputChange}
                        placeholder={placeholder}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;