import React from 'react';
import css from './overviewTable.module.css';

const overviewTable = (props) => {
    return (
        
            <table >
                <thead>
                    <tr>
                        {props.headings.map((value) => 
                            <th key={value.id} className={value.id ===1?css.first:''}>{value.name}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {props.rows.map((row) => 
                        <tr key={row.id}>
                            <td className={css.first}><input type="checkbox" /></td>
                            {props.headings.map((heading) => 
                               { if(heading.name !== ""){
                               return <td key={heading.id}>{row[heading.name.toLowerCase()]}</td>}}
                            )}
                        </tr>
                    )}

                </tbody>
            </table>

        
    );
}

export default overviewTable;