import React, { Component } from 'react';
import css from './Overview.module.css';

import Header from '../../components/overviewHeader/overviewHeader';
import Table from '../../components/overviewTable/overviewTable';


class OverView extends Component {
    state = {
        headings: [{ id: 1, name: '' },
        { id: 2, name: 'TYPE' },
        { id: 3, name: 'DATE' },
        { id: 4, name: 'AMOUNT' },
        { id: 5, name: 'MANAGER' },
        { id: 6, name: 'EMAIL' },
        { id: 7, name: 'COUNTRY' },
        { id: 8, name: 'NUMBERS' }],
        rows:[{id:1,type:'facebook',date:'13 Mar 2017',amount:'$73430',manager:'Cecelia Herrera',email:'mante.kylie@yahoo.com',country:'Monacco',numbers:'63'},
        {id:2,type:'facebook',date:'13 Mar 2017',amount:'$73430',manager:'Cecelia Herrera',email:'mante.kylie@yahoo.com',country:'Monacco',numbers:'63'},
        {id:3,type:'facebook',date:'13 Mar 2017',amount:'$73430',manager:'Cecelia Herrera',email:'mante.kylie@yahoo.com',country:'Monacco',numbers:'63'},
        {id:4,type:'facebook',date:'13 Mar 2017',amount:'$73430',manager:'Cecelia Herrera',email:'mante.kylie@yahoo.com',country:'Monacco',numbers:'63'},
        {id:5,type:'facebook',date:'13 Mar 2017',amount:'$73430',manager:'Cecelia Herrera',email:'mante.kylie@yahoo.com',country:'Monacco',numbers:'63'},
        {id:6,type:'facebook',date:'13 Mar 2017',amount:'$73430',manager:'Cecelia Herrera',email:'mante.kylie@yahoo.com',country:'Monacco',numbers:'63'},
        {id:7,type:'facebook',date:'13 Mar 2017',amount:'$73430',manager:'Cecelia Herrera',email:'mante.kylie@yahoo.com',country:'Monacco',numbers:'63'},
        {id:8,type:'facebook',date:'13 Mar 2017',amount:'$73430',manager:'Cecelia Herrera',email:'mante.kylie@yahoo.com',country:'Monacco',numbers:'63'}]
    }
    render() {
        return (
            <div className={css.overview}>
                <Header />
                <Table headings={this.state.headings} rows={this.state.rows}/>
                <div className={css.footer}>
                    <span className={css.desc}>Rows per page:</span>
                    <span className={css.desc}>10</span>
                    <span className={css.desc}>1-10 of 100</span>
                </div>
            </div>
        );
    }
}

export default OverView;