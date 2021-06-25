import { Component } from 'react';
import { useParams } from 'react-router-dom';

export default function WorkOrder(){
    let params = useParams();
    let wo_id = parseInt(params.wo_id);
    return (<div>{wo_id}
        
    </div>)
}