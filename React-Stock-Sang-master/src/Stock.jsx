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

    async function deleteBanque(nomBanque) {
        await axios.delete("http://localhost:8888/stocksang/delete/"+nomBanque)
    }

    useEffect(() => {
        axios.get("http://localhost:8888/stocksang/findBanqueSangAll")
            .then(res => {
                setRecords(res.data);
            })
    })


    return(
        <Card className='mt-2 border-3 rounded-3 ' style={{ margin: 'auto', maxWidth: '600px'}}>
            <CardBody>
                <h3 className='text-uppercase text-center'>Banques de sang</h3>
                <Table responsive striped hover bordered={true} className='text-center mt-5'>
                    <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Nbre de poches de sang</th>
                        <th>Adresse</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        records.map((banque,index)=>{
                            return <tr key={index}>
                                <td>{banque.nom}</td>
                                <td>{banque.nbrePochesSang}</td>
                                <td>{banque.adresse}</td>
                                <td> <div className="text-center" style={{margin:"auto", marginTop:"2px", padding:"15px"}}>
                                    <Button  color='danger' onClick={()=>deleteBanque(banque.nom)}>Supprimer</Button><br/>
                                </div></td>
                            </tr>
                        })
                    }
                    </tbody>
                </Table>
                <div className="text-center" style={{margin:"auto", marginTop:"2px", padding:"15px"}}>
                    <Button  color='success' onClick={redirectProfile}>Profile administrateur</Button><br/></div>
            </CardBody>
        </Card>
    )
}
export default Stock

