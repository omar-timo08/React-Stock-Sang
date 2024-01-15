import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, CardBody,   Container, Table } from 'reactstrap'
import axios from "axios";
const AjoutBanque = () => {
    const [nom, setNom] = useState('');
    const [nbrePochesSang, setNbrePochesSang] = useState('');
    const [adresse, setAdresse] = useState('');
    /*const getResult = async () => {
        const response = await axios(
            "http://localhost:8888/users-registration/login/o@gmail.com/123456789");

        setResult(response.data);
        console.log(result);
    };

    getResult();*/
    async function save(e) {

        /* try {


             //window.location.replace('http://localhost:3001/?name='+name);
             alert("succes");
             setMail("");
             setPass("");

         } catch (err) {
             alert("Échec de l'inscription");*/
    }
    const queryParams = new URLSearchParams(window.location.search);
    const name = queryParams.get('name');
    function redirectProfile(){
        window.location.replace('http://localhost:3002/adminProfile?name='+name)
    }

      async function ajoutBanque() {
            try {
                 await axios.post("http://localhost:8888/stocksang/ajouterBanque", {
                    nom: nom,
                    adresse: adresse,
                    nbrePochesSang: parseInt(nbrePochesSang,10),
                });
                window.location.replace("http://localhost:3002/ajoutBanque?name="+name)
                alert("Ajout avec succès")
            }catch (e){
                window.location.replace("http://localhost:3002/ajoutBanque?name="+name)
                alert("Erreur")
            }
        };




    return (
        <Card className='mt-2 border-3 rounded-3 ' style={{ margin: 'auto', maxWidth: '600px'}}>
            <CardBody>
                <h3 className='text-center fw-bold'>Ajouter une banque de sang</h3>
                <div className="row">
                    <div className="auth-form-container text-center mt-5 d-flex justify-content center" style={{margin:"auto" , width:"500px",padding:"50px", display: 'flex', justifyContent: 'center',}}>
                        <form className="login-form fw-bold">
                            <label htmlFor="text">Nom de la banque de sang</label><br/><br/>
                            <input style={{padding:"10px"}}
                                   value={nom}
                                   onChange={(e) => setNom(e.target.value)}
                                   type="text"
                            /><br/><br/>
                            <label htmlFor="text">Nombre de poches de sang</label><br/><br/>
                            <input style={{padding:"10px"}}
                                   value={nbrePochesSang}
                                   onChange={(e) => setNbrePochesSang(e.target.value)}
                                   type="number"
                            /><br/><br/>
                            <label htmlFor="text">Adresse de la banque du sang</label><br/><br/>
                            <input style={{padding:"10px"}}
                                   value={adresse}
                                   onChange={(e) => setAdresse(e.target.value)}
                                   type="text"
                            /><br/><br/>
                            <Button color="success" style={{ marginTop: '20px' , padding:"15px", borderRadius:"3"}} type="submit" onClick={()=>ajoutBanque()}>
                                Ajouter
                            </Button>
                            <div className="text-center" style={{margin:"auto", marginTop:"2px", padding:"15px"}}>
                                <Button  color='success' onClick={()=>redirectProfile()}>Profile administrateur</Button><br/>
                            </div>
                        </form><br/>
                    </div>
                </div>
            </CardBody>

        </Card>

    )
}
export default AjoutBanque