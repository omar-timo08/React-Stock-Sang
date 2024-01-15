import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, CardBody,   Container, Table } from 'reactstrap'
import axios from "axios";
import data from "bootstrap/js/src/dom/data";
const Stock = () => {
    const [records, setRecords] = useState([])
    const queryParams = new URLSearchParams(window.location.search);
    const name = queryParams.get('name');

    /*function deleteBanque(nomBanque) {
        axios.delete("http://localhost:8888/stocksang/delete/"+nomBanque)
    }*/
    function redirectProfile(){
        window.location.replace('http://localhost:3002/adminProfile?name=' + name)
    }


    useEffect(() => {
        axios.get("http://localhost:8888/rendez-vous/findAll")
            .then(res => {
                setRecords(res.data);
            })
    })


    return(
        <Card className='mt-2 border-3 rounded-3 ' style={{ margin: 'auto', maxWidth: '600px'}}>
            <CardBody>
                <h3 className='text-uppercase text-center'>Liste des rendez-vous</h3>
                <Table responsive striped hover bordered={true} className='text-center mt-5'>
                    <thead>
                    <tr>
                        <th>Nom du donneur</th>
                        <th>Ville</th>
                        <th>Centre de don</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        records.map((rd,index)=>{
                            return <tr key={index}>
                                <td>{rd.nomDonneur}</td>
                                <td>{rd.ville}</td>
                                <td>{rd.centre}</td>
                                <td>{rd.date}</td>
                            </tr>
                        })
                    }
                    </tbody>
                </Table>
                <div className="text-center" style={{margin:"auto", marginTop:"2px", padding:"15px"}}>
                    <Button  color='success' onClick={redirectProfile}>Profile admin</Button><br/></div>
            </CardBody>
        </Card>
    )
}
export default Stock

