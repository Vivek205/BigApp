import React, { Component } from 'react';
import css from './Overview.module.css';
import axios from 'axios';

import Header from '../../components/overviewHeader/overviewHeader';
import Table from '../../components/overviewTable/overviewTable';
import Pagination from '../../components/pagination/pagination';


class OverView extends Component {
    state = {
        headings: [{ id: 1, name: '' },
        { id: 2, name: 'NAME' },
        { id: 3, name: 'COMPANY' },
        { id: 4, name: 'LOCATION' },
        { id: 5, name: 'DATE' },
        { id: 6, name: 'BIO' },
        { id: 7, name: 'REPOS' },
        { id: 8, name: 'FOLLOWERS' }],
        rows: [],
        currentPageTable: [],
        pageSize: 10,
        searchQuery:''
    }

    componentDidMount = () => {
        this.fetchAllUsers();
    }

    fetchAllUsers = () => {
        let UserLogins = [];
        axios.get('https://api.github.com/users')
            .then(response => {
                // console.log(response.data);
                response.data.map(user => {
                    let Obj = {};
                    console.log('123' + Obj);
                    Obj.id = user.id;
                    Obj.login = user.login;
                    UserLogins.push(Obj);
                });
                this.fetchTableData(UserLogins);
                // console.log(UserLogins);
            })
            .catch(err => {

            })
    }

    fetchTableData = (UserLogins) => {
        let Promises = [];
        let TableData = [];
        UserLogins.map(user => {
            let url = 'https://api.github.com/users/' + user.login;
            Promises.push(axios.get(url));
        });
        axios.all(Promises)
            .then(axios.spread((...args) => {
                args.map(arg => {
                    // console.log('spread'+arg.data.id);
                    let data = arg.data
                    let Obj = {};
                    Obj.id = data.id;
                    Obj.name = data.name? data.name: 'NA';
                    Obj.company = data.company ? data.company : 'NA';
                    Obj.location = data.location ? data.location : 'NA';
                    Obj.date = data.created_at ? data.created_at.toString().slice(0, data.created_at.indexOf('T')) : 'NA';
                    Obj.bio = data.bio ? data.bio : 'NA';
                    Obj.repos = data.public_repos;
                    Obj.followers = data.followers;
                    TableData.push(Obj);
                });
                console.log('Table Data', TableData);
                this.setState(prevState => ({
                    rows: TableData
                }));
            }));
    }

    pageChangeHandler = (currentPageTable) => {
        console.log('Overview pageChangeHandler', this.state.currentPageTable);
        this.setState({ currentPageTable: currentPageTable });
    }

    searchHandler = (e) =>{
        // console.log('changed',e.target.value);
        this.setState({searchQuery:e.target.value});
        let searchResult = [...this.state.rows];
        // console.log('before',searchResult);
        // console.log('type of table',typeof searchResult[0].name,searchResult[0].name.toLowerCase());
        // console.log('type of query',typeof this.state.searchQuery,this.state.searchQuery.toLowerCase());
        searchResult = searchResult.filter((user)=> user.name.toLowerCase().includes(this.state.searchQuery.toLowerCase()));
        this.setState({currentPageTable:searchResult});
        console.log(searchResult);
        
    }

    render() {
        return (
            <div className={css.overview}>
                <Header searchQuery={this.state.searchQuery} changed={this.searchHandler}/>
                {this.state.currentPageTable.length > 0 ?
                    <Table headings={this.state.headings} rows={this.state.currentPageTable} /> : ''
                }
                {/* <div className={css.footer}>
                    <span className={css.desc}>Rows per page:</span>
                    <span className={css.desc}>10</span>
                    <span className={css.desc}>1-10 of 100</span>
                </div> */}
                <Pagination items={this.state.rows} onChangePage={this.pageChangeHandler}/>
            </div>
        );
    }
}

export default OverView;