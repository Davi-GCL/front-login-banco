// const [form, setForm] = useState({
//     codConta: '',
//     setSenha: '',
//     idUsuario: '',
//     agencia: '0001'
//   });

//   const [formUser, setFormUser] = useState({
//     nome:'',
//     cpf: '',
//     email:'',
//     telefone:''
//   })

//   async function postConta(userId) {
//     setForm({ ...form, idUsuario: userId });
//     console.log(form);

//     fetch('https://localhost:7044/Conta/Create', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ ...form, idUsuario: userId })
//     })
//     .then(res=>res.json())
//     .then((data)=>{ setAlerta([...alerta,<div className='alert alert-info'> Conta: {data.codConta} Agencia:{data.agencia}, Criado com sucesso!</div>])})
//     .catch(err => console.log(err));
//   }

//   useEffect(() => {
//     if (form.idUsuario !== '') {
//       postConta(form.idUsuario);
//     }
//   }, [form.idUsuario]);

//   async function handleSubmit() {

//     fetch('https://localhost:7044/Usuario/Create', {
//       method: 'POST',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify(formUser)
//     })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data.id);
//       setForm({ ...form, idUsuario: data.id });

//       setAlerta([<div className='alert alert-info'>Usuario: {data.nome} Id: {data.id}. Criado com sucesso!</div>]);
//     })
//     .catch(err => console.log(err));
//   }