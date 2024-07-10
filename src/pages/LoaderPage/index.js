import React from 'react';
import UserLoader from '../../components/UserLoader';
// import PhonesLoader from '../../components/PhonesLoader';
import DataProvader from '../../components/DataProvider';



const LoaderPage = () => {
    return (
        <div>
            <DataProvader loadData = {()=>fetch ('./users.json').then(res=>res.json())}>
                {(state)=>{
                    const { data, isFething, error } = state;
                    return (
                        <div>
                            <>
                                {isFething && <div>Loading....</div>}
                                {error && <div>error</div>}
                                <ul>
                                {data.map((user) => <li key={user.id}>{user.name}</li>)}
                                </ul>
                            </>          
                        </div>
                    );
                }
            }</DataProvader>
            <DataProvader loadData = {()=>fetch ('./phones.json').then(res=>res.json())}>
                {(state)=>{
                    const { data, isFething, error } = state;
                    return (
                        <div>
                            <>
                                {isFething && <div>Loading....</div>}
                                {error && <div>error</div>}
                                <ol>
                                {data.map((phone) => <li key={phone.id}>{phone.brand} {phone.model} {phone.price}</li>)}
                                </ol>
                            </>          
                        </div>
                    );
                }
            }</DataProvader>
        </div>
    );
}

export default LoaderPage;
