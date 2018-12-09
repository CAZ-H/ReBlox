import React from 'react';
import PropTypes from 'prop-types';
import 'whatwg-fetch';

import Input from 'common/components/Input';
import Floater from 'common/components/Floater';

import './index.scss';

class SearchBar extends React.Component {
    static propTypes = {
        currentPage: PropTypes.string.isRequired
    };

    static defaultProps = {
        currentPage: 'user'
    };

    constructor(props) {
        super(props);

        this.state = {
            focused: false,
            query: '',
            topSuggestion: {}
        };

        this.handleChanged = this.handleChanged.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleUnfocus = this.handleUnfocus.bind(this);
    }

    static renderSuggestRow(query, category, onClick) {
        return (
            <div className='rb-search-bar__suggests-row' onClick={onClick}>
                Search {query} in {category}
            </div>
        );
    }

    static renderSuggestTopSuggest(topSuggestion) {
        return (
            <div className='rb-search-bar__suggests-row rb-search-bar__top-suggests-row' onClick={() => {window.location.href = topSuggestion.link}}>
                <img className='rb-search-bar__top-suggests-row-img' src={topSuggestion.image}/>
                <span>{topSuggestion.name}</span>
            </div>
        );
    }

    static renderSuggestList(query, topSuggestion) {
        return (
            <React.Fragment>
                {topSuggestion.name ? SearchBar.renderSuggestTopSuggest(topSuggestion) : null}
                {SearchBar.renderSuggestRow(query, 'Players', () => {window.location.href = `https://www.roblox.com/search/users?keyword=${query}`})}
                {SearchBar.renderSuggestRow(query, 'Games', () => {window.location.href = `https://www.roblox.com/games/?Keyword=${query}`})}
                {SearchBar.renderSuggestRow(query, 'Groups', () => {window.location.href = `https://www.roblox.com/search/groups?keyword=${query}`})}
                {SearchBar.renderSuggestRow(query, 'Catalog', () => {window.location.href = `https://www.roblox.com/catalog/browse.aspx?CatalogContext=1&Keyword=${query}`})}
                {SearchBar.renderSuggestRow(query, 'Library', () => {window.location.href = `https://www.roblox.com/develop/library?CatalogContext=2&Category=6&Keyword=${query}`})}
            </React.Fragment>
        )
    }

    handleChanged(event) {
        const value = event.target.value;
        console.log('[ReBlox - Search]\n', value);

        this.setState(() => {
            return {
                query: value
            }
        }, () => {
            switch(this.props.currentPage) {
                case 'group':
                    fetch(`https://www.roblox.com/search/groups/list-json?keyword=${this.state.query}&maxRows=1&startIndex=0`).then((jsonRes) => {
                        return jsonRes.json()
                    }).then((parsedRes) => {
                        this.setState(() => {
                            const data = (parsedRes.GroupSearchResults || [])[0] || {};
                            return {
                                topSuggestion: {
                                    name: data.Name,
                                    image: (data.Thumbnail || {}).Url,
                                    link: data.GroupUri
                                }
                            }
                        }, () => console.log('[ReBlox - Search]\nTop Group Suggestion:\n', this.state.topSuggestion))
                    }).catch((e) => {
                        console.warn('[ReBlox - Search]\n', e)
                    });
                    break;
                case 'user':
                default:
                    fetch(`https://www.roblox.com/search/users/results?keyword=${this.state.query}&maxRows=1&startIndex=0`).then((jsonRes) => {
                        return jsonRes.json()
                    }).then((parsedRes) => {
                        const data = (parsedRes.UserSearchResults || [])[0] || {};
                        data.UserId && fetch(`https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${data.UserId}&size=48x48&format=Png`).then((jsonRes) => {
                            return jsonRes.json()
                        }).then((parsedImgRes) => {
                            const imgData = (parsedImgRes.data || [])[0] || {};
                            this.setState(() => {
                                return {
                                    topSuggestion: {
                                        name: data.Name,
                                        image: imgData.imageUrl,
                                        link: data.UserProfilePageUrl
                                    }
                                }
                            })
                        }).catch((e) => {
                            console.warn('[ReBlox - Search]\n', e)
                        })
                    }).catch((e) => {
                        console.warn('[ReBlox - Search]\n', e)
                    })
            }
        })
    }

    handleFocus() {
        this.setState(() => {
            return {
                focused: true
            }
        })
    }

    handleUnfocus() {
        this.setState(() => {
            return {
                focused: false
            }
        })
    }

    render() {
        return (
            <div className='rb-search-bar'>
                <Floater
                    className='rb-search-bar__suggests'
                    floaterClassName={`rb-search-bar__suggests-list ${this.state.focused ? ' rb-search-bar__suggests-list-open' : ''}`}
                    onUnfocus={this.handleUnfocus}
                >
                    {SearchBar.renderSuggestList(this.state.query, this.state.topSuggestion)}
                </Floater>
                <Input placeholder='Search' type='text' onChange={this.handleChanged} onFocus={this.handleFocus} color='light'/>
            </div>
        );
    }
}

export default SearchBar;
