import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, CardBody,   Container, Table } from 'reactstrap'
import axios from "axios";
const Admin = () => {
    const [mail, setMail] = useState('');
    const [banque, setBanque] = useState('');
    const [age, setAge] = useState('');
    const queryParams = new URLSearchParams(window.location.search);
    const name = queryParams.get('name');
    const getResult = async () => {
        const r=await axios("http://localhost:8888/users-registration/getMail/"+name);
          setMail(r.data);
          const t=await axios("http://localhost:8888/users-registration/getAge/"+name );
          setAge(t.data);
        }
        getResult()

    function redirect(){
        window.location.replace('http://localhost:3002/stock?name='+name)
    }

    function redirect2(){
        window.location.replace('http://localhost:3002/adminLogin')
    }

    return (
        <Card className='mt-2 border-3 rounded-3 ' style={{ margin: 'auto', maxWidth: '600px'}}>
            <CardBody>
                <h3 className='text-center fw-bold'>Administrateur : {name}</h3>

                <Container className='text-center'>
                    <img src={require('./administrator.png')} width="250px" height="250px"  style={{ marginTop: '5px'}}/>
                </Container>
                <div className="text-center" style={{margin:"auto", marginTop:"2px", padding:"15px"}}>
                    <Button  color='success' onClick={redirect}>Liste des banques de sang</Button><br/><Button  onClick={redirect2} color='success' style={{marginTop:'10px' }} >Liste des rendez-vous</Button>
                    <br/>
                    <Button  onClick={redirect2} color='danger' style={{marginTop:'10px' }} >Se déconnecter</Button>
                </div>
            </CardBody>

        </Card>

    )
}
export default Admin