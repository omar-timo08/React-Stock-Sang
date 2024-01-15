import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, CardBody,   Container, Table } from 'reactstrap'
import axios from "axios";
const AdminLogin = () => {
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const [result, setResult] = useState('');
    const [name, setName] = useState('');
    const [errors, setErrors] = useState([]);
    const validate = () => {
        const error = {};

        if (!mail) {
            error.mail = "Votre Email est nécessaire !";
        } else if (!/\S+@\S+\.\S+/.test(mail)) {
            error.mail = "Ceci ne correspond pas à un email !";
        } else {
            error.mail = "";
        }
        if (!pass) {
            error.pass = "Votre mot de passe est nécessaire !";
        } else if (pass.length < 8) {
            error.pass = "Votre mot de passe doit être au moins de 8 caractères !";
        } else {
            error.pass = "";
        }
        return error;
    }

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

    const handleSubmit = (e) => {

        e.preventDefault();
        const errors=validate();
        setErrors(errors);
        const errorValues = Object.values(errors);
        const getResult = async () => {
            try {
                const response = await axios(
                    "http://localhost:8888/users-registration/login/" + mail + "/" + pass);
                const response1 = await axios(
                    "http://localhost:8888/users-registration/getName/" + mail);
                setResult(response.data);
                setName(response1.data);
                if (result==1)
                    window.location.replace('http://localhost:3002/adminProfile?name='+name);
            }catch (error){
                return
            }
        };

        getResult();
        //axios.get("http://localhost:8888/users-registration/login/o@gmail.com/123456789")



    }
    return (
        <Card className='mt-2 border-3 rounded-3 ' style={{ margin: 'auto', maxWidth: '600px'}}>
            <CardBody>
                <h3 className='text-center fw-bold'>Authentification des administrateurs</h3>
                <div className="row">
                    <div className="auth-form-container text-center mt-5 d-flex justify-content center" style={{margin:"auto" , width:"500px",padding:"70px", display: 'flex', justifyContent: 'center',}}>
                        <form className="login-form fw-bold" onSubmit={handleSubmit}>
                            <label htmlFor="email">Email</label><br/><br/>
                            <input style={{padding:"10px"}}
                                value={mail}
                                onChange={(e) => setMail(e.target.value)}
                                type="email"
                                placeholder="youremail@gmail.com"
                                id="email"
                                name="email"
                            /><br/><br/>
                            {errors.mail && <div className='error'>{errors.mail}</div>}
                            <label htmlFor="password">Mot de passe</label><br/><br/>
                            <input style={{padding:"10px"}}
                                value={pass}
                                onChange={(e) => setPass(e.target.value)}
                                type="password"
                                placeholder="****"
                                id="password"
                                name="password"
                            /><br/>
                            {errors.pass && <div className='error'>{errors.pass}</div>}
                            <Button color="success" style={{ marginTop: '20px' , padding:"15px", borderRadius:"3"}} type="submit" onClick={handleSubmit}>
                                S'authentifier
                            </Button>
                        </form><br/>
                    </div>
                </div>
            </CardBody>

        </Card>

    )
}
export default AdminLogin